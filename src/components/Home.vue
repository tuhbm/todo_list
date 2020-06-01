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
                :todoList="this.todoList"
                @doneControl="doneControl"
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
            todoList: [
                {
                    id: 'aaa',
                    importance: 1,
                    title: '예시 제목111111111',
                    description: '내용입니다1111111111.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    endDate: '2020-06-11',
                    done: false,
                },
                {
                    id: 'bbb',
                    importance: 2,
                    title: '예시 제목2222222222',
                    description: '내용입니다2222222222.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    endDate: '2020-05-22',
                    done: true,
                },
                {
                    id: 'ccc',
                    importance: 3,
                    title: '예시 제목333333333',
                    description: '내용입니다333333333.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                    endDate: '2020-05-27',
                    done: false,
                },
            ]
        };
    },
    computed: {
        countDone() {
            let count = 0;
            this.todoList.forEach(list => {
                if (list.done === true) {
                    count++;
                }
            });
            return count;
        }
    },
    methods: {
        listAdd(todo) {
            console.log('Todo add!');
            this.todoList.push({
                id: todo.id,
                title: todo.title,
                description: todo.description,
                endDate: todo.endDate,
                important: todo.important,
                done: false
            });
        },
        doneControl(index, status) {
            this.todoList[index].done = status;
        },
        listDelete(index) {
            this.todoList.splice(index, 1);
        },
        listEdit(todo, index) {
            this.todoList[index].id = todo.id;
            this.todoList[index].title = todo.title;
            this.todoList[index].description = todo.description;
            this.todoList[index].endDate = todo.endDate;
            this.todoList[index].important = todo.important;
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
        min-height: 20vh;
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
