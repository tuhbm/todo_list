<template>
    <div>
        <h1>Edit Page</h1>
        <strong>{{todo.title}}</strong>
        <router-link class="link-full primary" to="/">완료</router-link>
        <router-link class="link-full secondary" to="/">취소</router-link>
    </div>
</template>

<script>
export default {
    name: 'Edit',
    props: ['todo']
};
</script>

<style scoped>

</style>
