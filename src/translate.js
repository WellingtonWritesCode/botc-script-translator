import charactersJson from './characters.json';
import Papa from 'papaparse';

const clean = id => id.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

function getIds(script){
    let ids = [];
    script.forEach(character => {
        ids.push(clean(character.id));
    });
    return ids;
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
    character.name = translation.name;
    character.ability = translation.ability;
    character.firstNightReminder = translation.firstNightReminder;
    character.otherNightReminder = translation.otherNightReminder;
    character.remindersGlobal = stringToArray(translation.remindersGlobal);
    character.reminders = stringToArray(translation.reminders);
    character.id = newId;
};

export function translate(script, locale){
    return import(`./assets/json/${locale}.json`).then(function(result){
        const translationJson = result.default;
        const translationJsonById = new Map(translationJson.map((character) => [character.id, character]));
        const ids = getIds(script);

        let translation = JSON.parse(JSON.stringify(charactersJson.filter((character) => ids.includes(character.id))));

        translation.forEach(character => {
            let newId = `${locale}_${character.id}`;
            translateCharacter(character, translationJsonById.get(character.id), newId);
        });

        return translation;
    });
};

export function translateCustomLocale(script, locale, localeName){
    const translationJson = locale;
    const translationJsonById = new Map(translationJson.map((character) => [character.id, character]));
    const ids = getIds(script);

    let translation = JSON.parse(JSON.stringify(charactersJson.filter((character) => ids.includes(character.id))));

    translation.forEach(character => {
        let newId = `${localeName}_${character.id}`;
        translateCharacter(character, translationJsonById.get(character.id), newId);
    });

    return translation;
}
