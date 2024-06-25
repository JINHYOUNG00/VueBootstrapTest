import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminHome from '../views/AdminHome.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';


import MainPage from '@/views/MainView.vue';
import MyPage from '@/views/MyPage.vue'

const routes = [

    {
        path: '/',
        redirect: '/user/home'
    },
    {
        path: '/user',
        name: 'user',
        component: DefaultLayout,
        meta: {
            template: 'home', // Home 템플릿
        },
        children: [
            {
                path: 'home',
                component: MainPage
            },
            {
                path: 'mypage',
                component: MyPage
            },
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminHome,
        meta: {
            template: 'admin', // Admin 템플릿
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
