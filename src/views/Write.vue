<template>
    <div class="write-container">
        <form @submit.prevent="addTodoItem"></form>
        <div class="write-header">
            <div class="item-title">
                <input v-model="title" type="text" placeholder="할일의 제목을 적어주세요.">
            </div>
            <div class="item-important">
                <strong>중요도 선택</strong>
                <select name="important" v-model="important">
                    <option value="1">중요</option>
                    <option value="2">보통</option>
                    <option value="3">여유</option>
                </select>
            </div>
            <div class="item-date">
                <strong>마감날짜</strong>
                <input type="date" v-model="endDate">
            </div>
        </div>
        <div class="write-content">
            <textarea name="" id="" cols="100" rows="10" v-model="description"></textarea>
        </div>
        <button type="submit">완료</button>
        <router-link class="link-full secondary" to="/">취소</router-link>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: 'Write',
    data() {
        return {
            title: null,
            important: null,
            endDate: null,
            description: null
        };
    },
    methods: {
        ...mapMutations(['addTodoItem']),
        addTodoItem() {
            let nowTime = new Date();
            let todoItem = {
                title: this.title,
                important: this.important,
                endDate: this.endDate,
                description: this.description,
                registerDate: `${nowTime.getFullYear()}-${nowTime.getMonth() + 1}-${nowTime.getDay()}`
            };
            console.log('todoItem>>>', todoItem);
            this.addTodoItem(todoItem);
            this.clearForm();
            this.$route.push({name: 'list'});
        },
        clearForm() {
            this.title = null;
            this.important = null;
            this.endDate = null;
            this.description = null;
        }
    }
};
</script>

<style lang="scss">
.write-container{
    margin-top: 3vw;
}
.write-header{
    overflow: hidden;
    border:0.1vw solid #000;

    .item-important, .item-title{
        float: left;
        strong{
            display: block;
        }
        select{
            width:90%;
            height: 2vw;
        }
    }
    .item-date{
        float: right;
        width: 20%;
        strong{
            display: block;
        }
    }
    .item-important{
        width: 20%
    }
    .item-title{
        width: 60%;
        padding: 1vw;
        box-sizing: border-box;
        input{
            width: 100%;
            height: 3vw;
            border:0.1vw solid #ddd;
            padding-left:0.5vw;
            box-sizing: border-box;
        }
    }
}
    .write-content{
        margin-top: 0.5vw;
        textarea {
            width: 100%;
            border:0.1vw solid #000;
            resize: none;
            box-sizing:border-box;
        }
    }
</style>
