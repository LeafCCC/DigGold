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
  onUnmounted,
} from "vue";
import { getCurrentInstance } from "vue";
const text = article;    
export default {
  setup() {
    let hTagHeight = ref([]);
    let activeIndex = ref(0);

    // 需要从data中获取数据
    const datab = getCurrentInstance();
    async function getHtagHeight(){
    	hTagHeight=datab.data.hTagHeight;
      activeIndex=datab.data.activeIndex
      // console.log(hTagHeight.value);
      // console.log(activeIndex.value)
    }

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
              document.documentElement.scrollTop; //获取滚动高度,兼容性写法
            height.value = _scrollTop + 100; // 100是鼠标滚轮滚动一次的距离
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
      if (arr[0] > height.value) return;  // 如果当前滚动高度小于第一个标题的高度，则返回
      else if (arr[arr.length - 1] < height.value) {  // 如果当前滚动高度大于最后一个标题的高度，则激活最后一个标题
        activeIndex.value = arr.length - 1; 
      }
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < height.value && arr[i + 1] > height.value) { // 如果当前滚动高度大于等于第i个并且小于第i+1个标题的高度，则激活第i个标题
          return (activeIndex.value = i);
        }
      }
    };


    //监视目录滚动
    const watchActive = () => {
      // 暂未实现
    };

    onBeforeMount(() => {
      scroll();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", fun);
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
        // content: "";
        // position: absolute;
        // top: 2px;
        // left: 0;
        // margin-top: 7px;
        // width: 4px;
        // height: 16px;
        // background: #1e80ff;
        // border-radius: 0 4px 4px 0;
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