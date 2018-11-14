<template>
  <div class="page-loading">
    <div class="placeholder-block">
      <div class="author-info">
        <div class="placeholder circle"></div>
        <div class="content">
          <div class="placeholder short"></div>
          <div class="placeholder long"></div>
        </div>
      </div>
      <div class="placeholder img"></div>
      <div class="comment">
        <div class="placeholder"></div>
        <div class="placeholder"></div>
        <div class="placeholder"></div>
        <div class="placeholder"></div>
        <div class="placeholder short-comment"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostLoading',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";
  .placeholder-block {
    padding-top: 48px;
    .placeholder {
      background-color: $placeholder-color;
      height: 30px;
      width: 200px;
    }
    .author-info {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      .circle {
        height: 80px;
        width: 80px;
        border-radius: 100%;
        margin-right: 20px;
      }
    }
    .content {
      height: 80px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .long {
      width: 260px;
    }
    .short {
      width: 100px;
    }
    .img {
      width: 100%;
      height: 400px;
      margin-top: 40px;
    }
    .comment {
      margin-top: 40px;
      width: 100%;
      div {
        width: 100%;
        margin-bottom: 20px;
      }
      .short-comment {
        width: 300px;
      }
    }
  }
</style>

