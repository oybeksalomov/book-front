import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/book-info',
        component: () => import('@/pages/BookInfoPage.vue'),
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})