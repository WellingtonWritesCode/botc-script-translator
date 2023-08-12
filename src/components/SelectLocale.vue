<script setup>
    import { ref } from 'vue';
    import { useScriptStore } from '../stores/script';
    import { storeToRefs } from 'pinia';

    const store = useScriptStore();
    const { locale } = storeToRefs(store);
    const options = ref([
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
    "vi_VI"
    ]);
</script>

<template>
    <select v-model="locale">
        <option disabled value="Select a locale">Select a locale</option>
        <option v-for="option in options" :key="option" :value="option">
        {{option}}
        </option>
    </select>
</template>
<style>
</style>