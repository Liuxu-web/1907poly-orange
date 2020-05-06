/*
 * @描述: VIP + 会员页面
 * @创建者: 刘旭
 * @Date: 2020-05-06 15:23:59
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 15:25:03
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import HeaderComponent from "../components/Home/Header_component/HeaderComponent";

class Vip extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent text={"VIP + 会员"} />
      </React.Fragment>
    );
  }
}

export default Vip;
