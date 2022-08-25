<script setup>
    import BasicLayout from "@/layouts/default/index.vue"
    import ArticleContent from '../components/ArticleContent.vue';
    import ArticleLeftBar from "@/components/ArticleLeftBar.vue";
    import theData from '@/assets/json/articleItems.json'
    import { useRoute } from "vue-router";

    const route = useRoute()
    const article = theData.data[route.params.id-1]

</script>
<template>
  <BasicLayout></BasicLayout>
  <div class="container">
    <div class="container-inside">
      <div class="container-inside-leftBar">
        <ArticleLeftBar></ArticleLeftBar>
      </div>
      <div class="container-inside-article">
        <div class="container-inside-article-info">
          <div class="title">
            <h1>{{ article.title }}</h1>
          </div>

          <div class="author">
            <div class="author-left">
              <div class="avatar">
                <img class="avatar-img" src="\src\assets\head.image"/>
              </div>
              <div>
                <span class="author-name">{{ article.author }}</span>
                <span class="create-time">{{ article.createTime }}</span>
              </div>
            </div>

            <div class="action">
              <el-button type="primary" plain class="action">+关注</el-button>
            </div>

          </div>

        </div>

        <div class="container-inside-article-markdown">
          <ArticleContent></ArticleContent>
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  .container-inside {
    margin-top: 16px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    .container-inside-article {
      width: 80%;
      background: white;
      border-radius: 2px;
      padding: 24px;
      .container-inside-article-info {
        display: flex;
        flex-direction: column;
        .author {
          display: flex;
          justify-content: left;
          .author-left {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            .avatar-img {
              width: 50px;
              height: 50px;
              object-fit: cover;
              border-radius: 50%;
            }
            span {
              display: block;
            }
            .author-name {
              color: #515767;
              font-size: 16px;
              margin-left: 10px;
            }
            .create-time {
              color: #8A919F;
              font-size: 14px;
              margin-top: 7px;
              margin-left: 10px;
            }
          }
          .action{
            margin-left: 200px;
          }
        }
      }
    }
    .container-inside-leftBar {
      margin-top: 2rem;
      margin-left: 2rem;
      width: 10%;
    }
    .container-inside-rightBar {
      width: 20%;
      border-radius: 2px;
    }
  }

}
</style>