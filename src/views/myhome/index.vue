<template>
  <div>
    <div class="serch" @scroll="scrollEvent">
      <ul class="serch_nav">
        <li class="serch_nav_cener" v-for="(item, index) in list" :key="index">
          <div class="serch_nav_cener_yuan"></div>
          <span>
            1233
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "myhome",
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  mounted() {},
  methods: {
    scrollEvent(e) {
      // if(e.scrollLeft==)
      // eslint-disable-next-line no-console
      console.log(e);
      // eslint-disable-next-line no-console
      console.log(e.srcElement.scrollWidth);
      // eslint-disable-next-line no-console
      console.log(e.srcElement.scrollLeft);

      if (e.srcElement.scrollLeft > 270) {
        e.preventDefault();
      }
    }
  }
};
</script>

<style scoped></style>
<style lang="scss" scoped>
.serch {
  width: 100%;
  height: 1.875rem;
  background: #ddd;
  overflow: auto;
  .serch_nav {
    width: 180%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    .serch_nav_cener {
      width: 1.5625rem;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .serch_nav_cener_yuan {
        width: 1.125rem;
        height: 1.125rem;
        border-radius: 50%;
        background: #ddd;
      }
    }
  }
}
</style>
