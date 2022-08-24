<template>
  <v-md-preview-html :html="text" preview-class="github-markdown-body"></v-md-preview-html>
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
