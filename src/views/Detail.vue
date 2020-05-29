<template>
    <div>
        <h1>Detail page</h1>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.todo);
    }
};
</script>

<style scoped>

</style>
