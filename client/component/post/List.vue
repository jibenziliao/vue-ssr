<template>
  <ul class="entry-list">
    <li v-for="item in list"
        :key="item.originalUrl"
        class="item"
        @click="handleClick(item)">
      <div class="content-box">
        <div class="info-box">
          <div class="info-row meta-row">
            <ul class="meta-list">
              <li class="row-item username clickable">
                <a>{{item.user.username}}</a>
              </li>
              <li v-if="item.tags && item.tags.length > 0"
                  class="row-item">
                {{item.tags[0].title}}
              </li>
            </ul>
          </div>
          <div class="info-row title-row">
            <a v-if="item.title"
               class="title">{{item.title}}</a>
          </div>
          <div class="info-row action-row">
            <ul class="action-list">
              <li class="row-item like">
                <a class="title-box">
                  <i class="iconfont icon-dianzan item-icon"></i>
                  <span class="count">{{item.collectionCount}}</span>
                </a>
              </li>
              <li class="row-item comment">
                <a class="title-box">
                  <i class="iconfont icon-pinglun item-icon"></i>
                  <span class="count">{{item.commentsCount}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";
  .entry-list {
    width: 100%;
    background-color: #fff;
    .item {
      border-bottom: 1px solid rgba(178, 186, 194, 0.15);
      .content-box {
        display: flex;
        align-items: center;
        padding: 36px 48px;
        .info-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-content: center;
          flex: 1 1 auto;
          min-width: 0;
          .meta-row {
            font-size: 24px;
            color: #b2bac2;
            .meta-list {
              display: flex;
              align-items: baseline;
              white-space: nowrap;
              .row-item:not(:last-child):after {
                content: "\B7";
                margin: 0 0.4em;
                color: #b2bac2;
              }
            }
          }
          .title-row {
            margin: 12px 0 24px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .title {
              font-size: 28px;
              font-weight: 600;
              line-height: 1.2;
              color: #2e3135;
            }
            .title:visited {
              color: #909090;
            }
          }
          .action-list {
            display: inline-flex;
            white-space: nowrap;
            .row-item {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              height: 36px;
              font-size: 24px;
              border: 1px solid #edeeef;
              line-height: 1;
              white-space: nowrap;
              color: #b2bac2;
              .title-box {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 20px;
                height: 100%;
                .item-icon {
                  font-size: 26px;
                  color: #b2bac2;
                  margin-right: 10px;
                }
              }
            }
            .like {
              margin-right: -1px;
            }
            .comment {
              margin-left: -1px;
            }
          }
        }
      }
    }
  }
</style>
