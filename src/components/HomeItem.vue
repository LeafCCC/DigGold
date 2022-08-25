<template>
  <div class="list">
    <div class="item-name1">
      <span>{{ itemData.author }}</span>
      <el-divider direction="vertical" />
      <span class="item-name2">{{ itemData.createTime }}</span>
      <el-divider direction="vertical" />
      <span class="item-name2">{{ itemData.category }}</span>
    </div>

    <div class="item-box" @click="go(itemData.id)">
      <div class="item-title">{{ itemData.title }}</div>
      <div class="item-content">{{ itemData.describe }}</div>

      <el-row class="icons">
        <el-icon :size="15"><View /></el-icon>
        <span class="icon-number"> {{ itemData.view }}</span>
        <el-icon :size="15"><Pointer /></el-icon>
        <span class="icon-number"> {{ itemData.favor }}</span>
        <el-icon :size="15"><ChatRound /></el-icon>
        <span class="icon-number"> {{ itemData.comment }}</span>
      </el-row>
      <el-divider class="item-divider" />
    </div>

    <img class="picture" :src="getImageUrl(itemData.imgUrl)"/>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

function go(id) {
  const newpage = router.resolve({
  path: '/articleDemo/'+id // 跳转的页面路由
  })
  window.open(newpage.href, '_blank')
}

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

//定义传入子组件的数据
//如果出现的是默认值 说明传送失败啦
defineProps({
  itemData: {
    author: {
      type: String,
      default: 'Alice'
    },

    createTime: {
      type: String,
      default: '1分钟前'
    },

    category: {
      type: String,
      default: '综合'
    },

    title: {
      type: String,
      default: '仿掘金官网'
    },

    describe: {
      type: String,
      default: '这里是文章详细内容'
    },

    view: {
      type: Number,
      default: 0
    },

    favor: {
      type: Number,
      default: 0
    },

    comment: {
      type: Number,
      default: 0
    },

    imgUrl:{
      type: String,
      default: "test.jpeg"
    }
  }
})

</script>

<style lang="scss" scoped>
.list {
  position: relative;

  .item-name1 {
    margin-left: 20px;
    padding-top: 10px;
    font-size: 13px;
    color: #8a929c;
  }

  .item-name2 {
    padding-top: 10px;
    font-size: 13px;
    color: #8a929c;
  }

  .item-box {
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 10px;
    padding-top: 12px;
  }

  .item-title {
    font-weight: 750;
    color: #1c2028;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    flex: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .item-content {
    margin-top: 10px;
    font-size: 13px;
    color: #8a929c;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .icons {
    margin-top: 12px;
    color: #8a929c;
  }
  .icon-number {
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
    background-size: contain;
  }

  .item-divider {
    height: 0px;
    margin: 8px 0 0;
    //上 左右 下
  }
}
</style>
