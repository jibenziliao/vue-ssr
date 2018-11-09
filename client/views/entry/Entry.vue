<template>
  <div class="post-container">
    <div v-if="pageLoading">正在加载。。。</div>
    <div v-else
         class="post-content markdown-body"
         v-html="content"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { asyncRequest } from '../../common/utils/request'
import { hostConfig } from '../../api/config'
export default {
  data () {
    return {
    }
  },
  async asyncData ({ store, route, side = 'server', cookies }) {
    await asyncRequest({
      url: `${hostConfig.timeline}/get_entry_by_ids`,
      method: 'get',
      params: {
        src: 'web',
        entryIds: route.params.id
      }
    }, store, side, cookies)
    let result = await asyncRequest({
      url: `${hostConfig.entry}/getEntryView`,
      method: 'get',
      params: {
        src: 'web',
        entryId: route.params.id
      }
    }, store, side, cookies)
    if (result.res.data.m === 'ok') {
      result.state.content = result.res.data.d.content
    }
  },
  computed: {
    ...mapGetters([
      'content',
      'pageLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import url("https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css");
  .post-container {
    padding: 0 48px;
  }
  .markdown-body {
    font-size: 32px;
    img {
      width: 100%;
    }
  }
  .post-content {
    img {
      width: 100%;
    }
  }
</style>

