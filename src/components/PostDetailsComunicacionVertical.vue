<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p> {{ content }} </p>
    </div>
</template>

<script lang="ts">
// optener informacion de la manera optionApi
import { defineComponent } from 'vue';

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
    setup(props) {        
       return props
    }
})

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