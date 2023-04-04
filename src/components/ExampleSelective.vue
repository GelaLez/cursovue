<template>
    <h1 v-show="age < 18">Eres menor de edad</h1>
    <h2 v-show="age > 18">Eres mayor de edad</h2>
</template>


<script lang="ts"  setup>
     let age = 10
</script>