import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Api from "./api/http.js"; //导入api接口

Vue.prototype.$api = Api; //在vue上挂载api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
