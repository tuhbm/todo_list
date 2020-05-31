<template>
    <div>
        <input type="text" class="item-title" placeholder="제목을 입력하세요">
        <input type="date" class="item-date">
        <select name="" id="" class="item-important">
            <option value="1">중요</option>
            <option value="2">보통</option>
            <option value="3">여유</option>
        </select>
        <textarea
            class="item-content"
            v-model="todo"
            placeholder="투두리스트를 입력해주세요."
            value=""
        ></textarea>
        <button v-if="mode === 'add'" @click="listAdd">리스트 추가</button>
        <button v-else @click="listEdit">리스트 수정</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    data() {
        return {
            todo: null,
            index: null,
            mode: 'add'
        };
    },
    methods: {
        listAdd() {
            if (this.todo === null) {
                alert('할일을 입력해주세요.');
            } else {
                this.$emit('listAdd', this.todo);
                this.todo = null;
            }
        },
        listEdit() {
            if (this.todo === null) {
                alert('할일을 입력해주세요.');
            } else {
                this.$emit('listEdit', this.todo, this.index);
                this.todo = null;
                this.mode = 'add';
            }
        }
    },
    created() {
        eventBus.$on('listEdit', (todo, index) => {
            this.todo = todo;
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
