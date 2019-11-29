/* eslint-disable no-console */
import axios from "axios";

// 创建axios实例
let instance = axios.create({
  timeout: 30000 //请求超时时间
  // baseURL: "http://127.0.0.1:3000"
});

// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_BASEURL);
const getCover = {
  getCoverImage() {
    return instance.get("/banner");
  }
};
instance.interceptors.request.use(config => {
  config.headers["authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
});

export default {
  getCover
};

// export function getCodeData(data) {
//   return axios({
//     url: `/api/login`,
//     method: "post",
//     data
//   });
// }
// // var data = {
// //   username: "dhq",
// //   password: "123456"
// // };

// export function getCode(data) {
//   return axios({
//     url: `/api/register`,
//     method: "post",
//     data
//   });
// }

// export function getList() {
//   return instance({
//     url: `/api/list`,
//     method: "get"
//   });
// }

// var obj = {
//   todo: "12"
// };

// export function add(data) {
//   return instance({
//     url: `/api/register`,
//     method: "post",
//     data
//   });
// }

// getList().then(res => {
//   console.log(res);

//   // localStorage.setItem("token", res.data.token);
// });
