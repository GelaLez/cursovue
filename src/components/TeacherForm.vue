<template>
    <section>
        <h3>Anadir Profesor</h3>
        <div> <label for="">Nombre</label> <input type="text" v-model="teacher.teacherName"> </div>
        <div> <label for="">apellidos</label> <input type="text" v-model="teacher.surname"> </div>
        <div> <label for="">dni/nif</label> <input type="text" v-model="teacher.dni"> </div>
        <div><label for="">Materias</label> <input type="text" v-model="subject"> <button
                @click="handleSubject()">Agregar</button> </div>
        <div>
            <ul>
                <li v-for="(elm, index) in teacher.subjects" :key="index"> {{ elm }} </li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc" /> Documentacion Entregada
        <button @click="handleAddTeacher()"> Agregar</button>
    </section>
    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Dni</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index"> {{ item }} </li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else="elm.doc">No Entregada</th>
            </tr>
        </table>
    </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'



interface ITeacher {
    teacherName: string,
    surname: string,
    dni: string,
    subjects: Array<string>,
    doc: boolean
}

let teacher: Ref<ITeacher> = ref({
    teacherName: '',
    surname: '',
    dni: '',
    subjects: [],
    doc: false
})

let teachers: Ref<Array<ITeacher>> = ref([])

let subject: Ref<string> = ref('')


const handleSubject = () => {
    teacher.value.subjects.push(subject.value)
    subject.value = ''
}

const handleAddTeacher = () => {
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        surname: teacher.value.surname,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    })

    teacher.value.teacherName = ''
    teacher.value.surname = ''
    teacher.value.dni = ''
    teacher.value.subjects = []
    teacher.value.doc = false
}

</script>

<style scoped></style>
