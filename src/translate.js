import characters from './characters.json';
import Papa from 'papaparse';

function stringToArray(string){
    try {
        return Papa.parse(string,{transform:(s)=>{return s.trim()}}).data[0];
    } catch(e) {
        if(e instanceof TypeError) {
            return [];
        } else {
            throw e;
        }
    };
};

function translateCharacter(character, translation, newId){
    const handleNullReminders = (reminders, defaultReminders) => reminders === null? defaultReminders : stringToArray(reminders);
    character.name = translation.name??character.name;
    character.ability = translation.ability??character.ability;
    character.firstNightReminder = translation.firstNightReminder??character.firstNightReminder;
    character.otherNightReminder = translation.otherNightReminder??character.otherNightReminder;
    character.remindersGlobal = handleNullReminders(translation.remindersGlobal, character.remindersGlobal);
    character.reminders = handleNullReminders(translation.reminders, character.reminders);
    character.id = newId;
};

function handleTranslation(script, locale, localeName){
    const charactersJson = JSON.parse(JSON.stringify(characters));
    const translationJson = locale;
    const translationJsonById = new Map(translationJson.map(character => [character.id, character]));
    const charactersJsonById = new Map(charactersJson.map(character => [character.id, character]));
    const getCharacter = id => charactersJsonById.get(id);
    let meta = script.find(obj => obj.id === "_meta")??{"id":"_meta","author":"","name":""};

    //this is a goddamn mess
    let translation = script.map(character => typeof character === "string"
                    ? getCharacter(character)
                    : getCharacter(character.id))
                    .filter(character => character != undefined);

    translation.forEach(character => {
        let newId = `${localeName}_${character.id}`;
        translateCharacter(character, translationJsonById.get(character.id), newId);
    });

    translation.unshift(meta);

    return translation;
}

export function translate(script, localeName){
    return import(`./assets/json/${localeName}.json`).then(function(result){
        return handleTranslation(script, result.default, localeName);
    });
};

export function translateCustomLocale(script, locale, localeName){
    return handleTranslation(script, locale, localeName);
}
