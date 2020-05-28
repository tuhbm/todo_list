<template>
    <div>
        <h1>View Page</h1>
        <strong>{{todo.content}}</strong>
        <router-link class="link-full primary" to="/detail/:id/:edit">수정하기</router-link>
        <router-link class="link-full accent" to="/">삭제하기</router-link>
        <router-link class="link-full secondary" to="/">뒤로가기</router-link>
    </div>
</template>

<script>
export default {
    name: 'View',
    props: ['todo']
};
</script>

<style scoped>

</style>
