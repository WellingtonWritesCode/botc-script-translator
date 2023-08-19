<script setup>
    import { toRaw } from 'vue';
    import { translate } from "../translate";
    import { useScriptStore } from '../stores/script';
    import { saveAs } from 'file-saver';
    import Button from './Button.vue';
    import UploadButton from './UploadButton.vue';
    import SelectLocale from './SelectLocale.vue';

    const store = useScriptStore();

    function translateScript(){
        if(store.isNull || !store.isValidLocale) return;
        translate(toRaw(store.script), store.locale).then(function(translatedScript){
            const outName = `${store.name} - ${store.locale}.json`;
            const scriptBlob = new Blob([JSON.stringify(translatedScript)]);
            saveAs(scriptBlob, outName);
        });
    }

    function localeLabel(){
        return `Locale: ${store.locale}`;
    }
</script>

<template>
    <div class="container">
        <div>
            <div>
                <SelectLocale :label="localeLabel()" />
            </div>
            <div style="display: flex;">
                <a><UploadButton /></a>
                <a><Button :enabled="!store.isNull && store.isValidLocale" @click="translateScript">Translate</Button></a>
            </div>
        </div>
    </div>
</template>