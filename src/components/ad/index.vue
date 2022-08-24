<template>
  <div className="sidebar-block banner-block">
    <div className="banner">
      <a
        href="https://juejin.cn/book/7127092198096502822?utm_source=webcebian"
        target="_blank"
      >
        <img
          src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/addd03fc12614209b6e0c81669f17703~tplv-k3u1fbpfcp-watermark.image?"
          width="240"
          height="200"
          className="banner-image"
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
