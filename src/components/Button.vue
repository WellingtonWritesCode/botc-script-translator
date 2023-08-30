<template>
    <div :class="pointerClassObject">
        <button 
            class="v-button v-button-hover"
            :class="classObject"
            :style="cssProps"
        >
            <div class="text">
                <slot />
            </div>
        </button>
    </div>
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
            },
            pointerClassObject(){
                return {
                    "v-button-hover--disabled": !this.enabled
                }
            }
        }
    }
</script>