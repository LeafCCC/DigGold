<template>
  <el-row :gutter="20">
    <el-col :span="12"  :offset="4" >
      <div class="grid-content ep-bg-purple-dark">
        <!-- <div>
          <router-link target="_blank" :to="{path:'/ArticleDemo'}">文章样例</router-link>
          <router-view></router-view>
        </div> -->

        <ArticleItem/>
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
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 1000px;
  background-color: white;
}
</style>
