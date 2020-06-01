<template>
  <ul>
    <li
      class="pa-3 mb-3"
      :class="{'done': todo.done === true}"
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
        <p>{{todo.description}}</p>
        <button v-if="!todo.done" @click="doneControl(todo.id)">
          완료
        </button>
        <button v-else @click="doneControl(todo.id)">
          미완료
        </button>
        <button @click="listDelete(todo.id)">
          삭제
        </button>
        <button @click="listEdit(todo)" v-if="todo.done === false">
          수정
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { eventBus } from '../main';
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            todoList: 'totalTodoList'
        })
    },
    methods: {
        doneControl(id) {
            this.$store.dispatch('doneTodo', id);
        },
        listDelete(id) {
            this.$store.dispatch('deleteTodo', id);
        },
        listEdit(todo) {
            eventBus.listEdit(todo);
        },
        changeImportant(importantValue) {
            if (importantValue === 1) {
                return '중요';
            } else if (importantValue === 2) {
                return '보통';
            } else {
                return '여유';
            }
        }
    }
};
</script>

<style scoped>

li {
    width: 100%;
    border-bottom: 0.2vw solid #ddd;
    margin-bottom: 0.5vw
}
li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}
.item-header{
  overflow: hidden;
}
.item-title{
  float: left;
}
.item-info{
  float: right;
}
.item-end{
  display: block;
}
.done {
  background-color: rgb(141, 255, 135);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>
