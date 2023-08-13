<template>
<el-container class="h-screen">
    <el-header class="flex justify-between bg-slate-400 items-center">
        <el-icon @click="drawerLeft = true" :size="18">
            <Operation></Operation>
        </el-icon>
        <div class="">
            header
        </div> 
        <el-icon :size="18">
            <Setting></Setting>
        </el-icon>
    </el-header>
    <el-main class="flex flex-col flex-nowrap justify-between items-center">
        <div ref="scrollRef" class="flex-1 w-full overflow-auto">
            <div ref="scrollInnerRef" class="mx-8">
                <MsgText v-for="(item,index) in msgList" :key="index" 
                    :isSelf="item.isSelf"
                    :avatar="item.user.avatar"    
                    :username="item.user.name"
                    :msg="item.msg"
                ></MsgText>
            </div>
        </div>
        <div class="border border-slate-400 h-16 p-3 rounded-full w-1/2">
            <input 
                type="text"
                v-model="inputText" 
                class="h-full w-full rounded-full outline-none p-2"
                placeholder="说点什么..." 
                @keydown.enter="handleSend"
            >
        </div>
    </el-main>
</el-container>
<el-drawer
    v-model="drawerLeft"
    append-to-body
    title="I am the title"
    direction="ltr"
    :with-header="false"
    class="custom-drawer"
>   
    <div class="h-full flex flex-col flex-nowrap justify-between items-stretch">
        <div class="flex flex-row gap-4">
            <div @click="handleJoinRoom" class="action-box">加入房间</div>
            <div @click="handleCreateRoom" class="action-box">创建房间</div>
        </div>
        <div class="flex-1 mt-4 overflow-auto">
            <div v-for="i in 10" :key="i" class="h-14 text-tt-primary bg-base text-center leading-10 cursor-pointer">
                room name
            </div>
        </div>
        <div class="h-10 rounded leading-10 text-center">
            设置
        </div>
    </div>
</el-drawer>
<el-dialog v-model="roomDialogState.show" :title="roomDialogState.title" width="30%" center>
    <div class="">
        {{ roomDialogState.label }}: <input v-model="roomDialogState.input" class="outline-none" :placeholder="roomDialogState.placeholder" type="text">
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="roomDialogCancle">取消</el-button>
        <el-button @click="roomDIalogConfirm" type="primary">确认</el-button>
      </span>
    </template>
</el-dialog>


</template>
<script setup>
import {Operation,Setting} from '@element-plus/icons-vue'
import MsgText from '@/components/MsgText/index.vue'
import {ref,nextTick,reactive} from 'vue'


const inputText = ref('')
const scrollRef = ref()
const scrollInnerRef = ref()
const drawerLeft = ref(true)
const createRoomDialog = ref(true)

const roomDialogState = reactive({
    show:false,
    title:'创建房间',
    input:'',
    label:'房间名称',
    placeholder:'请输入房间名称',
})
const msgList = ref([
    {
        user:{
            avatar:"http://pic.yupoo.com/isfy666/2defbc58/3a682170.jpeg",
            name:'Tom'
        },
        msg:"当然可以！您可以根据需要在主题色变量中添加更多的颜色。",
        isSelf:false,
    },
    {
        user:{
            avatar:"http://pic.yupoo.com/isfy666/2defbc58/3a682170.jpeg",
            name:'Jerry'
        },
        msg:"以下是一个扩展的示例，其中包含一些额外的颜色变量：",
        isSelf:false,
    },
    {
        user:{
            avatar:"http://pic.yupoo.com/isfy666/2defbc58/3a682170.jpeg",
            name:'Tom'
        },
        msg:"Any rules inlined with @apply will have !important removed by default to avoid specificity issues:",
        isSelf:false,
    },
])

const handleJoinRoom = ()=>{
    roomDialogState.title = '加入房间'
    roomDialogState.label = '房间号'
    roomDialogState.placeholder = '请输入房间号'
    roomDialogState.show = true
}

const handleCreateRoom = ()=>{
    roomDialogState.title = '创建房间'
    roomDialogState.label = '房间名称'
    roomDialogState.placeholder = '请输入房间名称'
    roomDialogState.show = true
}

const roomDialogCancle = ()=>{
    roomDialogState.show = false
}

const roomDIalogConfirm = ()=>{
    createRoomDialog.show = false
}


const handleSend = ()=>{
    if(!inputText.value) return
    msgList.value.push({
        user:{
            avatar:"http://pic.yupoo.com/isfy666/2defbc58/3a682170.jpeg",
            name:'Me'
        },
        msg:inputText.value,
        isSelf:true,
    })
    inputText.value = ''
    nextTick(()=>{
        scrollRef.value.scrollTo({
            top:scrollInnerRef.value.clientHeight,
            behavior:'smooth',
        })
    })
}


</script>
<style>
.custom-drawer{
    @apply bg-page;
}
</style>
<style scoped lang="scss">
.el-main{
    display: flex !important;
    padding: 0;
    padding-bottom: 20px;
}
.action-box{
    @apply text-tt-primary bg-darker flex-1 h-14 flex items-center justify-center rounded-md cursor-pointer;
}

</style>
