<template>
  <div class="post-container">
    <div class="post-content"
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
  async asyncData ({ store, route, side = 'server' }) {
    let { state, res } = await asyncRequest({
      url: `${hostConfig.post}/getDetailData`,
      method: 'get',
      params: {
        src: 'web',
        postId: route.params.id,
        type: 'entryView'
      }
    }, store, side)
    if (res.data.m === 'ok') {
      state.content = res.data.d.content
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
  .home-container {
    .title {
      font-size: 32px;
      color: #333;
    }
    .list {
      .item {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 32px;
        .label {
          color: #595959;
        }
        .value {
          color: #333;
        }
      }
    }
    .empty-list {
      .empty {
        width: 120px;
        height: 40px;
        display: block;
        background-color: #e0e0e0;
        margin-right: 20px;
      }
    }
    .link-button {
      font-size: 36px;
      text-align: center;
      display: block;
      height: 98px;
      line-height: 98px;
      width: 100%;
      background-color: rgb(57, 182, 231);
      color: #fff;
      margin-top: 30px;
    }
  }
</style>

