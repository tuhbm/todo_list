<template>
    <div class="todo">
        <div class="case-filter">
            <button class="btn-filter">전체목록</button>
            <button class="btn-filter">마감 임박</button>
            <button class="btn-filter">할일</button>
            <button class="btn-filter">완료된목록</button>
        </div>
        <Todo-list :todos="todos"/>
        <router-link class="link-full primary" to="/write" tag="a">할일 추가</router-link>
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';

export default {
    name: 'Todo',
    components: {
        TodoList,
    },
    data() {
        return {
            todos: [
                {
                    id: 'aaa',
                    importance: 1,
                    title: '예시 제목111111111',
                    content: '내용입니다1111111111.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    register_date: '2020-05-2711111111',
                    end_date: '2020-05-11',
                    complete: false,
                },
                {
                    id: 'bbb',
                    importance: 2,
                    title: '예시 제목2222222222',
                    content: '내용입니다2222222222.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    register_date: '2020-05-272222222222',
                    end_date: '2020-05-22',
                    complete: false,
                },
                {
                    id: 'ccc',
                    importance: 3,
                    title: '예시 제목333333333',
                    content: '내용입니다333333333.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    register_date: '2020-05-273333333',
                    end_date: '2020-05-33',
                    complete: false,
                },
            ],
        };
    }
};
</script>

<style lang="scss">

    .btn-filter {
        box-shadow: inset 0px 1px 0px 0px #97c4fe;
        background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
        background-color: #3d94f6;
        border-radius: 6px;
        border: 1px solid #26589e;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #1570cd;
        margin: 1vw;
    }

    .btn-filter:hover {
        background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
        background-color: #1e62d0;
    }

    .btn-filter:active {
        position: relative;
        top: 1px;
    }
</style>
