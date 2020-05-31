<template>
<div class="todo">
    <div class="todo-container">
        <div class="todo-header">
            <h1>투두 리스트</h1>
            <p>전체 할일: {{todoList.length}} / 완료된 할일: {{countDone}} / 남은 할일: {{todoList.length - countDone}}</p>
        </div>
        <div class="todo-content">
            <div class="case-list">
                <List
                :todoList="todoList"
                @statusControl="statusControl"
                @listDelete="listDelete"
                />
            </div>
            <div class="case-write">
                <ListAdd
                @listAdd="listAdd"
                @listEdit="listEdit"
                />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import List from './List';
import ListAdd from './ListAdd';

export default {
    components: {
        List,
        ListAdd
    },
    data() {
        return {
            todoList: []
        };
    },
    computed: {
        countDone() {
            let count = 0;
            this.todoList.forEach(list => {
                if (list.status === 'done') {
                    count++;
                }
            });
            return count;
        }
    },
    methods: {
        listAdd(todo) {
            console.log('Todo add!');
            this.todoList.push({ todo: todo, status: 'created' });
        },
        statusControl(index, status) {
            this.todoList[index].status = status;
        },
        listDelete(index) {
            this.todoList.splice(index, 1);
        },
        listEdit(todo, index) {
            this.todoList[index].todo = todo;
        }
    },
    created() {
        console.log(this);
    }
};
</script>
<style>
    div, p, ul, li, h1, h2, span, button, select, input {
        padding: 0;
        margin: 0;
    }
    ul,li {
        list-style: none;
    }
    .todo-header {
        text-align:center;
        border-bottom: 0.2vw solid #000;
    }
    .todo-content {
        overflow: hidden;
        margin-top: 1vw;
        border: 0.2vw solid #000;
    }
    .todo-content .case-list {
        float: left;
        box-sizing: border-box;
        width: 50%;
        min-height: 10vh;
        padding: 0.3vw;
        border-right: 0.2vw solid #000;
    }
    .todo-content .case-write {
        float: right;
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        padding: 0.3vw;
    }
</style>
