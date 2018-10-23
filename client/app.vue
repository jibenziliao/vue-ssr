<template>
  <div id="app">
    <div class="home">
      <div class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"
                       :key="$route.fullPath">
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"
                     :key="$route.fullPath">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import titleMixin from 'common/mixin/title-mixin'
export default {
  mixins: [titleMixin],
  title () {
    return 'vue-ssr'
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "./styles/common";
</style>
