<template>
    <div class="list-container">
        <div class="case-filter">
            <button class="btn-filter" @click="getTotalTodoList">전체목록</button>
            <button class="btn-filter" @click="getEndDateTodoList">마감일 지난 목록</button>
            <button class="btn-filter" @click="getCompletedTodoList">완료된목록</button>
        </div>
        <ul class="todo-list">
            <Todo-item v-for="todo in (todoList ? todoList : totalTodoList)" :todo="todo" :key="todo.id" :viewType="viewType"></Todo-item>
        </ul>
        <router-link class="link-full primary" :to="{ name: 'write' }" tag="a">할일 추가</router-link>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import {mapGetters} from 'vuex';
export default {
    name: 'List',
    components: {
        // TodoList,
        TodoItem
    },
    data() {
        return {
            todoList: this.totalTodoList,
            viewType: 'ALL'
        };
    },
    computed: {
        ...mapGetters([
            'totalTodoList',
            'deadlineTodoList',
            'completedTodoList'
        ])
    },
    methods: {
        getTotalTodoList() {
            this.todoList = this.totalTodoList;
            this.viewType = 'ALL';
        },
        getEndDateTodoList() {
            this.todoList = this.deadlineTodoList;
            this.viewType = 'DEADLINE';
        },
        getCompletedTodoList() {
            this.todoList = this.completedTodoList;
            this.viewType = 'COMPLETE';
        }
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
    .todo-list {
        list-style-type: none;
        border: 0.1em solid #000;
    }
</style>
