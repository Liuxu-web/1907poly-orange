/*
 * @描述: App 状态组件
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:00:50
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 23:38:42
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";
// 路由数据
import { routeList } from "./routers";
// 刘旭,封装的路由组件.
import MyRoute from "./routers/MyRoute";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        {/* 路由组件 通过路由组件,可以使用数据集中式管理,
         不是子级组件,传递routeList*/}
        <MyRoute routeList={routeList} />
      </div>
    );
  }
}

export default App;
