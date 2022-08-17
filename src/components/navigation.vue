<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"  
    :ellipsis="false"
    @select="handleSelect"
  >
    
    <el-menu-item index="0"><img src="../assets/iconwithtext.svg"></el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">沸点</el-menu-item>
    <el-menu-item index="3">课程</el-menu-item>
    <el-menu-item index="4">直播</el-menu-item>
    <el-menu-item index="5">活动</el-menu-item>
    <el-menu-item index="6">商城</el-menu-item>
    <el-menu-item index="7">app</el-menu-item>
    <el-menu-item index="8">插件</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="9">
      <template #title>创作者中心</template>
      <el-menu-item index="9-1">写文章</el-menu-item>
      <el-menu-item index="9-2">发沸点</el-menu-item>
      <el-menu-item index="9-3">写代码</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="10">会员</el-menu-item>
    <el-menu-item index="11">登录</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>