<template>
  <div class="home-container">
    <p class="title">下面是机构详情</p>
    <ul v-if="!pageLoading"
        class="list">
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
    <ul v-else
        class="list empty-list">
      <li class="item">
        <span class="label empty"></span>
        <span class="value empty"></span>
      </li>
      <li class="item">
        <span class="label empty"></span>
        <span class="value empty"></span>
      </li>
      <li class="item">
        <span class="label empty"></span>
        <span class="value empty"></span>
      </li>
    </ul>
    <router-link to="/organization_list"
                 class="link-button">前往机构列表页</router-link>
    <router-link to="/organizations/1325"
                 class="link-button">前往另一个机构</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { asyncRequest } from '../../common/utils/request'
export default {
  data () {
    return {
    }
  },
  async asyncData ({ store, route, side = 'server' }) {
    let { state, res } = await asyncRequest({
      url: `/v2/public/organizations/${route.params.id}`,
      method: 'get',
      params: { id: route.params.id }
    }, store, side)
    if (res.data) {
      state.organizationDetail = res.data.data.organization
    }
  },
  methods: {
    ...mapActions(['getOrganizationDetail'])
  },
  computed: {
    ...mapGetters([
      'organizationDetail',
      'pageLoading'
    ]),
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

