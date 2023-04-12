<!-- 
<template>
    <div>
        <input type="text" v-model="message" />
        <h3> {{ message }} </h3>
        <h3> {{ reverse }} </h3>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from 'vue';

let message: Ref<string> = ref('')
const reverse = computed(() => message.value.split('').reverse().join(''))
</script>

<style scoped>
.input {
    border-color: aqua;
}
</style>
 -->



<template>
    <div>
        <label v-custom-size="40" >Subtotal</label>
        <input type="number" v-model="subtotal">
        <h3 v-custom-size="100">Valor total a pagar : {{totalVat}} ( {{vat}} % ) </h3>
    </div>
</template>
 
<script lang="ts" setup>
import { computed, Ref, ref } from 'vue'

const vat = 21
const subtotal: Ref<number> = ref(0)
const totalVat = computed(() => { (vat * subtotal.value) / 100 })


</script>
 
<style scoped></style>