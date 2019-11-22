<template>
  <div class="cover"></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { getCover } from "../api/http.js";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.$api.getCover.getCoverImage().then(res=>{
    //   // console.log(res)
    //   let ran = parseInt(Math.random()*7)
    //   this.coverImage = res.data.banners[ran].imageUrl
    // })
  }
};
</script>

<style lang="scss">
.cover {
  width: 2.5rem;
  height: 3.75rem;
  background: red;
}
</style>
