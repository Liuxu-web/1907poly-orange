/*
 * @描述: 封装顶部
 * @创建者: 刘旭
 * @Date: 2020-05-06 15:09:09
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 15:42:56
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./headerComponent.css";
class HeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"header_component"}>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
            className={"iconfont icon-arrow-ios-back"}
          ></button>
          <h1>{this.props.text}</h1>
          <button className={"iconfont icon-shenglvehao"}></button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(HeaderComponent);
