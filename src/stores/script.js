import { defineStore } from "pinia";

export const useScriptStore = defineStore('script', {
    state: () => ({
        script: null,
        locale: "Select a locale",
        name: ""
    }),

    getters: {
        isNull: (state) => state.script === null,
        isValidLocale: (state) => state.locale != "Select a locale"
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
        }
    }
});