<template>
  <div>
    <div class="serch">
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
  mounted() {
    // eslint-disable-next-line no-console
    console.log(33);
  },
  methods: {}
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
        background: red;
      }
    }
  }
}
</style>
