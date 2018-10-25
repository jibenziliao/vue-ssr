<template>
  <div class="home-container">
    <p class="title">下面是机构详情</p>
    <ul class="list">
      <li class="item">
        <span class="label">机构id:</span>
        <span class="value">{{organization.id}}</span>
      </li>
      <li class="item">
        <span class="label">机构名:</span>
        <span class="value">{{organization.name}}</span>
      </li>
      <li class="item">
        <span class="label">机构名:</span>
        <span class="value">{{organization.name}}</span>
      </li>
    </ul>
    <router-link to="/organization_list"
                 class="link-button">前往机构列表页</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('getOrganizationDetail', { id: route.params.id })
  },
  methods: {
    ...mapActions(['getOrganizationDetail'])
  },
  /* beforeMount () {
    this.getOrganizationDetail({ id: this.$route.params.id })
  }, */
  computed: {
    ...mapGetters(['organizationDetail']),
    organization () {
      return this.$store.getters.organizationDetail
    }
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
    .link-button {
      font-size: 36px;
      text-align: center;
      display: block;
      height: 98px;
      line-height: 98px;
      width: 100%;
      background-color: rgb(57, 182, 231);
      color: #fff;
    }
  }
</style>

