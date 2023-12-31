import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import("@/components/HelloWorld.vue")
    },
    {
        path:'/chat',
        component:()=>import("@/pages/chat.vue")
    },
    {
        path:'/login',
        component:()=>import("@/pages/login.vue")
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router