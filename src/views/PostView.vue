<template>
    <h1>Post vue </h1>
    {{ PostId }}
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

let PostId = ref('')
onMounted(() => {
    const route = useRoute()
    PostId.value = route.params.id
})

</script>