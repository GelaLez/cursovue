<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p> {{ content }} </p>
        <input type="text" v-model="message">
        <button @click="handdleClick">di hola</button>
    </div>
</template>

<script lang="ts" setup>
// optener informacion de la manera optionApi
/*
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'Este post no tiene contenido'
        }
    },
    emits: ["sayHi"],
    setup(props, { emit }) {
        const handdleClick = () => {
            emit("sayHi", message.value)
        }
        let message: Ref<string> = ref("")
        return { props, message, handdleClick }
    }
})
*/

import { defineProps, defineEmits, Ref, ref } from 'vue'

const props = defineProps({ title: String, content: String })

const emit = defineEmits(['sayHi'])

const handdleClick = () => {
    emit('sayHi', message.value)
}

let message: Ref<String> = ref("")

</script>

<style scoped>
.post {
    width: 300px;
    height: 100px;
    background-color: rgb(234, 185, 151);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>

//https://www.youtube.com/watch?v=4mNKZD3Kr6k&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=6&ab_channel=GOGODEV