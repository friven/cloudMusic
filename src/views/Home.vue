<template>
  <!-- 主页tab -->
  <div class="home">
    <div class="mainTab">
      <span class="menuStyle iconfont iconcaidan" @click="popMsg"></span>
      <van-tabs swipeable line-height="0" v-model="active" animated>
        <van-tab title="我的">
          <Myhome></Myhome>
        </van-tab>
        <van-tab title="发现">1111</van-tab>
        <van-tab title="朋友">1111</van-tab>
        <van-tab title="视频">1111</van-tab>
      </van-tabs>
      <span class="searchStyle iconfont iconsousuo"></span>
    </div>

    <van-popup
      v-model="show"
      position="left"
      get-container="body"
      :style="{
        width: '50%',
        height: '100%'
      }"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Myhome from "./myhome/index";
export default {
  name: "home",
  components: {
    Myhome
  },
  data() {
    return {
      active: "1", //tab页index
      show: false //左侧pop
    };
  },
  methods: {
    // 左侧弹出框
    popMsg() {
      this.show = !this.show;
      // eslint-disable-next-line no-console
      console.log(this.show);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.home {
  .mainTab {
    width: 95%;
    margin: 0 auto;
    position: relative;
    .van-tabs__wrap {
      display: flex;
      justify-content: center;
      .van-tabs__nav {
        width: 60%;
      }
    }
    .van-row {
      background-color: "gray";
      backdrop-filter: blur(0.125rem);
    }
    backdrop-filter: blur(2px);
    .menuStyle {
      font-size: 0.75rem;
      position: absolute;
      z-index: 10;
      left: 0;
      top: 0;
    }
    .menuStyle:before {
      line-height: 1.1875rem;
    }
    .searchStyle {
      font-size: 0.75rem;
      position: absolute;
      right: 0;
      top: 0;
    }
    .searchStyle:before {
      line-height: 1.1875rem;
    }
    .van-tabs__content {
    }
  }
}
</style>
