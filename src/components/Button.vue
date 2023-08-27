<template>
    <button 
        class="v-button"
        :class="classObject"
        :style="cssProps"
    >
        <div class="text">
            <slot />
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: "auto"
            },
            enabled: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            classObject(){
                return {
                    "v-button--disabled": !this.enabled
                }
            },
            cssProps(){
                return {
                    "--width": this.width
                }
            }
        }
    }
</script>