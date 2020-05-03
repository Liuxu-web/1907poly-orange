/*
 * @描述: App 状态组件
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:00:50
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-03 20:55:14
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";
// 路由数据
import { routeList } from "./routers";
// 刘旭,封装的路由组件.
import MyRoute from "./routers/MyRoute";
// 发布与订阅
import pubsub from "pubsub-js";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.boll = true;
  }

  render() {
    return (
      <div onScroll={this.throttle.apply(this, [this.Fun.bind(this), 500])} className={"App"}>
        <MyRoute routeList={routeList} />
      </div>
    );
  }

  // 节流 防止滚动条事件高频触发
  throttle(func, wait) {
    let previous = 0;
    return function () {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    };
  }

  Fun() {
    if (this.boll) {
      // 获取当前App 元素
      const app = document.querySelector(".App");
      // 获取App 下面第一个子级元素
      const homeBox = app.firstElementChild;
      // 判断 当前的页面如果是 home 页面 才可以执行发布者流程
      if (homeBox.className === "home-box") {
        // 获取 home 页面的总高度
        const homeBoxH = parseInt(getComputedStyle(homeBox).height);
        // 判断 滚动的高度 加上 500 + 底部导航 的高度 是否大于 home的高度
        if (app.scrollTop + 1000 + 736 > homeBoxH) {
          // 发布者
          pubsub.publish("page", this.props.page + 1);
          this.boll = false;
        }
      }
    }
  }

  componentDidMount() {
    // 订阅者 解除滚动限制
    pubsub.subscribe("boll", () => {
      this.boll = true;
    });
  }
}

// 映射当前仓库 的 state 属性 到 当前组件的props
function mapStateToProps({ homeList }) {
  return {
    page: homeList.page,
  };
}

export default connect(mapStateToProps, null)(App);
