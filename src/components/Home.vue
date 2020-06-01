<template>
    <div class="todo">
        <img class="logo" :src="logo" alt="taekyun logo">
        <div class="todo-container">
            <div class="todo-header">
                <h1>투두 리스트</h1>
                <p>
                    전체 할일: {{todoList.length}} /
                    완료된 할일: {{countDone}} /
                    남은 할일: {{todoList.length - countDone}}
                </p>
            </div>
            <div class="todo-content">
                <div class="case-list">
                    <List/>
                </div>
                <div class="case-write">
                    <ListAdd/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List';
import ListAdd from './ListAdd';
import { mapGetters } from 'vuex';

export default {
    components: {
        List,
        ListAdd,
    },
    computed: {
        ...mapGetters({
            todoList: 'totalTodoList',
            countDone: 'countDone',
            logo: 'logo'
        }),
    }
};
</script>
<style>
div, p, ul, li, h1, h2, span, button, select, input {
    padding: 0;
    margin: 0;
}

ul, li {
    list-style: none;
}
.todo{
    text-align: center;
}
.logo {
    width: 5vw;
}
.todo-header {
    text-align: center;
    border-bottom: 0.1vw solid #000;
}

.todo-content {
    overflow: hidden;
    margin-top: 1vw;
    text-align:left;
    border: 0.1vw solid #000;
}

.todo-content .case-list {
    float: left;
    box-sizing: border-box;
    width: 50%;
    min-height: 20vh;
    padding: 0.3vw;
    border-right: 0.1vw solid #000;
}

.todo-content .case-write {
    float: right;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 0.3vw;
}
</style>
