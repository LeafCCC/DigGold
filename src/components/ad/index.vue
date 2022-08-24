<template>
  <div className="sidebar-block banner-block">
    <div className="banner">
      <a :href="url" target="_blank">
        <img :src="picture" width="240" height="200" className="banner-image"
      /></a>
      <div className="ctrl-box">
        <i className="ion-close-round close-btn"></i>
        <a
          className="label"
          href="https://bd.juejin.cn?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=banner"
          target="_blank"
          ><span className="inco">投放</span> <span>广告</span></a
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar-block.banner-block {
  overflow: hidden;
  .banner {
    height: 200px;
  }
}
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
.banner {
  position: relative;
  font-size: 0;
  cursor: pointer;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }
  .banner-imag {
    width: 100%;
    height: 100%;
  }
  .ctrl-box .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1rem;
    color: #909090;
    opacity: 0.5;
    display: none;
  }
  .ctrl-box {
    .label span {
      vertical-align: top;
    }
    .inco {
      display: none;
    }
    .label {
      position: absolute;
      right: 10px;
      bottom: 10px;
      line-height: 36px;
      height: 36px;
      font-size: 20px;
      z-index: 1;
      transform: scale(0.5);
      transform-origin: right bottom;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid #fff;
      border-radius: 6px;
      padding-left: 15px;
      padding-right: 15px;
      font-weight: 300;
    }
  }
}
</style>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  picture: {
    type: String,
    default: ''
  }
})
</script>
