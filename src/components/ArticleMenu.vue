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
// const { useListStore } = require("@/store");
import { useListStore } from "@/store";
// const {
//   ref,
//   onBeforeMount,
//   onUnmounted,
//   onBeforeUpdate,
//   onMounted,
// } = require("@vue/runtime-core");
import { ref, onBeforeMount, onUnmounted, onBeforeUpdate, onMounted } from "@vue/runtime-core";
// const { storeToRefs } = require("pinia");
import { storeToRefs } from "pinia";
const listArr = useListStore();
const { list } = storeToRefs(listArr);
// console.log(list)
// 遍历list，就是 2.1 XXXX, 4这样的
// list.value.forEach((item, index) => {
//   console.log(item.content, index);
// });

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
//获取h标签距离页面顶部的距离,就是所有标题的绝对高度,一次性拿到
const getHtagHeight = () => {
  let tag = document.querySelectorAll(".jump-site");
  let arr = [];
  for (let i = 0; i < tag.length; i++) {
    arr.push(tag[i].offsetTop);
  }
  hTagHeight.value = arr;
  // console.log(hTagHeight.value)
};

let timer;
let fun;
let height = ref(0); //当前滚动高度，初始值为0
//鼠标滚动获取距离顶部的距离
const scroll = () => {
  window.addEventListener(
    "scroll",
    (fun = () => {

      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        let _scrollTop =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop; // 固定写法，防止获取不到
        height.value = _scrollTop + 100; // 应该是鼠标滚轮滚动一下的固定值
        timer = null;
        console.log(height.value);
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
    console.log(itemRefs);// 等于是这个数组记录了那个index是activate的
  }
};
// // 输出itemRefs
// console.log(itemRefs)

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
  if (arr[0] > height.value) return; // 如果滚动高度小于第一个标题的高度，则不激活
  else if (arr[arr.length - 1] < height.value) {
    activeIndex.value = arr.length - 1; // 如果滚动高度大于最后一个标题的高度，则激活最后一个标题
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < height.value && arr[i + 1] > height.value) { // 如果滚动高度大于等于第i个标题的高度，并且小于第i+1个标题的高度，则激活第i个标题
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
let oldValue = 10; // 这个值就是可以随便给的
const watchActive = () => {
  if (oldValue === activeIndex.value) {
    return;
  }
  let difference = activeIndex.value - oldValue //差值
  let mid = nav.value.clientHeight / 2;  //滚动元素父元素的高度的一半
  // console.log(nav.value.clientHeight) // 500,对应nav的height
  let offsetTop = itemRefs[activeIndex.value].offsetTop; //当前激活元素相对于父元素顶部的距离
  // console.log(offsetTop) // 对应激活元素的offsetTop
  // console.log(activeIndex.value);
  oldValue = activeIndex.value;
  if(isJump){ // 应该是区分是用户点击目录跳转的（true）还是滚动的（false）
    isJump = false
    return 
  }
  if (offsetTop > mid && isDown) {
    nav.value.scrollBy(0, 32 * difference);  // 目录的每一项高度是32px
  } else if (offsetTop > mid && !isDown) {
    nav.value.scrollBy(0, 32 * difference);
  }
  if (activeIndex.value === 1) { // 这个应该是重置一下防止有偏差
    // console.log('1122');
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
