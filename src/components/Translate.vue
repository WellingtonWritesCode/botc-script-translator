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

    const store = useScriptStore();
    const options = [
                "en_GB",
                "nn_NO",
                "nb_NO",
                "ar_AR",
                "es_AR",
                "fi_FI",
                "hu_HU",
                "nl_NL",
                "tr_TR",
                "it_IT",
                "kw_KW",
                "fa_IR",
                "fr_FR",
                "sv_SE",
                "es_ES",
                "ru_RU",
                "pt_BR",
                "de_DE",
                "pt_PT",
                "pl_PL",
                "zh_TW",
                "ja_JA",
                "fil_PH",
                "zh_CN",
                "zh_CN (Anlijie)",
                "he_IL",
                "vi_VI",
                "slv_SLV",
            ];

    function translateScript(){
        if(store.isNull || !store.isValidLocale) return;
        if(!store.useCustomLocale) {
            translate(toRaw(store.script), store.locale).then(function(translatedScript){
                const outName = `${store.name} - ${store.locale}.json`;
                const scriptBlob = new Blob([JSON.stringify(translatedScript)]);
                saveAs(scriptBlob, outName);
            });
        } else {
            const translatedScript = translateCustomLocale(toRaw(store.script), toRaw(store.customLocale), store.customLocaleName);
            const outName = `${store.name} - ${store.customLocaleName}.json`;
            const scriptBlob = new Blob([JSON.stringify(translatedScript)]);
            saveAs(scriptBlob, outName);
        }
    }

    function localeLabel(){
        return `Locale: ${store.locale}`;
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
</script>

<template>
    <div class="buttons--container">
        <div style="display:flex; flex-direction: column; gap: 2rem;">
            <div style="display: flex; gap: 4rem;">
                <a><UploadButton width="7.5rem" accepts="application/json" @handle-file="setScript">Upload Script</UploadButton></a>
                <a>
                    <UploadButton v-if="store.useCustomLocale" width="12.5rem" accepts="text/csv" @handle-file="parseCustomLocale">Upload Custom Locale</UploadButton>
                    <Select v-else width="12.5rem" :label="localeLabel()" :options="options" @selected="locale => store.setLocale(locale)" />
                </a>
            </div>
            <div style="display: flex; gap: 4rem;">
                <a><Button width="7.5rem" :enabled="!store.isNull && store.isValidLocale" @click="translateScript">Translate</Button></a>
                <a><Toggle label="Use custom locale" width="12.5rem" on="Yes" off="No" @toggled="store.toggle">Temp</Toggle></a>
                <a></a>
            </div>
        </div>
    </div>
</template>