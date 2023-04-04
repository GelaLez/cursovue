<!-- optionAPI -->
<template>
    <h3></h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CounterOption',
    components: {},
    data() {
        let counter = 0;        
        return { counter }
    },
    methods: {
        addCounter() {
            this.counter++
            console.log(this.counter)
        }
    }
})
</script>


<style></style>