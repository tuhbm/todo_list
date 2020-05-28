import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const Todo = () => import(/* webpackChunkName: 'Home' */ '../views/Todo.vue');
const Write = () => import(/* webpackChunkName: 'Home' */ '../views/Write.vue');
const Detail = () => import(/* webpackChunkName: 'Home' */ '../views/Detail.vue');
const View = () => import(/* webpackChunkName: 'Home' */ '../views/View.vue');
const Edit = () => import(/* webpackChunkName: 'Home' */ '../views/Edit.vue');
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Todo
    },
    {
        path: '/write',
        name: 'Write',
        component: Write
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        children: [
            {
                path: ':id',
                name: 'todo-detail',
                component: View
            },
            {
                path: ':id/:edit',
                name: 'todo-edit',
                component: Edit
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
