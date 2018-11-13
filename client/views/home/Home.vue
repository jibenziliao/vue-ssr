<template>
  <div class="list-page"
       :style="{'height': scrollHeight}"
       ref="homeWrapper">
    <list :list="entryList"
          @click="goPostDetail">
    </list>
    <mugen-scroll :handler="loadBottom"
                  :handle-on-mount="false"
                  :should-handle="!loading"
                  scroll-container="homeWrapper">
      <div class="entry-loading">
        <div class="placeholder-block"></div>
        <div class="placeholder-block short"></div>
      </div>
    </mugen-scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPostId, setScrollTop } from '../../common/utils'
import MugenScroll from 'vue-mugen-scroll'
import List from '../../component/post/List.vue'
export default {
  name: 'Home',
  data () {
    return {
      scrollHeight: '1334px'
    }
  },
  asyncData ({ store, route, side = 'server', cookies }) {
    return store.dispatch('getEntry', { side, cookies })
  },
  components: {
    MugenScroll,
    List
  },
  methods: {
    goPostDetail (item) {
      let postId = ''
      if (item.type === 'post') {
        postId = getPostId(item.originalUrl)
        this.$router.push({ path: `/post/${postId}` })
      } else {
        this.$router.push({ path: `/entry/${item.objectId}` })
      }
    },
    getEntry () {
      this.$store.dispatch('getEntryNext', { side: 'client' })
    },
    loadBottom () {
      this.getEntry()
    },
    handleScrollHeight () {
      this.scrollHeight = document.getElementById('app').offsetHeight + 'px'
    }
  },
  mounted () {
    this.handleScrollHeight()
  },
  activated () {
    setScrollTop(this.$store.state.scrollMap.Home || 0, this.$refs.homeWrapper)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('saveScroll', { name: 'Home', value: this.$refs.homeWrapper.scrollTop })
    next()
  },
  computed: {
    ...mapGetters([
      'entryList',
      'loading'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";
  .list-page {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .entry-loading {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 220px;
    flex-direction: column;
    padding: 36px 48px;
    box-sizing: border-box;
    .placeholder-block {
      height: 40px;
      width: 500px;
      background-color: $placeholder-color;
    }
    .short {
      width: 200px;
      margin-top: 30px;
    }
  }
</style>
