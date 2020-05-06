/*
 * @描述: 积分兑换 - 积分商城
 * @创建者: 刘旭
 * @Date: 2020-05-06 15:32:10
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 15:45:07
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./IntegralStore.css";
class IntegralStore extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"IntegralStore-box"}>
          <div className={"header"}>
            <button
              onClick={() => {
                this.props.history.push("/");
              }}
              className={"iconfont icon-arrow-ios-back"}
            ></button>
            <h1>积分商城</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IntegralStore;
