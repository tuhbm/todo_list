import Vue from 'vue';
import Vuex from 'vuex';
import Logo from '../assets/taekyun.png';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logo: Logo,
        todos: [
            {
                id: 'aaa',
                importance: 1,
                title: '예시 제목111111111',
                content: '내용입니다1111111111.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                register_date: '2020-05-2711111111',
                end_date: '2020-06-11',
                complete: false,
            },
            {
                id: 'bbb',
                importance: 2,
                title: '예시 제목2222222222',
                content: '내용입니다2222222222.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                register_date: '2020-05-272222222222',
                end_date: '2020-05-22',
                complete: true,
            },
            {
                id: 'ccc',
                importance: 3,
                title: '예시 제목333333333',
                content: '내용입니다333333333.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                register_date: '2020-05-273333333',
                end_date: '2020-05-27',
                complete: false,
            },
        ],
        nowTime: new Date().getTime(),
        viewType: 'ALL',
        moment: moment
    },
    getters: {
        totalTodoList: state => state.todos,
        deadlineTodoList: state => state.todos.filter(todo => !todo.complete && todo.end_date && (new Date(todo.end_date).getTime() < state.nowTime)),
        completedTodoList: state => state.todos.filter(todo => todo.complete)
    },
    mutations: {},
    actions: {},
    modules: {}
});
