<template>
    <h3>Registry for teachers</h3>
    <br>
    <form>
        <label for="">Name</label>
        <input type="text" v-model="inputName">
        <br>
        <label for="">Lastname</label>
        <input type="text" v-model="inputLastName">
        <br>
        <label for="">dnis</label>
        <input type="text" v-model="inputDnis">
        <br>
        <label for="">Materias que conoce</label>
        <input type="text" v-model="inputSubjects">
        <br>
        <label for="">Documentacion completa</label>
        <input type="checkbox" v-model="inputDocuments">
        <br>
        <button type="button" @click="btnSubmit">Send</button>
    </form>
    <h3>Table of teachers</h3>
    <br>
    <br>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Dnis</th>
                <th>Subjets</th>
                <th>Documents</th>
            </tr>
        </thead>
        <tbody v-for="(teacher, index) in ArrayTeachers">
            <tr>
                <th>{{ index + 1 }}</th>
                <th>{{ teacher.Name }}</th>
                <td>{{ teacher.LastName }} </td>
                <td>{{ teacher.Dnis }}</td>
                <td>{{ teacher.Subjects }}</td>
                <td>{{ teacher.Documents }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
let inputName = ref();
let inputLastName = ref();
let inputDnis = ref();
let inputSubjects = ref();
let inputDocuments = ref();

interface ITeachers {
    Name: string,
    LastName: string,
    Dnis: string,
    Subjects: string,
    Documents: string
}

let ArrayTeachers: Ref<Array<any>> = ref([
])

const btnSubmit = (): void => {

    let ObjectTeacher = {
        Name: inputName.value,
        LastName: inputLastName.value,
        Dnis: inputDnis.value,
        Subjects: inputSubjects.value,
        Documents: inputDocuments.value,
    }

    ArrayTeachers.value.push(ObjectTeacher)

    inputName.value = ''
    inputLastName.value = ''
    inputDnis.value = ''
    inputSubjects.value = ''
    inputDocuments.value = ''


}
</script>

<style scoped>
table {
    border-collapse: collapse;
    text-align: left;
    border: 1px solid;

}

td {
    height: 50px;
    vertical-align: bottom;
}

h3 {
    color: blueviolet
}
</style>


nombre
apelidos
dnis
matrias que conoce
check si ya tiene todas los documentacion
skils 
tabla de registros

