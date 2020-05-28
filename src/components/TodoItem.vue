<template>
<li class="todo-item">
    <div class="item-check">
      <label :for="`item${todo.id}`" class="lab-check">
        <input :id="`item${todo.id}`" class="chk-check" type="checkbox" />
      </label>
    </div>
    <div class="item-title">
      <router-link :to="`/detail/:${todo.id}`" class="link-item">
        <strong class="title">{{todo.title}}</strong>
      </router-link>
    </div>
    <div class="item-info">
      <span class="info-content">{{todo.end_date}} 까지</span>
    </div>
</li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo']
};
</script>

<style scoped lang="scss">
.todo-item {
  border-top: 0.01em solid #ddd;
  overflow: hidden;
  display: block;
  &:hover {
    background-color: #a8f3f7;
  }

  &:first-child {
    border-top: 0;
  }
  .link-item {
    display: block;
    font-style: normal;
    text-decoration: none;
    color: black;
    font-size: 1em;
    padding: 1em 0;

      .title {
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
  }
  em {
    font-style: normal;
  }
  .item-check,
  .item-title {
    float: left;
  }
  .item-check {
    width: 10%;
    padding: 1em 0;
    .lab-check {
      width: 1em;
    }
    .chk-check {
      width: 1em;
    }
  }
  .item-title {
    width: 70%;
    text-align: left;
  }
  .item-info {
    width: 20%;
    padding: 1em 0;
    float: right;
  }
}
</style>
