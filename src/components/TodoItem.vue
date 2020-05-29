<template>
<li class="todo-item" :class="addItemClass">
    <div class="item-check">
      <label :for="`item${todo.id}`" class="lab-check">
        <input :id="`item${todo.id}`" :checked="todo.complete" class="chk-check" type="checkbox" />
      </label>
    </div>
    <div class="item-title">
      <router-link :to="{ name: 'view', params: { id: todo.id }}" class="link-item">
        <strong class="title">{{todo.title}}</strong>
      </router-link>
    </div>
    <div class="item-info">
      <span class="info-date">{{todo.end_date}} 까지</span>
    </div>
</li>
</template>

<script>
// import {mapMutations} from 'vuex';
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
        viewType: {
            type: String,
            required: true
        }
    },
    computed: {
        addItemClass() {
            if (!this.todo.complete && this.todo.end_date && (new Date(this.todo.end_date).getTime() < new Date().getTime())) {
                return 'item-deadline';
            } else if (this.todo.complete) {
                return 'item-complete';
            } else {
                return '';
            }
        }
    },
    methods: {
        isChecked() {
            // return this.checkComplete.value === true;
        }
    }
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

    &.item-complete {
    background-color: #299e29;
        &:hover {
            background-color: #a8f3f7;
        }
        .title,
        .info-date {
            text-decoration: line-through;
        }
    }

    &.item-deadline {
    background-color: #ea4949;
        &:hover {
            background-color: #a8f3f7;
        }
        .title,
        .info-date {
            color: #fff;
        }
    }

    .item-check,
    .item-title {
        float: left;
    }
    .item-title {
        width: 70%;
    }
    .link-item {
        display: block;
        font-style: normal;
        text-decoration: none;
        color: black;
        font-size: 1em;
        padding: 1em 0;
        text-align: left;

        .title {
            display: inline-block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
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
    .item-info {
    width: 20%;
    padding: 1em 0;
    float: right;
        &.item-complete{
            .info-date {
                text-decoration: line-through;
            }
        }
    }
}
</style>
