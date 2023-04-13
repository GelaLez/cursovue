<template>
    <h1>listado posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        {{ posts }}
    </ul>
</template>

<!-- // option api

<script lang="ts">
import { PostService as PostService } from '@/services/PostService'
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'PostList',
    setup() {
        const service = new PostService()
        const posts = service.getPosts()
        onMounted(async () => {
            await service.fetchAll();
        })
        console.log(posts)
        return { posts }
    }
})
</script>
 -->


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



<style scoped></style>