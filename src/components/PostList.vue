<template>
    <h1>listado posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        {{ posts }}
    </ul>
</template>

<script lang="ts">
import {PostService as PostService} from '@/services/PostService'
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

<style scoped></style>