import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/categories/:id',
        component: HomePage
    },
    {
        path: '/create-book',
        component: () => import('@/pages/CreateBookPage.vue')
    },
    {
        path: '/book-info/:bookId',
        component: () => import('@/pages/BookInfoPage.vue'),
    },
    {
        path: "/login",
        component: () => import('@/pages/LoginPage.vue')
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})