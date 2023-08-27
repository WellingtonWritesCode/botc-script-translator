<script>
    export default {
        data(){
            return {
                value: false
            }
        },
        props: {
            width: {
                type: String,
                default: "auto"
            },
            on: {
                type: String,
                default: "ON"
            },
            off: {
                type: String,
                default: "OFF"
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
                if(this.label != "") return `${this.label}: ${this.value?this.on:this.off}`;
                return this.value?this.on:this.off;
            }
        },
        methods: {
            toggle(){
                this.value = !this.value;
                this.$emit('toggled', this.value)
            }
        },
        emits: ['toggled']
    }
</script>

<template>
    <button 
        class="v-toggle"
        :style="cssProps"
        @click="toggle"
    >
        <div class="text">
            {{ displayLabel }}
        </div>
    </button>
</template>