<template>
  <div class="directory">
    <div class="title">目录</div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

.directory {
  position: sticky;
  top: 80px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;

  .title {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
  }

  ::v-deep .nav {
    height: 500px;
    overflow: auto;
    padding: 0;
    font-size: 12px;

    li {
      position: relative;
      list-style: none;
      padding: 8px;
      cursor: pointer;
      overflow: hidden;

      div {
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:hover {
        background: #f7f8fa;
      }
    }

    .active {
      color: #007fff;

      & ::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        margin-top: 7px;
        width: 4px;
        height: 16px;
        background: #1e80ff;
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
