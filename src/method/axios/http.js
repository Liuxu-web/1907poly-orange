/*
 * @描述:
 * @创建者: 刘旭
 * @Date: 2020-04-28 13:04:00
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 09:23:10
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import axios from "axios";
import {
  Component
} from "react";

// 请求前拦截
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  (data) => {
    return data.data;
  },
  (err) => {
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);
// get请求方式 参数: url地址. 与参数{}
const get = (url, params = {}) => {
  return axios.get(url, {
    params,
  });
};

Component.prototype.$get = get;