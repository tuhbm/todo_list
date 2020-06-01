import Vue from 'vue';
import Vuex from 'vuex';
import Logo from '../assets/taekyun.png';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logo: Logo,
        todoList: [
            {
                id: 1590990043437,
                importance: 3,
                title: '장보기',
                description: '파 한단, 라면, 계란 한판',
                endDate: '2020-06-11',
                done: false,
            },
            {
                id: 1590990073951,
                importance: 1,
                title: '옷 구매하기',
                description: '무신사에서 장바구니에 있는 옷 구매',
                endDate: '2020-05-22',
                done: true,
            },
            {
                id: 1590970073957,
                importance: 1,
                title: '은행가기',
                description: '주식계좌 생성, 적금가입',
                endDate: '2020-05-27',
                done: false,
            },
        ]
    },
    getters: {
        logo: state => state.logo,
        totalTodoList: state => state.todoList,
        countDone: state => state.todoList.filter(todo => todo.done).length
    },
    mutations: {
        addTodo: (state, payload) => state.todoList.push(payload),
        deleteTodo: (state, payload) => {
            state.todoList = state.todoList.filter(todo => todo.id !== payload);
        },
        doneTodo: (state, payload) => {
            const findItem = state.todoList.find(item => item.id === payload);
            findItem.done = !findItem.done;
        },
        editTodo: (state, payload) => {
            const findItem = state.todoList.find(item => item.id === payload.id);
            findItem.title = payload.title;
            findItem.description = payload.description;
            findItem.endDate = payload.endDate;
            findItem.importance = payload.importance;
            findItem.done = payload.done;
        }
    },
    actions: {
        addTodo: ({commit}, payload) => commit('addTodo', payload),
        deleteTodo: ({commit}, payload) => commit('deleteTodo', payload),
        doneTodo: ({commit}, payload) => commit('doneTodo', payload)
    },
    modules: {}
});
