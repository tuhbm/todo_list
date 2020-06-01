<template>
  <ul>
    <li
      class="pa-3 mb-3"
      :class="{'done': todo.done === true}"
      v-for="(todo, index) in todoList"
      :key="index"
    >
      <strong>{{todo.title}}</strong>
      <span v-html="changeImportant(todo.important)"></span>
      <span>{{todo.endDate}}</span>
      <p>{{todo.description}}</p>
      <button v-if="!todo.done" @click="$emit('doneControl', index, true)">
        완료
      </button>
      <button v-else @click="$emit('doneControl', index, false)">
        미완료
      </button>
      <button @click="$emit('listDelete', index)">
        삭제
      </button>
      <button @click="listEdit(todo, index)" v-if="todo.status === 'created'">
        수정
      </button>
    </li>
  </ul>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        todoList: {
            type: Array,
            required: false
        }
    },
    methods: {
        listEdit(todo, index) {
            eventBus.listEdit(todo, index);
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
.done {
  background-color: rgb(141, 255, 135);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>
