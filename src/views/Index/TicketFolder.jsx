/*
 * @描述: 票夹 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:59:26
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 18:11:05
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
import "./TicketFolder.css";
class TicketFolder extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"TF_header"}>
          票夹
          <i className={"iconfont icon-shenglvehao"}></i>
        </div>
        <div className={"TF_subject"}>
          <div className={"TF_gologin"}>
            <p>暂无电子票</p>
            <button
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              登录
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 发布者
    pubsub.publish("ticketFolder", "/ticketFolder");
  }
}

export default TicketFolder;
