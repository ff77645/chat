<template>
    <div class=" border-slate-400 rounded-xl p-2 mb-6 flex flex-col" :class="isSelf ? 'ml-28 items-end' : 'mr-28 items-start'">
        <div class="flex flex-row flex-nowrap items-center gap-2" :class="isSelf ? 'flex-row-reverse' : ''">
            <el-avatar :size="40" :src="avatar" />
            <div class="">{{ username }}</div>
        </div>
        <div class="mt-2 bg-slate-400 rounded-lg p-2" :class="isSelf ? 'text-right' : ''">
            {{msg}}
        </div>
    </div>
</template>

<script setup>

defineProps({
    avatar:{
        type:String,
        default:"http://pic.yupoo.com/isfy666/2defbc58/3a682170.jpeg"
    },
    isSelf:{
        type:Boolean,
        default:false
    },
    username:String,
    msg:String,
})

</script>