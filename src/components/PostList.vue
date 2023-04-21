<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Listado posts</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ab, culpa architecto ducimus nihil laborum
                fuga excepturi! Assumenda nisi, quam sint, inventore iure perspiciatis saepe, vel pariatur molestiae ea
                nostrum.
                <ul>
                    <li v-for="post in posts" :key="post.id">{{ post.id }}
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1>Listado De Blocks</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas impedit veritatis eum ab illo?
                Cumque nihil iste illum quaerat tenetur vitae fugiat perferendis, ea commodi delectus dolor pariatur ab?
                <li v-for="post in posts" :key="post.id">
                <li> <router-link :to="{ name: 'post', params: { id: post.id } }">Block {{ post.id }}</router-link> </li>
                </li>
            </div>
            <div class="col">
                <h1>Listado De tareas</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae optio excepturi, minus,
                nesciunt ipsum incidunt minima totam nisi neque unde obcaecati saepe! Qui dignissimos tenetur libero eum
                alias sapiente?
                <li v-for="tarea in tareas.result" :key="tareas.result.idtareas">                
                    {{ tareas.result }}
                </li>
            </div>
        </div>
    </div>
</template>

 <!-- compositionApi -->

<script lang="ts" setup>
import { PostService as PostService, TareaService } from '@/services/PostService'
import { defineComponent, onMounted } from 'vue';

const service = new PostService()
const posts = service.getPosts()

const tareasService = new TareaService
const tareas = tareasService.getTareas()

onMounted(async () => {
    await service.fetchAll();
    await tareasService.fetchTareas()
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