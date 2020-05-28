<template>
  <li class="todo-item">
    <div class="item-check">
      <label for="item0" class="lab-check">
        <input id="item0" class="chk-check" type="checkbox" />
      </label>
    </div>
    <div class="item-title">
      <a href="" class="link-item">
        <strong class="title"
          >제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</strong
        >
      </a>
    </div>
    <div class="item-info">
      <em class="info-subject">마감일</em>
      <span class="info-content">2020.09.10</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem"
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
    display:block;
    font-style: normal;
    text-decoration: none;
    color: black;
    font-size: 1em;
    padding: 1em 0;
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
    width:60%;
    text-align: left;
  }
  .item-info {
    width:30%;
    padding: 1em 0;
    float: right;
  }
}
</style>
