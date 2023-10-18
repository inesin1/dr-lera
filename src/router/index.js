import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import QuestionView from "@/views/QuestionView.vue";
import WaitView from "@/views/WaitView.vue";
import NoPageView from "@/views/NoPageView.vue";
import NoGiftView from "@/views/NoGiftView.vue";

const routes = [
    { path: '/', name: 'welcome', component: WelcomeView },
    { path: '/q/:id', name: 'question', component: QuestionView },
    { path: '/wait', name: 'wait', component: WaitView},
    { path: '/nopage/:prevQuestionId', name: 'nopage', component: NoPageView},
    { path: '/nogift/:prevQuestionId', name: 'nogift', component: NoGiftView},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
