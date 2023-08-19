<template>
    <input
        type="file"
        ref="upload"
        accept="application/json"
        @change="handleUpload"
    />
    <Button @click="uploadFile">Upload Script</Button>
</template>

<script>
import { useScriptStore } from '../stores/script';
import Button from './Button.vue';

export default {
    methods: {
        uploadFile() {
            this.$refs.upload.click();
        },
        handleUpload() {
            const store = useScriptStore();
            const file = this.$refs.upload.files[0];
            store.setName(this.$refs.upload.files[0].name.slice(0, -5));
            if (file && file.size) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    try {
                        const roles = JSON.parse(reader.result);
                        store.set(roles);
                    }
                    catch (e) {
                        store.set(null);
                        alert(`Unable to read script:  ${e.message}`);
                    }
                });
                reader.readAsText(file);
            }
        }
    },
    components: { Button }
}
</script>

<style>
input[type="file"]{
    display: none;
}
</style>