<template>
  <div class="cover">
      <img :src="coverImage" class="coverStyle"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { getCover } from "../api/http.js";
export default {
  name: "home",
  data () {
    return {
      coverImage:"",
    }
  },
  methods: {
    
  },
  mounted () {
    this.$api.getCover.getCoverImage(1).then(res=>{
      // console.log(res)
      let ran = parseInt(Math.random()*7)
      this.coverImage = res.data.banners[ran].imageUrl
    })
  }
};
</script>

<style lang="scss">
.cover{
  width:200px;
  height: 200px;
  .coverStyle {
    width:200px;
    height:100px;
  }
}

</style>
