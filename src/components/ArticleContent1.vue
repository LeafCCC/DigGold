<template>
  <div class="article">
    <div class="article-body">
      <v-md-preview :text="text" ref="preview" />
    </div>
    <div class="article-menu">
      <div class="menu-title">
        <p>目录</p>
      </div>
      <div class="menu-body">
        <div
          v-for="anchor in titles"
          class="menu-item"
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
import article from "../../public/detailText.txt?raw";
const text = article;
const articleinfo = {
      title: '文章标题',
      author: {
        name: '作者名称',
        avatar_url: 'https://avatars0.githubusercontent.com/u/20455301?s=460&v=4',
        is_follow: true,
      },
      content: '文章内容',
      createTime: '创建时间',
    };
    
export default {
  data() {
    return {
      text,
      titles: [],
    };
  },
  mounted() {
    const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
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
  }
  .article-body {
    width: 60%;
    height: 100%;
    padding: 0 20px;
    margin-right: 100px;
    background-color: white;
  }

}
</style>