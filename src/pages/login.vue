<template>
    <div class="flex justify-center items-center h-screen">
        <div class="p-5 rounded-md bg-dark text-center flex flex-col gap-2">
            <div class="text-tt-primary text-xl">{{ formState.isRegister ? '注册' : '登陆' }}</div>            
            <div class="flex gap-2">
                账号: <input v-model="formState.username" class="outline-none bg-transparent" type="text" placeholder="请输入账号">
            </div>
            <div class="flex gap-2">
                密码: <input v-model="formState.password" class="outline-none bg-transparent" type="password" placeholder="请输入密码">
            </div>
            <div v-if="formState.isRegister" class="flex gap-2">
                确认密码: <input v-model="formState.verifyPassword" class="outline-none bg-transparent" type="password" placeholder="请再次输入密码">
            </div>
            <div class="flex justify-end">
                <a @click="formState.isRegister = false" v-if="formState.isRegister" class="text-xs cursor-pointer">登陆</a>
                <a @click="formState.isRegister = true" v-else class="text-xs cursor-pointer">注册</a>
            </div>
            <div class="flex justify-around items-center">
                <button v-if="formState.isRegister" @click="handleRegister">确认</button>
                <button v-else @click="handleLogin">登陆</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import {reactive} from 'vue'


const formState = reactive({
    username:'',
    password:'',
    verifyPassword:'',
    title:'登陆',
    isRegister:false,
})


const handleLogin = ()=>{

}

const handleRegister = ()=>{

}



</script>