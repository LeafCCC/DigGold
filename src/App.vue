<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import navigation from './components/navigation.vue'
</script>


<template>
<navigation/>
<div>
  <router-link to="/about">推荐</router-link>
  <router-view></router-view>
</div>
</template>

