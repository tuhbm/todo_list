import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// const App = () => import(/* webpackChunkName: 'Home' */ '../App.vue');
const Todo = () => import(/* webpackChunkName: 'Home' */ '../views/Todo.vue');
const List = () => import(/* webpackChunkName: 'Home' */ '../views/List.vue');
const Write = () => import(/* webpackChunkName: 'Home' */ '../views/Write.vue');
const Detail = () => import(/* webpackChunkName: 'Home' */ '../views/Detail.vue');
const View = () => import(/* webpackChunkName: 'Home' */ '../views/View.vue');
const Edit = () => import(/* webpackChunkName: 'Home' */ '../views/Edit.vue');
const routes = [
    {
        path: '/',
        name: 'todo',
        component: Todo,
        children: [
            {
                path: '/*',
                name: 'list-home',
                component: List
            },
            {
                path: '/list',
                name: 'list',
                component: List
            },
            {
                path: '/write',
                name: 'write',
                component: Write
            },
            {
                path: '/detail',
                name: 'detail',
                component: Detail,
                children: [
                    {
                        path: ':id',
                        name: 'view',
                        component: View
                    },
                    {
                        path: ':id/edit',
                        name: 'edit',
                        component: Edit
                    }
                ]
            }
        ]
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
