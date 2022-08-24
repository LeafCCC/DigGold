<template>
  <div class="container">
    <div class="author-info">
      <div>
        <div class="box">
          <h2 class="box-title">标题</h2>
        </div>
        <span class="info-name">昵称</span>
        <span class="info-time">发布时间</span>
      </div>
      <div>
        <el-button type="primary" plain class="button">➕ 关注</el-button>
      </div>
    </div>
    <p></p>
    <div class="box">
      <div id="content" class="box-content">
        <!-- <v-md-preview :text="text"></v-md-preview> -->
        <v-md-preview-html :html="text" preview-class="github-markdown-body"></v-md-preview-html>
      </div>
    </div>
    <p></p>
    <span class="label">分类：</span>
    <el-button type="info" plain class="jiange">前端</el-button>
    <span class="label">标签：</span>

    <el-button type="primary" plain>前端</el-button>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useListStore } from "@/store";
export default {
  setup() {
    const list = useListStore();
    let text = ref("");
    async function getData() {
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=UTF-8";
      // let res = await axios.get("http://182.61.29.159:3334/detailText.txt");
      // 改成获取本地文件
      let res = await axios.get("../../articleDemo/detailText.txt");
      getList(res.data);
    }
    const getList = (data) => {
      const toc = data.match(/<(h[1-6]).*?\>.*?<\/[hH][1-6]>/g);
      toc.forEach((item, index) => {
        let _toc = `<div class="jump-site" id=${index}>${item}</div>`;
        data = data.replace(item, _toc);
      });
      text.value = data;
      let arr = toc.map((item) => {
        let data = item.match(/^<[Hh](\d).*?>(.*?)</);
        return { id: data[1], content: data[2] };
      });
      list.$patch({ list: arr });
    };
    onMounted(() => {
      getData();
    });

    return {
      text,
      getData,
    };
  },
};
</script>
<style lang="scss" scoped>
.author-info {
  display: flex;
  justify-content: space-between;
  .box-title {
    font-size: 32px;
  }
  span {
    display: block;
  }
  .info-name {
    font-weight: 500;
    color: #333;
  }
  .info-time {
    color: #909090;
    font-size: 14px;
    margin-top: 7px;
  }
  .button {
    margin-top: 100px;
  }
}
.label {
  color: #515767;
  font-size: 15px;
  margin-top: 50px;
}
.jiange {
  margin-right: 40px;
}
</style>
