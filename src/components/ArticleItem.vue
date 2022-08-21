<template>
    <div class="list">
        <div class="item-name1">
            <span>{{author}}</span>
            <el-divider direction="vertical"/>
            <span class="item-name2">{{createTime}}</span>
            <el-divider direction="vertical"/>
            <span class="item-name2">{{category}}</span>
        </div>

        <div class ="item-box" @click="go">
            <div class="item-title">{{title}}</div>
            <div class="item-content">{{describe}}</div>
            
            <el-row class="icons">
                <el-icon :size="15"><View /></el-icon>
                 <span class="icon-number">345</span>
                <el-icon :size="15"><Pointer/></el-icon>
                <span class="icon-number">12</span>
                <el-icon :size="15"><ChatRound/></el-icon>
                <span class="icon-number">5</span>
            </el-row>
            <el-divider />
        </div>

        <div
            class="picture"
            v-if="picture"
            :style="{ backgroundImage: `url(${picture})` }"
        ></div>
        
    </div>

</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const newpage = router.resolve({
        path: '/articleDemo',  // 跳转的页面路由
    })
function go(){
    window.open(newpage.href, '_blank')
}
const author = 'Alice'
const createTime = '2天前'
const category = '前端·性能优化'
const title = '仿掘金官网'
const describe = '现在可以点击这里直接进入详细页了'
const picture = '../assets/test.jpeg'




</script>

<style lang="scss" scoped>
.list{
    position: relative;

    .item-name1{
        margin-left: 20px;
        padding-top: 10px;
        font-size: 13px;
        color: #8a929c;
    }

    .item-name2{
        padding-top: 10px;
        font-size: 13px;
        color: #8a929c;
    }

    .item-box{
        margin-left: 20px;
        cursor:pointer;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-bottom: 10px;
        padding-top: 12px;
        //border-bottom: 1px solid #d6d6da;
    }

    .item-title{
      font-weight: 750;
      color: #1c2028;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      flex: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .item-content{
      margin-top: 10px;
      font-size: 13px;
      color: #8a929c;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .icons{
        margin-top: 12px;
        color: #8a929c;
    }
    .icon-number{
        font-size: 13px;
        color: #8a929c;
        margin-left: 3px;
        margin-right: 20px;
    }

    .picture {
    height: 70px;
    width: 120px;
    right: 10px;
    top: 10px;
    background-color: black;
    position: absolute;
    background-size: cover;
  }
}

</style>