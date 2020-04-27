/*
 * @描述: 项目入口文件.
 * @创建者: 刘旭
 * @Date: 2020-04-27 20:51:45
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 21:23:57
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css"; // 全局默认样式
import App from "./App.jsx";

import * as serviceWorker from "./serviceWorker"; // 缓存

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
