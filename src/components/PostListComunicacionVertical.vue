<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @sayHi="showAlert" />
    </div>
</template>

<script lang="ts" setup>

import PostDetail from '../components/PostDetailsComunicacionVertical.vue'

interface IPost {
    title: string,
    content: string
}

let info: Array<IPost> = [
    { title: "este es el post 1", content: 'tessssssssto ejemplo1' },
    { title: "este es el post 2", content: 'tessssssssto ejemplo2' },
    { title: "este es el post 3", content: 'tessssssssto ejemplo3' },
    { title: "este es el post 4", content: 'tessssssssto ejemplo4' },
    { title: "este es el post 5", content: 'tessssssssto ejemplo5' },
]


function showAlert(msg: string) {
    alert(msg)
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>