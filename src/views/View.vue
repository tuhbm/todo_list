<template>
    <div>
        <h1>View Page</h1>
        <router-link class="link-full primary" :to="{ name: 'edit' }">수정하기</router-link>
        <a class="link-full accent" href="">삭제하기</a>
        <router-link class="link-full secondary" :to="{ name: 'list' }">뒤로가기</router-link>
    </div>
</template>

<script>
export default {
    name: 'View'
};
</script>

<style scoped>

</style>
