import axios from "axios";

// 创建axios实例
let instance = axios.create({
  timeout: 30000, //请求超时时间
  baseURL: "http://127.0.0.1:3000"
});

// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_BASEURL);
const getCover = {
  getCoverImage() {
    return instance.get("/banner");
  }
};

export default {
  getCover
};
