<template>
    <ul class="list-todo">
        <li
            :class="{'done': todo.done}"
            v-for="(todo, index) in todoList"
            :key="index"
        >
            <div class="item-header">
                <strong class="item-title">{{todo.title}}</strong>
                <div class="item-info">
                    <span class="item-importance">우선순위: {{changeImportant(todo.importance)}}</span>
                    <span class="item-end">마감일{{todo.endDate}}</span>
                </div>
            </div>
            <div class="item-body">
                <p class="item-description">{{todo.description}}</p>
                <button class="btn-filter" v-if="todo.done" @click="toggleDone(todo.id)">
                    미완료
                </button>
                <button class="btn-filter" v-else @click="toggleDone(todo.id)">
                    완료
                </button>
                <button class="btn-filter" @click="listDelete(todo.id)">
                    삭제
                </button>
                <button class="btn-filter" @click="listEdit(todo)" v-if="!todo.done">
                    수정
                </button>
            </div>
        </li>
    </ul>
</template>

<script>
import { eventBus } from '../main';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            todoList: 'totalTodoList'
        })
    },
    importance: [
        {value: 1, text: '중요'},
        {value: 2, text: '보통'},
        {value: 3, text: '여유'}
    ],
    methods: {
        toggleDone(id) {
            this.$store.dispatch('doneTodo', id);
        },
        listDelete(id) {
            this.$store.dispatch('deleteTodo', id);
        },
        listEdit(todo) {
            eventBus.listEdit(todo);
        },
        changeImportant(importantValue) {
            return this.$options.importance.find(item => item.value === Number(importantValue)).text;
        }
    }
};
</script>

<style>

.list-todo li {
    width: 100%;
    border-bottom: 0.1vw solid #ddd;
    margin-bottom: 0.5vw
}

.list-todo li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}

.item-header {
    overflow: hidden;
    padding: 0.5vw;
}
.item-body{
    padding: 0.5vw;
}

.item-title {
    float: left;
}

.item-info {
    float: right;
}

.item-end {
    display: block;
}
.btn-filter {
    box-shadow: inset 0 1px 0 0 #97c4fe;
    background: #3d94f6 linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
    border-radius: 6px;
    border: 1px solid #26589e;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0 1px 0 #1570cd;
    margin: 0.5vw 0.5vw 0.5vw 0;
}
.btn-filter:hover {
    background: #1e62d0 linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
}
.btn-filter:active {
    position: relative;
    top: 1px;
}
.item-title{
    font-weight: normal;
    font-size: 1.3vw;
}
.item-importance,
.item-end {
    font-size: 1vw;
    color: #706d73;
}

.done {
    background-color: rgb(141, 255, 135);
}

.done .item-title,
.done .item-description,
.done .item-importance,
.done .item-end{
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
}
</style>
