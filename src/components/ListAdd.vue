<template>
    <div class="write-container">
        <div class="write-header">
            <input type="text" v-model="title" class="item-title" placeholder="제목을 입력하세요">
            <input type="date" v-model="endDate" class="item-date">
            <select v-model="importance" class="item-important">
                <option value="1">중요</option>
                <option value="2">보통</option>
                <option value="3">여유</option>
            </select>
        </div>
        <div class="write-content">
            <textarea
                class="item-content"
                v-model="description"
                placeholder="할일을 입력해주세요."
            ></textarea>
            <button class="btn-filter" v-if="mode === 'add'" @click="listAdd">리스트 추가</button>
            <button class="btn-filter" v-else @click="listEdit">리스트 수정</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    data() {
        return {
            id: null,
            todo: null,
            title: null,
            description: null,
            endDate: null,
            importance: '1',
            mode: 'add',
        };
    },
    methods: {
        listAdd() {
            if (!this.checkTodo()) {
                return;
            }
            let todoItem = {
                id: new Date().getTime(),
                title: this.title,
                description: this.description,
                endDate: this.endDate,
                importance: Number(this.importance),
                done: false,
            };
            this.$store.dispatch('addTodo', todoItem);
            this.clearTodo();
        },
        listEdit() {
            if (!this.checkTodo()) {
                return;
            }
            let todoItem = {
                id: this.id,
                title: this.title,
                description: this.description,
                endDate: this.endDate,
                importance: this.importance,
                done: false,
            };
            this.$store.commit('editTodo', todoItem);
            this.clearTodo();
            this.mode = 'add';
        },
        clearTodo() {
            this.id = null;
            this.title = null;
            this.description = null;
            this.endDate = null;
            this.importance = '1';
        },
        checkTodo() {
            if (this.title === null || this.description === null || this.endDate === null || this.importance === null) {
                alert('미 입력된 부분을 확인해주세요.');
                return false;
            }
            return true;
        },
    },
    beforeCreate() {
        eventBus.$on('listEdit', todo => {
            this.id = todo.id;
            this.title = todo.title;
            this.description = todo.description;
            this.endDate = todo.endDate;
            this.importance = todo.importance;
            this.mode = 'edit';
        });
    },
};
</script>
<style>
.item-title {
    width: 50%;
    height: 1.5vw;
    margin-right: 1vw;
}
.item-date{
    display:inline-block;
    margin-right: 1vw;
    height: 1.5vw;
}
.item-important{
    height: 1.8vw;
}
.write-content{
    margin-top: 1vw;
}
.item-content {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-height: 3vw;
    border: 0.1vw solid #706d73;
    resize: none
}
</style>
