<script setup>
    import { toRaw } from 'vue';
    import { translate, translateCustomLocale } from "../translate";
    import { useScriptStore } from '../stores/script';
    import { saveAs } from 'file-saver';
    import Button from './Button.vue';
    import UploadButton from './UploadButton.vue';
    import Select from './Select.vue';
    import Toggle from './Toggle.vue';
    import Papa from 'papaparse';
    import Cycle from './Cycle.vue';
    import { locales } from '../constants';

    const store = useScriptStore();

    function canTranslate(){
        return !store.isNull && store.isValidLocale && store.isValid2ndLocale;
    }

    async function translateScript(){
        if(!canTranslate()) return;

        if(!store.useCustomLocale) {
            translate(toRaw(store.script), store.locale, await getRolesFrom2ndLocale()).then(function(translatedScript){
                const outName = `${store.name} - ${store.locale}.json`;
                const scriptBlob = new Blob([JSON.stringify(translatedScript)]);
                saveAs(scriptBlob, outName);
            });
        } else {
            const translatedScript = translateCustomLocale(toRaw(store.script), toRaw(store.customLocale), store.customLocaleName, await getRolesFrom2ndLocale());
            const outName = `${store.name} - ${store.customLocaleName}.json`;
            const scriptBlob = new Blob([JSON.stringify(translatedScript)]);
            saveAs(scriptBlob, outName);
        }
    }

    function localeLabel(){
        return `Locale: ${store.locale}`;
    }

    function secondLocaleLabel(){
        return `Locale: ${store.secondLocale}`;
    }

    function setScript(rawRoles, fileName) {
        try {
            const roles = JSON.parse(rawRoles);
            store.set(roles);
            store.setName(fileName.slice(0, -5));
        }
        catch (e) {
            store.set(null);
            alert(`Unable to read script:  ${e.message}`);
        }
    }

    function parseCustomLocale(file, fileName){
        const roles = Papa.parse(file, {header:true}).data;
        store.setCustomLocale(roles, fileName.slice(0, -4));
    }

    function parseCustom2ndLocale(file){
        const roles = Papa.parse(file, {header:true}).data;
        store.setCustom2ndLocale(roles);
    }

    async function getRolesFrom2ndLocale(){
        const output = async(roles) => new Map(roles.map(character => [character.id, character]))
        
        switch(store.bilingualMode){
            case 'List':
                let roles = await import(`../assets/json/${store.secondLocale}.json`);
                return output(roles.default);
            case 'Custom':
                return output(store.custom2ndLocale);
            default:
                return false;
        }
    }
</script>

<template>
    <div class="buttons--container">
        <div style="display:flex; flex-direction: column; gap: 2rem;">
            <div class="button--row">
                <a><UploadButton width="7.5rem" accepts="application/json" @handle-file="setScript">Upload Script</UploadButton></a>
                <a>
                    <UploadButton v-if="store.useCustomLocale"
                    width="12.5rem"
                    accepts="text/csv"
                    @handle-file="parseCustomLocale"
                    >
                        Upload Custom Locale
                    </UploadButton>
                    <Select v-else width="12.5rem" :label="localeLabel()" :options="locales" @selected="locale => store.setLocale(locale)" />
                </a>
            </div>
            <div class="button--row">
                <a><Button width="7.5rem" :enabled="canTranslate()" @click="translateScript">Translate</Button></a>
                <a><Toggle label="Use custom locale" on="Yes" off="No" width="12.5rem" @toggled="store.toggleCustomLocale" /></a>
            </div>
            <div class="button--row" style="gap:2rem">
                <a>
                    <Select v-if="store.bilingualMode === 'List'" width="12.5rem" :label="secondLocaleLabel()" :options="locales" @selected="locale => store.set2ndLocale(locale)" />
                    <UploadButton v-else-if="store.bilingualMode === 'Custom'"
                    width="12.5rem"
                    accepts="text/csv"
                    @handle-file="parseCustom2ndLocale"
                    >
                        Upload Custom Locale
                    </UploadButton>
                    <Button v-else :enabled="false" width="12.5rem">Disabled</Button>
                </a>
                <a><Cycle label="Bilingual mode" :options='["Off", "List", "Custom"]' width="9.5rem" @cycled="mode => store.setBilingualMode(mode)"/></a>
            </div>
        </div>
    </div>
</template>