<script setup>
    import BasicLayout from "@/layouts/default/index.vue"
    import ArticleContent from '../components/ArticleContent.vue';
    import ArticleMenu from '../components/ArticleMenu.vue';

    const article = {
      title: '文章标题',
      author: {
        name: '作者名称',
        avatar_url: 'https://avatars0.githubusercontent.com/u/20455301?s=460&v=4',
        is_follow: true,
      },
      content: '文章内容',
      createTime: '创建时间',
    };

</script>
<template>
  <BasicLayout></BasicLayout>
  <div class="main">
    <div class="main-inside">
      <div class="main-inside-article">
        <div class="main-inside-article-info">
          <div class="title">
            <h1>{{ article.title }}</h1>
          </div>

          <div class="author">
            <div class="author-left">
              <div class="avatar">
                <img
                    src="https://avatars0.githubusercontent.com/u/20455301?s=460&v=4"
                    width="50"
                    height="50">
              </div>
              <div>
                <span class="author-name">{{ article.author.name }}</span>
                <span class="create-time">{{ article.createTime }}</span>
              </div>
            </div>

            <div>
              <el-button type="primary" plain class="action">+关注</el-button>
            </div>

          </div>

        </div>

        <div class="main-inside-article-markdown">
          <ArticleContent></ArticleContent>
        </div>
      </div>
      <div class="main-inside-leftBar">

      </div>
      <div class="main-inside-rightBar">

      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  .main-inside {
    margin-top: 16px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .main-inside-article {
    width: 70%;
    background: white;
    border-radius: 2px;
    padding: 24px;

    .main-inside-article-info {
      display: flex;
      flex-direction: column;

      .title {

      }
      .author {
        display: flex;
        justify-content: space-between;
        .author-left {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          span {
            display: block;
          }
          .author-name {
            color: #515767;
            font-size: 16px;
          }
          .create-time {
            color: #8A919F;
            font-size: 14px;
            margin-top: 7px;
          }
        }

        .button {
          margin-top: 100px;
        }
      }



    }
    .main-inside-article-markdown {

    }
  }
  .main-inside-leftBar {
    position: fixed;
    top: 200px;
    width: 5%;
    margin-left: -5rem;
  }
  .main-inside-rightBar {
    width: 20%;
    border-radius: 2px;
    background: beige;
  }
}
</style>