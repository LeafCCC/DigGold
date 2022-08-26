<template>
  <el-row :gutter="20"  >
    <el-col :span="10" :offset="5" class="col-white">
      <div class="grid-content">
        <HomeItem
          v-for="(i, index) in data.content"
          :key="index"
          :itemData="i"
        />
      </div>
    </el-col>
    <Sidebar />
  </el-row>
</template>

<script setup>
import HomeItem from './HomeItem.vue'
import dataItems from '@/assets/json/articleItems.json'
import Sidebar from '@/views/home/sidebar.vue'
import { onMounted, reactive } from 'vue'
const data = reactive({ now: 7 })
data.content = dataItems.data.slice(0, 7)
const maxLen = dataItems.data.length

onMounted(() => {
  // 监听滚动条位置并触发事件
  window.addEventListener('scroll', scrollHandle)
})

//检测是否到达底部 并加载更多data
const scrollHandle = () => {
  let scrollTop = document.documentElement.scrollTop //滚动高度
  let clientHeight = document.documentElement.clientHeight //可视高度
  let scrollHeight = document.documentElement.scrollHeight //内容高度
  if (data.now < maxLen && scrollTop + clientHeight >= scrollHeight - 100) {
    data.now += 7
    data.content = dataItems.data.slice(0, data.now)
  }
}
</script>

<style lang="scss">
.grid-content {
  border-radius: 4px;
  min-height: 1000px;
  overflow: hidden;
}

.col-white {
  background-color: rgb(255, 255, 255);
  margin-right: 20px;
}
</style>
