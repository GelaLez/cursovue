// opcionAPI y uso de los diferentes ciclos de vida 
<template>
    <div>
        Hola mundo
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CycleOption',
    data() {

    },
    methods: {

    },
    created() {
        console.log("created")
    },
    mounted() {
        console.log("mounted")
    },
    update() {
        console.log("update")
    },
    unmounted() {
        console.log("unmounted")
    }
})
</script>

<style scoped></style>