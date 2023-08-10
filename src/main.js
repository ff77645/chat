import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const pinia = createPinia()


createApp(App)
.use(pinia)
.use(router)
.use(ElementPlus)
.mount('#app')
