/*
 * @描述: 首页 /  底部四大金刚导航
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:37:20
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 01:37:56
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
// 刘旭,封装的路由组件.
import MyRoute from "../routers/MyRoute";

import BottomComponent from "../components/Home/Bottom_component/Bottom_component";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 路由组件 通过路由组件,可以使用数据集中式管理,子级组件,传递当前this.props.childrens*/}
        <MyRoute routeList={this.props.childrens}></MyRoute>
        {/* 底部导航 */}
        <BottomComponent />
      </React.Fragment>
    );
  }
}

export default Index;
