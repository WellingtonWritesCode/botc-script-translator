<script>
    import { useScriptStore } from '../stores/script';

    export default{
        setup() {
            const store = useScriptStore();
            return {
                store
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
            },
            options: Array
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
                    @click="$emit('selected', option), this.toggle()"
                >
                    {{ option }}
                </button>
            </div>
        </div>
    </div>
</template>