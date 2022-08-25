<template>
  <div class="article">
    <div class="article-body">
      <v-md-preview :text="text" ref="preview" />
    </div>
    <div class="article-menu nav">
      <div class="menu-title">
        <p>目录</p>
      </div>
      <div class="menu-body">
        <div
          v-for="(anchor,index) in titles"
          class="menu-item"
          :class="activeIndex.value === index ? 'active' : ''"
          :key="index" 
          :title="anchor.title"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a>{{ anchor.title }}</a>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import article from "/src/assets/article/article.md?raw";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import { getCurrentInstance } from "vue";
const text = article;    
export default {
  setup() {
    let hTagHeight = ref([]);
    let activeIndex = ref(0);

    const datab = getCurrentInstance();
    async function getHtagHeight(){
    	hTagHeight=datab.data.hTagHeight;
      activeIndex=datab.data.activeIndex
      // console.log(hTagHeight.value);
      // console.log(activeIndex.value)
    }

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
            let _scrollTop =
              window.scrollY ||
              window.pageYOffset ||
              document.documentElement.scrollTop;
            height.value = _scrollTop + 100;
            timer = null;
            // console.log(height.value);
            getHtagHeight();
            activeScroll();
            // watchActive();
          }, 500);
        })
      );
    };


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
      let mid = 440 / 2;  //滚动元素父元素的高度的一半
      let offsetTop = 40.8 * activeIndex.value; //当前激活元素相对于父元素顶部的距离
      console.log(activeIndex.value);
      oldValue = activeIndex.value;
      if (offsetTop > mid && isDown) {
        nav.value.scrollBy(0, 40.8 * difference);
      } else if (offsetTop > mid && !isDown) {
        nav.value.scrollBy(0, 40.8 * difference);
      }
      if (activeIndex.value === 1) {
        console.log('1122');
        nav.value.scrollTo({
          top: 0
        })
      }
    };

    onBeforeMount(() => {
      scroll();
    });
    onMounted(() => {
      mouseWheel();
      // console.log('onMounted');
    });
    onBeforeUpdate(() => {
      // itemRefs = [];
      // console.log('onBeforeUpdate');
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", fun);
      window.removeEventListener("mousewheel", scrollFunc);
      window.removeEventListener("DOMMouseScroll", scrollFunc);
    });
  },
  data() {
    return {
      text,
      titles: [],
      hTagHeight: [],
      activeIndex:[],
    };
  },
  mounted() {
    const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    let arr = [];
    for (let i = 0; i < anchors.length; i++) {
      arr.push(anchors[i].offsetTop);
    }
    this.hTagHeight.value = arr;
    // console.log(this.hTagHeight.value);
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
    // console.log(hTags)

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
      index: 0,
    }));
    // console.log(this.titles);
    // 遍历this.titles的内容
    this.titles.forEach((item,index) => {
      item.index = index;
    });
    // console.log(this.titles);
  },
  methods: {
    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
        this.activeIndex.value = anchor.index
      }
    },

  },
};
</script>

<style scoped lang="scss">
.article {
  display: flex;
  justify-content: flex-start;

  .article-menu {
    position: sticky;
    top: 20px;
    width: 20%;
    height: 30rem;
    display:flex;
    flex-direction: column;
    .menu-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      p {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .menu-body {
      overflow-y: scroll;
      overflow-x: hidden;
      .menu-item {
        cursor: pointer;
        &:hover {
          color: #00DDDD;
          font-size: larger;
          
        }
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
  .article-body {
    width: 60%;
    height: 100%;
    padding: 0 20px;
    margin-right: 100px;
    background-color: white;
  }

}

::-webkit-scrollbar{
  width:6px;
  height:16px;
}
/*定义滚动条轨道内阴影+圆角*/

::-webkit-scrollbar-track{
  border-radius:10px;
}

/*定义滑块内阴影+圆角*/

::-webkit-scrollbar-thumb{
  border-radius:5px;
  -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
  box-shadow: inset;
  background-color: #8A919F;
}
</style>