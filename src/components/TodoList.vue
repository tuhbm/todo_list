<template>
  <ul class="todo-list">
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-list {
  list-style-type: none;
  border: 0.1em solid #000;
}
</style>
