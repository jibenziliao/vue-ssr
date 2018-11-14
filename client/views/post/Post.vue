<template>
  <div class="post-container">
    <post-loading v-show="pageLoading"></post-loading>
    <div v-show="!pageLoading"
         class="post-content">
      <div v-if="info.user"
           class="author-info">
        <img :src="info.user.avatarLarge"
             alt=""
             class="avatar">
        <div class="content">
          <p class="name">{{info.user.username}}</p>
          <div class="other-info">
            <div class="date">{{formatDate('yyyy年MM月dd日', info.updatedAt)}}</div>
            <div class="visit-count">阅读{{info.viewsCount}}</div>
          </div>
        </div>
      </div>
      <h1 class="article-title">{{info.title}}</h1>
      <div class="markdown-body"
           v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from '../../common/utils'
const PostLoading = () => import('./Loading.vue')
export default {
  name: 'Post',
  data () {
    return {
    }
  },
  components: {
    PostLoading
  },
  asyncData ({ store, route, side = 'server', cookies }) {
    return store.dispatch('getPostInfo', { side, cookies, id: route.params.id })
  },
  methods: {
    formatDate (formatStr, date) {
      return format(formatStr, date)
    }
  },
  computed: {
    ...mapGetters([
      'content',
      'info',
      'pageLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";
  @import url("https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css");

  .post-container {
    padding: 0 48px;
    .article-title {
      font-size: 48px;
      font-weight: 700px;
      margin: 30px 0;
      line-height: 1.5;
    }
  }
  .markdown-body {
    font-size: 32px;
    img {
      width: 100%;
    }
  }
  .post-content {
    padding-top: 48px;
    img {
      max-width: 100%;
    }
    .author-info {
      display: flex;
      align-items: center;
      width: 100%;
      height: 90px;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin-right: 20px;
      }
      .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        height: inherit;
        .name {
          font-size: 32px;
          color: #333;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .other-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #555;
          font-size: 28px;
          .date {
            margin-right: 30px;
          }
        }
      }
    }
  }
</style>
