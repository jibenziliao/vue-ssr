<template>
  <div class="list-page">
    <ul class="org-list">
      <li v-for="(item, index) in organizations"
          :key="index"
          class="item-wrapper">
        <router-link :to="`/organizations/${item.organization_id}`"
                     class="item">
          <img :src="item.logo"
               :alt="item.name"
               class="logo">
          <div class="content">
            <p class="name">{{item.name}}</p>
            <p class="address">{{item.address}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <button class="list-button"
            @click="getOrganizationDetail()">随机请求</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { requestFn, asyncRequest } from '../../common/utils/request'
export default {
  data () {
    return {

    }
  },
  async asyncData ({ store, route, side = 'server' }) {
    let { state, res } = await asyncRequest({
      url: '/v1/service/23/enterprises',
      method: 'get',
      params: { page: 1, per_page: 10 }
    }, store, side)
    if (res.data) {
      state.organizations = res.data.enterprises
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({ path: `/organizations/${id}` })
    },
    async getOrganizationDetail () {
      let { state, res } = await requestFn({
        url: '/v2/public/organizations/1325',
        method: 'get',
        params: { id: 1325 }
      })
      if (res.data) {
        console.log(res, state)
      }
    }
  },
  computed: {
    ...mapGetters(['organizations'])
  }
}
</script>

<style lang="scss" scoped>
  .list-page {
    .list-button {
      font-size: 36px;
      text-align: center;
      display: block;
      height: 98px;
      line-height: 98px;
      width: 100%;
      border: none;
      background-color: rgb(57, 182, 231);
      color: #fff;
    }
  }
  .org-list {
    .item {
      height: 128px;
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e0e0e0;
      .logo {
        height: 100px;
        width: 100px;
        background-color: #e0e0e0;
      }
      .content {
        height: inherit;
        flex: 1;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        .name {
          font-size: 32px;
          color: #333;
        }
        .address {
          font-size: 24px;
          color: #595959;
        }
      }
    }
  }
</style>
