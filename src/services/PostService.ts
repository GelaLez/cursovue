import { ref } from 'vue'

export class PostService {

    private posts: Ref<Array<IPost>>

    constructor() {
        this.posts = ref<Array<IPost>>([])
    }

    getPosts(): Ref<Array<IPost>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error);

        }
    }

}


export class TareaService {

    private tareas: Ref<Array<ITarea>>

    constructor() {
        this.tareas = ref<Array<ITarea>>([])
    }


    getTareas(): Ref<Array<ITarea>> {
        return this.tareas
    }

    async fetchTareas(): Promise<void> {
        try {
            const url = 'http://localhost:3030/v1/homeworks/'
            const response = await fetch(url)
            const json = await response.json()
            this.tareas.value = await json
        } catch (error) {

        }
    }
}