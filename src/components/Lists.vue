<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="4">
      <div class="grid-content ep-bg-purple-dark">
        <HomeItem
          v-for="(i, index) in data.content"
          :key="index"
          :itemData="i"
        />
      </div>
    </el-col>
    <el-col :span="4" :offset="0">
      <div class="grid-content ep-bg-purple-dark">
        <Ad v-for="a in adData" :key="a.id" :url="a.url" :picture="a.picture" />
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import HomeItem from './HomeItem.vue'
import dataItems from '@/assets/json/articleItems.json'

import adRes from '@/assets/json/homead.json'
import Ad from '@/components/ad/index.vue'
import { onMounted, reactive } from 'vue'
const data = reactive({ now: 7 })
data.content = dataItems.data.slice(0, 7)
const maxLen = dataItems.data.length
const adData = adRes.data
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
  background-color: white;
}
</style>
