<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="author-info">-->
<!--      <div>-->
<!--        <div class="box">-->
<!--          <h2 class="box-title">标题</h2>-->
<!--        </div>-->
<!--        <span class="info-name">昵称</span>-->
<!--        <span class="info-time">发布时间</span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <el-button type="primary" plain class="button">➕ 关注</el-button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <p></p>-->
<!--    <div class="box">-->
<!--      <div id="content" class="box-content">-->
<!--        &lt;!&ndash; <v-md-preview :text="text"></v-md-preview> &ndash;&gt;-->
<!--        <v-md-preview-html :html="text" preview-class="github-markdown-body"></v-md-preview-html>-->
<!--      </div>-->
<!--    </div>-->
<!--    <p></p>-->
<!--    <span class="label">分类：</span>-->
<!--    <el-button type="info" plain class="jiange">前端</el-button>-->
<!--    <span class="label">标签：</span>-->

<!--    <el-button type="primary" plain>前端</el-button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--import { onMounted, ref } from "vue";-->
<!--import { useListStore } from "@/store";-->
<!--export default {-->
<!--  setup() {-->
<!--    const list = useListStore();-->
<!--    let text = ref("");-->
<!--    async function getData() {-->
<!--      axios.defaults.headers.post["Content-Type"] =-->
<!--          "application/json;charset=UTF-8";-->
<!--      let res = await axios.get("http://182.61.29.159:3334/detailText.txt");-->
<!--      getList(res.data);-->
<!--    }-->
<!--    const getList = (data) => {-->
<!--      const toc = data.match(/<(h[1-6]).*?\>.*?<\/[hH][1-6]>/g);-->
<!--      toc.forEach((item, index) => {-->
<!--        let _toc = `<div class="jump-site" id=${index}>${item}</div>`;-->
<!--        data = data.replace(item, _toc);-->
<!--      });-->
<!--      text.value = data;-->
<!--      let arr = toc.map((item) => {-->
<!--        let data = item.match(/^<[Hh](\d).*?>(.*?)</);-->
<!--        return { id: data[1], content: data[2] };-->
<!--      });-->
<!--      list.$patch({ list: arr });-->
<!--    };-->
<!--    onMounted(() => {-->
<!--      getData();-->
<!--    });-->

<!--    return {-->
<!--      text,-->
<!--      getData,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.author-info {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  .box-title {-->
<!--    font-size: 32px;-->
<!--  }-->
<!--  span {-->
<!--    display: block;-->
<!--  }-->
<!--  .info-name {-->
<!--    font-weight: 500;-->
<!--    color: #333;-->
<!--  }-->
<!--  .info-time {-->
<!--    color: #909090;-->
<!--    font-size: 14px;-->
<!--    margin-top: 7px;-->
<!--  }-->
<!--  .button {-->
<!--    margin-top: 100px;-->
<!--  }-->
<!--}-->
<!--.label {-->
<!--  color: #515767;-->
<!--  font-size: 15px;-->
<!--  margin-top: 50px;-->
<!--}-->
<!--.jiange {-->
<!--  margin-right: 40px;-->
<!--}-->
<!--</style>-->




<!--<template>-->
<!--  <v-md-editor :include-level="[2, 3, 4, 5, 6]" v-model="text" mode="editable" default-show-toc="true" toc-nav-position-right="true" height="600px"></v-md-editor>-->
<!--&lt;!&ndash;  <el-row :gutter="20">&ndash;&gt;-->
<!--&lt;!&ndash;    <el-col :span="12"  :offset="4" >&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="grid-content ep-bg-purple-dark">&ndash;&gt;-->

<!--&lt;!&ndash;&lt;!&ndash;        here is the article content&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <router-link to="/">返回主页</router-link>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <textarea type="text" v-model="content" rows="5" ></textarea>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <p>{{content}}</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <p v-html="markdown"></p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <Article2 />&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-col>&ndash;&gt;-->
<!--&lt;!&ndash;    <el-col :span="4"  :offset="0">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="grid-content ep-bg-purple-dark">&ndash;&gt;-->
<!--&lt;!&ndash;        广告位&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-col>&ndash;&gt;-->
<!--&lt;!&ndash;  </el-row>&ndash;&gt;-->
<!--  -->
<!--</template>-->

<!--<script>-->
<!--import article from '/articleDemo/article.md?raw'-->
<!--// import MarkdownIt from 'markdown-it'-->

<!--// import Article2 from '/articleDemo/article.md'-->


<!--export default {-->

<!--    // components: {-->
<!--    //   Article2-->
<!--    // },-->
<!--    data(){-->
<!--      return{-->
<!--        // content: '',-->
<!--        text: article,-->
<!--        // titles: [],-->
<!--      };-->
<!--    },-->
<!--    // computed:{-->
<!--    //   markdown(){-->
<!--    //     const md = new MarkdownIt();-->
<!--    //     return md.render(this.content);-->
<!--    //   },-->
<!--    //-->
<!--    // },-->
<!--  // mounted() {-->
<!--  //   const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');-->
<!--  //   const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());-->
<!--  //-->
<!--  //   if (!titles.length) {-->
<!--  //     this.titles = [];-->
<!--  //     return;-->
<!--  //   }-->
<!--  //-->
<!--  //   const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();-->
<!--  //-->
<!--  //   this.titles = titles.map((el) => ({-->
<!--  //     title: el.innerText,-->
<!--  //     lineIndex: el.getAttribute('data-v-md-line'),-->
<!--  //     indent: hTags.indexOf(el.tagName),-->
<!--  //   }));-->
<!--  // },-->
<!--  // methods: {-->
<!--  //   handleAnchorClick(anchor) {-->
<!--  //     const { preview } = this.$refs;-->
<!--  //     const { lineIndex } = anchor;-->
<!--  //-->
<!--  //     const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);-->
<!--  //-->
<!--  //     if (heading) {-->
<!--  //       preview.scrollToTarget({-->
<!--  //         target: heading,-->
<!--  //         scrollContainer: window,-->
<!--  //         top: 60,-->
<!--  //       });-->
<!--  //     }-->
<!--  //   },-->
<!--  // },-->
<!--};-->
<!--</script>-->

<!--<style lang="scss">-->
<!--.el-row {-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--.el-col {-->
<!--  border-radius: 4px;-->
<!--}-->

<!--.grid-content {-->
<!--  border-radius: 4px;-->
<!--  min-height: 1000px;-->
<!--  background-color: white;-->
<!--}-->
<!--</style>-->




<template>
  <div class="markInner">
    <el-row :gutter="10">

      <!-- md文件部分 -->
      <el-col
          :xs="24"
          :sm="24"
          :md="16"
          :lg="16"
          :style="{
          height: sHeight,
          overflowY: 'scroll',
        }"
          ref="scrollOut"
      >
        <v-md-preview :text="message" ref="preview"></v-md-preview>
      </el-col>
      <!-- 目录部分 -->
      <el-col :xs="24" :sm="24" :md="8" :lg="4">
        <div
            :style="{
            cursor: 'pointer',
            height: sHeight,
            overflowY: 'scroll',
            padding: '0 0 5px 0',
          }"
        >
          <div
              v-for="item in catalogue"
              :key="item"
              class="list-group-item"
              :style="{ padding: `10px 0 10px ${item.indent * 20}px` }"
              @click="scrollTop(item)"
          >
            <a>{{ item.title }}</a>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";
import article from "/articleDemo/article.md?raw";

export default defineComponent({
  name: "blogInner",
  setup() {
    const message = ref(""); // 文档内容
    const catalogue: any = ref([]); // 目录列表

    const sHeight = ref("100px");

    onMounted(async () => {
      await loadFile();
      sHeight.value = window.screen.height - 320 + "px";
    });

    const preview = ref();
    const scrollOut = ref();

    // 加载文档
    const loadFile = async () => {
      // 获取文档内容
      message.value = article;

      // 建目录
      await nextTick();
      const anchors = preview.value.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");

      const titles = Array.from(anchors).filter(
          (title: any) => !!title.innerText.trim()
      );

      if (!titles.length) {
        catalogue.value = [];
        return;
      }

      const hTags = Array.from(
          new Set(titles.map((title: any) => title.tagName))
      ).sort();

      catalogue.value = titles.map((el: any) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    };

    // 定位内容
    const scrollTop = (anchor: any) => {
      const { lineIndex } = anchor;

      const heading = preview.value.$el.querySelector(
          `[data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        console.log(preview.value);
        preview.value.scrollToTarget({
          target: heading,
          scrollContainer: scrollOut.value.$el,
          top: 0,
        });
      }
    };
    return {
      message,
      catalogue,
      loadFile,
      sHeight,
      scrollTop,
      preview,
      scrollOut,
    };
  },
});
</script>

<style lang="stylus" scoped>
.list-group-item
  font-size: 14px
  border-radius: 5px
.list-group-item:hover
  background-color: #409eff78
  color: #fff
</style>