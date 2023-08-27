import { defineStore } from "pinia";

export const useScriptStore = defineStore('script', {
    state: () => ({
        script: null,
        locale: "Select a locale",
        name: "",
        useCustomLocale: false,
        customLocale: null,
        customLocaleName: ""
    }),

    getters: {
        isNull: (state) => state.script === null,
        isValidLocale(state) {
            if(!this.useCustomLocale) {
                return state.locale != "Select a locale";
            } else {
                return this.customLocale != null;
            }
        }
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
        toggle(){
            this.useCustomLocale = !this.useCustomLocale;
        }
    }
});