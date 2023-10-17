import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import QuestionView from "@/views/QuestionView.vue";
import WaitView from "@/views/WaitView.vue";

const routes = [
    { path: '/', name: 'welcome', component: WelcomeView },
    { path: '/q/:id', name: 'question', component: QuestionView },
    { path: '/wait', name: 'wait', component: WaitView },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
