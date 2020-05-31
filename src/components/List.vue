<template>
  <ul>
    <li
      class="pa-3 mb-3"
      :class="{'done': list.status === 'done'}"
      v-for="(list, index) in todoList"
      :key="index"
    >
      <p>{{list.todo}}</p>
      <button v-if="list.status === 'created'" @click="$emit('statusControl', index, 'done')">
        완료
      </button>
      <button v-else @click="$emit('statusControl', index, 'created')">
        미완료
      </button>
      <button @click="$emit('listDelete', index)">
        삭제
      </button>
      <button @click="listEdit(list.todo, index)" v-if="list.status === 'created'">
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
