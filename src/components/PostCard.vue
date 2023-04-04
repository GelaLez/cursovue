<script lang="ts" setup>
// importar el component postbutton
import PostButton from './PostButton.vue';

</script>


<template>
    <div class="post-card">
        <h3>titulo</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi quod eius, inventore suscipit modi, earum
            commodi distinctio repellendus ea quae? Inventore aliquam libero iure ab laborum provident eum at? </p>
        <PostButton />
    </div>
</template>



<style scoped>
.post-card {
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>