<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="4">
      <div class="grid-content ep-bg-purple-dark">
        <!-- <div>
          <router-link target="_blank" :to="{path:'/ArticleDemo'}">文章样例</router-link>
          <router-view></router-view>
        </div> -->
        <ArticleItem v-for="(i, index) in data" :key="index" :itemData="i" />
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
import ArticleItem from './ArticleItem.vue'
import test from '@/assets/json/test.json'
import adRes from '@/assets/json/homead.json'
import Ad from '@/components/ad/index.vue'
const data = test.data
const adData = adRes.data
</script>

<style lang="scss">
.grid-content {
  border-radius: 4px;
  min-height: 1000px;
  background-color: white;
}
</style>
