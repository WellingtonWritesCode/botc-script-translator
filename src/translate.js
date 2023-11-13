import charactersJson from './characters.json';
import Papa from 'papaparse';

const clean = id => id === "_meta"? id : id.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

function getIds(script){
    return script.map(character => typeof character === "string"? clean(character) : clean(character.id));
};

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
    const translationJson = locale;
    const translationJsonById = new Map(translationJson.map((character) => [character.id, character]));
    const ids = getIds(script);
    let meta = script.find(obj => obj.id === "_meta")??{"id":"_meta","author":"","name":""};

    let translation = JSON.parse(JSON.stringify(charactersJson.filter((character) => ids.includes(character.id))));

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
