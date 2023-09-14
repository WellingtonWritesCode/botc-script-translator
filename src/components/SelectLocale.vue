<script>
    import { useScriptStore } from '../stores/script';

    export default{
        setup() {
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
            return {
                store,
                options
            }
        },
        data(){
            return {
                active: false,
                firstCall: true
            }
        },
        methods: {
            toggle() {
                this.firstCall = false;
                this.active = !this.active;
            }
        },
        props: {
            label: String,
            width: {
                type: String,
                default: "auto"
            }
        },
        computed: {
            cssProps(){
                return {
                    "--width": this.width
                };
            },
            arrowCssProps(){
                if(this.firstCall) {
                    return {
                        "--flip": "none"
                    }
                }
                return {
                    "--flip": this.active? "flip":"unflip"
                }
            }
        }
    }
</script>

<template>
    <div class="v-select">
        <button class="v-button v-button-hover" :style="cssProps" @click="toggle">
            <div class="text">
                {{ label }} <span class="arrow" :style="arrowCssProps">▼</span>
            </div>
        </button>
        <div class="v-select--dropdown" :style="cssProps" v-if="active">
            <div class="v-select__inner">
                <button
                    v-for="option in options"
                    class="v-button v-select__item v-button-hover text"
                    @click="store.setLocale(option), this.toggle()"
                >
                    {{ option }}
                </button>
            </div>
        </div>
    </div>
</template>