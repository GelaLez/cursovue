<template>
    <h1>Listado posts</h1>    
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }} <button class="btn btn-primary">Hola mexico</button>   </li>
        
    </ul>
</template>

 <!-- compositionApi -->

<script lang="ts" setup>
import { PostService as PostService } from '@/services/PostService'
import { defineComponent, onMounted } from 'vue';
const service = new PostService()
const posts = service.getPosts()
onMounted(async () => {
    await service.fetchAll();
})

</script>



<style scoped lang="scss">
.post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none
}

$red : '#ff00000'

</style>