<template>
  <div class="container">
    <div class="icons">
      <el-button :icon="Star" size="large" circle />
    </div>
    <div class="icons">
      <el-button :icon="Edit" size="large" circle />
    </div>
    <div class="icons">
      <el-button :icon="Share" size="large" circle />
    </div>
    <div class="icons">
      <el-button :icon="Opportunity" size="large" circle />
    </div>
    <div class="icons">
      <el-button :icon="Printer" size="large" circle />
    </div>

  </div>
</template>

<script lang="ts" setup>
import {
  Star,
  Edit,
  Share,
  Opportunity,
  Printer,
} from '@element-plus/icons-vue'

// export default {
//   name: "ArticleLeftBar"
// }
</script>

<style scoped>
  .container {
    display: flex;    
    flex-direction: column;
  }
  .icons {
    margin:10px 5px 15px 20px;
  }

</style>