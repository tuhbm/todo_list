<template>
    <div>
        <h1>Edit Page</h1>
        <a class="link-full primary" href="">완료</a>
        <router-link class="link-full secondary" :to="{ name: 'List' }">취소</router-link>
    </div>
</template>

<script>
export default {
    name: 'Edit'
};
</script>

<style scoped>

</style>
