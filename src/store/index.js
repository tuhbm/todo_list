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
                importance: 1,
                title: '예시 제목111111111',
                description: '내용입니다1111111111.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                endDate: '2020-06-11',
                done: false,
            },
            {
                id: 1590990073951,
                importance: 2,
                title: '예시 제목2222222222',
                description: '내용입니다2222222222.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                endDate: '2020-05-22',
                done: true,
            },
            {
                id: 1590970073957,
                importance: 3,
                title: '예시 제목333333333',
                description: '내용입니다333333333.ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
                endDate: '2020-05-27',
                done: false,
            },
        ]
    },
    getters: {
        totalTodoList: state => state.todoList,
        countDone: state => {
            let count = 0;
            state.todoList.forEach(list => {
                if (list.done === true) {
                    count++;
                }
            });
            return count;
        }
    },
    mutations: {
        addTodo: (state, payload) => state.todoList.push(payload),
        deleteTodo: (state, payload) => {
            const findItemIndex = state.todoList.findIndex(todo => todo.id === payload);
            state.todoList.splice(findItemIndex, 1);
            console.log(state.todoList);
        },
        doneTodo: (state, payload) => {
            const findItem = state.todoList.filter(item => item.id === payload);
            console.log(findItem);
            findItem[0].done = !findItem[0].done;
            console.log(findItem);
        },
        editTodo: (state, payload) => {
            const findItem = state.todoList.filter(item => item.id === payload.id);
            console.log(findItem);
            findItem[0].title = payload.title;
            findItem[0].description = payload.description;
            findItem[0].endDate = payload.endDate;
            findItem[0].importance = payload.importance;
            findItem[0].done = payload.done;
            console.log(findItem);
            console.log(state.todoList);
        }
    },
    actions: {
        addTodo: ({commit}, payload) => commit('addTodo', payload),
        deleteTodo: ({commit}, payload) => commit('deleteTodo', payload),
        doneTodo: ({commit}, payload) => commit('doneTodo', payload)
    },
    modules: {}
});
