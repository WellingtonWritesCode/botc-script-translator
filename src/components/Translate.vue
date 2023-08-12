<script setup>
    import { toRaw } from 'vue';
    import UploadButton from './UploadButton.vue';
    import SelectLocale from './SelectLocale.vue'
    import { translate } from "../translate";
    import { useScriptStore } from '../stores/script';
    import { saveAs } from 'file-saver';

    const store = useScriptStore();

    function translateScript(){
        translate(toRaw(store.script), store.locale).then(function(translatedScript){
            const outName = `${store.name} - ${store.locale}.json`;
            const scriptBlob = new Blob([JSON.stringify(translatedScript)], {type:"text/plain"});
            saveAs(scriptBlob, outName);
        });
    }
</script>

<template>
    <div>
        <UploadButton />
    </div>
    <div>
        <SelectLocale />
    </div>
    <div>
        <button :disabled="store.isNull || !store.isValidLocale" @click="translateScript">Translate</button>
    </div>
</template>

<style>
</style>