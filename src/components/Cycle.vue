<script>
    export default {
        data(){
            return {
                index: 0,
            }
        },
        props: {
            width: {
                type: String,
                default: "auto"
            },
            options: {
                type: Array
            },
            label: {
                type: String,
                default: ""
            }
        },
        computed: {
            cssProps(){
                return {
                    "--width": this.width
                }
            },
            displayLabel(){
                if(this.label != "") return `${this.label}: ${this.options[this.index]}`;
                return this.options[this.index];
            }
        },
        methods: {
            cycle(){
                this.index = (++this.index) % this.options.length
                this.$emit('cycled', this.options[this.index])
            }
        },
        emits: ['cycled']
    }
</script>

<template>
    <button 
        class="v-toggle v-button-hover"
        :style="cssProps"
        @click="cycle"
    >
        <div class="text">
            {{ displayLabel }}
        </div>
    </button>
</template>