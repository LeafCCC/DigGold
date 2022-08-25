<template>
  <div class="directory">
    <div class="title">目录</div>
    <ul ref="nav" class="nav">
      <li v-for="(i, index) in list" :key="index" :title="i.content" @click="jump(index)" :ref="setItemRef"
          :class="activeIndex === index ? 'active' : ''">
        <div :style="{ marginLeft: size(i.id) }">
          {{ i.content }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { useListStore } = require("@/store");
const {
  ref,
  onBeforeMount,
  onUnmounted,
  onBeforeUpdate,
  onMounted,
} = require("@vue/runtime-core");
const { storeToRefs } = require("pinia");
const listArr = useListStore();
const { list } = storeToRefs(listArr);
let activeIndex = ref(0);

//动态计算缩进大小
const size = (num) => {
  return num * 10 + "px";
};

//点击目录跳转
let isJump = false
const jump = (index) => {
  activeIndex.value = index;
  let target = document.getElementById(index).offsetTop;
  if (target) {
    window.scrollTo({
      top: target - 80,
    });
    isJump = true
  }
};

const hTagHeight = ref([]);
//获取h标签距离页面顶部的距离
const getHtagHeight = () => {
  let tag = document.querySelectorAll(".jump-site");
  let arr = [];
  for (let i = 0; i < tag.length; i++) {
    arr.push(tag[i].offsetTop);
  }
  hTagHeight.value = arr;
};

let timer;
let fun;
let height = ref(0); //当前滚动高度
//鼠标滚动获取距离顶部的距离
const scroll = () => {
  window.addEventListener(
      "scroll",
      (fun = () => {

        if (timer) {
          return;
        }
        timer = setTimeout(() => {
          // 获取页面滚动的高度
          let _scrollTop =
              window.scrollY ||
              window.pageYOffset ||
              document.documentElement.scrollTop;
          height.value = _scrollTop + 100;
          console.log(222222222222222222222222222222222);
          timer = null;
          getHtagHeight();
          activeScroll();
          watchActive();
        }, 500);
      })
  );
};
//获取nav中的dom元素
let itemRefs = [];
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el);
  }
};
onBeforeMount(() => {
  scroll();
});
onMounted(() => {
  mouseWheel();
});
onBeforeUpdate(() => {
  itemRefs = [];
});
//激活样式跟随页面滚动
const activeScroll = () => {
  let arr = hTagHeight.value;
  if (arr[0] > height.value) return;
  else if (arr[arr.length - 1] < height.value) {
    activeIndex.value = arr.length - 1;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < height.value && arr[i + 1] > height.value) {
      return (activeIndex.value = i);
    }
  }
};

let isDown = true;
//判断滚动方向
let scrollFunc = function (e) {
  e = e || window.event;
  if (e.wheelDelta) {
    //判断浏览器IE，谷歌滑轮事件
    if (e.wheelDelta > 0) {
      //当滑轮向上滚动时
      // console.log("滑轮向上滚动");
      isDown = false;
    }
    if (e.wheelDelta < 0) {
      //当滑轮向下滚动时
      // console.log("滑轮向下滚动");
      isDown = true;
    }
  } else if (e.detail) {
    //Firefox滑轮事件
    if (e.detail > 0) {
      //当滑轮向上滚动时
      isDown = false;
      // console.log("滑轮向上滚动");
    }
    if (e.detail < 0) {
      //当滑轮向下滚动时
      isDown = false;
      // console.log("滑轮向下滚动");
    }
  }
};
const mouseWheel = () => {
  if (document.addEventListener) {
    //火狐使用DOMMouseScroll绑定
    document.addEventListener("DOMMouseScroll", scrollFunc, false);
  }
  //其他浏览器直接绑定滚动事件
  document.addEventListener("mousewheel", scrollFunc);
};

//监视目录滚动
const nav = ref(null);
let oldValue = 10;
const watchActive = () => {
  if (oldValue === activeIndex.value) {
    return;
  }
  let difference = activeIndex.value - oldValue //差值
  let mid = nav.value.clientHeight / 2;  //滚动元素父元素的高度的一半
  let offsetTop = itemRefs[activeIndex.value].offsetTop; //当前激活元素相对于父元素顶部的距离
  console.log(activeIndex.value);
  oldValue = activeIndex.value;
  if(isJump){
    isJump = false
    return
  }
  if (offsetTop > mid && isDown) {
    nav.value.scrollBy(0, 32 * difference);
  } else if (offsetTop > mid && !isDown) {
    nav.value.scrollBy(0, 32 * difference);
  }
  if (activeIndex.value === 1) {
    console.log('1122');
    nav.value.scrollTo({
      top: 0
    })
  }
};

onUnmounted(() => {
  window.removeEventListener("scroll", fun);
  window.removeEventListener("mousewheel", scrollFunc);
  window.removeEventListener("DOMMouseScroll", scrollFunc);
});
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
