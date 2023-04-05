<template>
    <ul>
        <li v-for="country in countries" v-bind:key="country">
            {{ country.name }}
        </li>
    </ul>
</template>


<script lang="ts" setup>

import { Ref, ref } from 'vue'

// array simple
// let countries: Ref<Array<string>> = ref([
//     'Spain', 'France', 'Uk', 'Italy', 'Portugal'
// ])


interface ICountry {
    code: string,
    name: string
}

let countries: Ref<Array <ICountry>> = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: 'UK'
    }
])

</script>

<style scoped>
h1 {
    color: royalblue
}
</style>