<template>
  <el-row :gutter="20">
    <el-col :span="12"  :offset="4" >
      <div class="grid-content ep-bg-purple-dark">
        <!-- <div>
          <router-link target="_blank" :to="{path:'/ArticleDemo'}">文章样例</router-link>
          <router-view></router-view>
        </div> -->
        <ArticleItem  v-for="i in data" :itemData = "i" />
      </div>
    </el-col>
    <el-col :span="4"  :offset="0">
      <div class="grid-content ep-bg-purple-dark">
        here is the ad
      </div>
    </el-col>
  </el-row>
</template>


<script setup>
import ArticleItem from './ArticleItem.vue';
import test from '@/assets/json/test.json'

const data = test.data
</script>

<style lang="scss">

.grid-content {
  border-radius: 4px;
  min-height: 1000px;
  background-color: white;
}
</style>
