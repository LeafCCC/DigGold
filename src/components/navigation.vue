<template>
  <div class="nav">
    <div class="nav_logo">
      <router-link to="/">
        <img class="logo-image" alt="稀土堀金" src="../assets/iconwithtext.svg">
      </router-link>
    </div>
    <div class="nav_menu">

      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"  
        :ellipsis="false"
        @select="handleSelect"
      >
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
    </div>
  </div>  
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
}
.nav_logo {
  display: flex;
  align-items: center;
}
.nav_menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo-image {
  display: block;
  width: 107px;
  height: 22px;
}
.flex-grow {
  flex-grow: 1;
}
</style>