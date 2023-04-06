<template>
    <div>Hola gela compositionApi</div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue';
onMounted(() => {
    console.log("onMounted")
})

onUpdated(() => {
    console.log("onUpdated")
})
</script>

<style scoped></style>