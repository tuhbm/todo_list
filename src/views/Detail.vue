<template>
    <div>
        <h1>Detail page</h1>
        <router-view :todo="todo"></router-view>
    </div>

</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            todo: {
                id: 'aaa',
                importance: 1,
                title: '예시 제목',
                content: '내용입니다.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                register_date: '2020-05-27',
                end_date: '2020-05-27',
                complete: false
            }
        };
    }
};
</script>

<style scoped>

</style>
