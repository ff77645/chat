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
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router