<template>
  <el-row :gutter="20">
    <el-col :span="12"  :offset="4" ><div class="grid-content ep-bg-purple-dark">here is the article</div></el-col>
    <el-col :span="4"  :offset="0"><div class="grid-content ep-bg-purple-dark">here is the ad</div></el-col>
  </el-row>

 
</template>

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
