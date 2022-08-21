<template>
  <el-row :gutter="20">
    <el-col :span="12"  :offset="4" >
      <div class="grid-content ep-bg-purple-dark">
        <v-md-preview :text="text"></v-md-preview>
<!--        here is the article content-->
<!--        <router-link to="/">返回主页</router-link>-->
<!--        <textarea type="text" v-model="content" rows="5" ></textarea>-->
<!--        <p>{{content}}</p>-->
<!--        <p v-html="markdown"></p>-->
<!--        <Article2 />-->
      </div>
    </el-col>
    <el-col :span="4"  :offset="0">
      <div class="grid-content ep-bg-purple-dark">
        广告位招租
      </div>
    </el-col>
  </el-row>

 
</template>

<script>
import article from '/articleDemo/article.md?raw'
// import MarkdownIt from 'markdown-it'

// import Article2 from '/articleDemo/article.md'


export default {

    // components: {
    //   Article2
    // },
    data(){
      return{
        // content: '',
        text: article,
      };
    },
    // computed:{
    //   markdown(){
    //     const md = new MarkdownIt();
    //     return md.render(this.content);
    //   },
    //
    // },
    
}
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 1000px;
  background-color: white;
}
</style>