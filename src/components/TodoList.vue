<template>
    <ul class="todo-list">
        <todo-item :todo="todo" :key="todo.id" v-for="todo in todos"></todo-item>
    </ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    props: ['todos']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .todo-list {
        list-style-type: none;
        border: 0.1em solid #000;
    }
</style>
