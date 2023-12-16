import { defineStore } from "pinia";

export const useScriptStore = defineStore('script', {
    state: () => ({
        script: null,
        locale: "Select a locale",
        name: "",
        useCustomLocale: false,
        customLocale: null,
        customLocaleName: "",
        bilingualMode: "Off",
        secondLocale: "en_GB",
        custom2ndLocale: null,
    }),

    getters: {
        isNull: (state) => state.script === null,
        isValidLocale(state) {
            if(!this.useCustomLocale) {
                return state.locale != "Select a locale";
            } else {
                return this.customLocale != null;
            }
        },
        isValid2ndLocale(state) {
            switch(this.bilingualMode){
                case 'List':
                    return true;//state.secondLocale != "Select a locale";
                case 'Custom':
                    return this.custom2ndLocale != null;
                default:
                    return true;
            }
        },
    },

    actions: {
        set(file){
            this.script = file;
        },
        setName(name){
            this.name = name;
        },
        setLocale(locale){
            this.locale = locale;
        },
        setCustomLocale(customLocale, customLocaleName){
            this.customLocale = customLocale;
            this.customLocaleName = customLocaleName;
        },
        toggleCustomLocale(){
            this.useCustomLocale = !this.useCustomLocale;
        },
        setBilingualMode(mode){
            this.bilingualMode = mode;
        },
        set2ndLocale(locale){
            this.secondLocale = locale;
        },
        setCustom2ndLocale(customLocale){
            this.custom2ndLocale = customLocale;
        },
    }
});