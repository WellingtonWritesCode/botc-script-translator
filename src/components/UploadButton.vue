<template>
    <input
        type="file"
        ref="upload"
        :accept="accepts"
        @change="handleUpload"
    />
    <Button :width="width" @click="uploadFile"><slot /></Button>
</template>

<script>
import Button from './Button.vue';

export default {
    props: {
        accepts: String,
        width: {
            type: String,
            default: "auto"
        }
    },
    methods: {
        uploadFile() {
            this.$refs.upload.click();
        },
        handleUpload() {
            const file = this.$refs.upload.files[0];
            if (file && file.size) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    this.$emit('handleFile', reader.result, this.$refs.upload.files[0].name);
                });
                reader.readAsText(file);
            }
        }
    },
    components: { Button },
    emits: ['handleFile']
}
</script>

<style>
input[type="file"]{
    display: none;
}
</style>