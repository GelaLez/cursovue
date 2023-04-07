<template>
    hellow gela
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree" />Acepto los terminos y condiciones
        <select v-model="country">
            <option>Spain</option>
            <option>Uk</option>
            <option>France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>



<script lang="ts" setup>
import { Ref, ref } from 'vue'
let inputText: Ref<string> = ref()
let agree = ref(true)
let country = ref('Spain')

</script>


<style scoped></style>