/*
 * @描述: 首页 /  底部四大金刚导航
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:37:20
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 23:36:50
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// 刘旭,封装的路由组件.
import MyRoute from "../routers/MyRoute";

// 底部导航的样式
const footer = {
  borderTop: "0.0042rem solid #f4f4f4",
  height: "0.4042rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "pink",
  position: "absolute",
  bottom: "0",
};

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 路由组件 通过路由组件,可以使用数据集中式管理,子级组件,传递当前this.props.childrens*/}
        <MyRoute routeList={this.props.childrens}></MyRoute>
        {/*  底部 导航 */}
        <footer style={footer}>
          <NavLink to={"/"}>首页</NavLink>
          <NavLink to={"/theater"}>剧院</NavLink>
          <NavLink to={"/ticketFolder"}>票夹</NavLink>
          <NavLink to={"/my"}>我的</NavLink>
        </footer>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 不理解的看看props属性,
    console.log(this.props);
  }
}

export default Index;
