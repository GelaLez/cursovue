// v-bind:class
// o :class
<template>
    <p v-bind:class="{
        'danger': hasError
    }">el mensaje se ha enviado satisfactoriamente</p>
</template>

<script lang="ts" setup>
   let hasError = true;
</script>

<style>
.danger {
    color: red
}
</style>