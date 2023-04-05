// v-bind:class
// o :class
<template>
    <p v-bind:style="{
        'backgroundColor': '#ccc', color: c
    }">El mensaje se ha enviado satisfactoriamente</p>
    <button @click="handClick()">Cambiar color</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let c = ref('#fff')
const handClick = () => { c.value = '#ff0000' }

</script>

<style></style>