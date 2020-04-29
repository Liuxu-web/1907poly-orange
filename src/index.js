/*
 * @描述: 项目入口文件.
 * @创建者: 刘旭
 * @Date: 2020-04-27 20:51:45
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 19:50:02
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // 导出redux仓库
import "./method/axios/http"; // 封装的axios 目前只有get 方法
import "./index.css"; // 全局默认样式
import App from "./App.jsx";

import * as serviceWorker from "./serviceWorker"; // 缓存

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
