<template>
    <div class="write-container">
        <div class="write-header">
            <input type="text" v-model="title" class="item-title" placeholder="제목을 입력하세요">
            <input type="date" v-model="endDate" class="item-date">
            <select name="" id="" v-model="important" class="item-important">
                <option value="1">중요</option>
                <option value="2">보통</option>
                <option value="3">여유</option>
            </select>
        </div>
        <div class="write-content">
            <textarea
                    class="item-content"
                    v-model="description"
                    placeholder="투두리스트를 입력해주세요."
                    value=""
            ></textarea>
            <button v-if="mode === 'add'" @click="listAdd">리스트 추가</button>
            <button v-else @click="listEdit">리스트 수정</button>
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
            important: null,
            index: null,
            mode: 'add'
        };
    },
    methods: {
        listAdd() {
            this.checkTodo();
            let todoItem = {
                id: new Date().getTime(),
                title: this.title,
                description: this.description,
                endDate: this.endDate,
                important: this.important
            };
            this.$emit('listAdd', todoItem);
            this.clearTodo();
        },
        listEdit() {
            this.checkTodo();
            let todoItem = {
                id: this.id,
                title: this.title,
                description: this.description,
                endDate: this.endDate,
                important: this.important
            };
            this.$emit('listEdit', todoItem, this.index);
            this.clearTodo();
            this.mode = 'add';
        },
        clearTodo() {
            this.id = null;
            this.title = null;
            this.description = null;
            this.endDate = null;
            this.important = null;
        },
        checkTodo() {
            if (this.title === null || this.description === null || this.endDate === null || this.important === null) {
                alert('할일을 입력해주세요.');
            }
        }
    },
    created() {
        eventBus.$on('listEdit', (todo, index) => {
            this.id = todo.id;
            this.title = todo.title;
            this.description = todo.description;
            this.endDate = todo.endDate;
            this.important = todo.important;
            this.index = index;
            this.mode = 'edit';
        });
    }
};
</script>
<style>
.item-title{
    width: 50%;
}
.item-content{
    display:block;
    box-sizing: border-box;
    width: 100%;
    min-height: 3vw;
    border: 0.2vw solid #000;
    resize: none
}
</style>
