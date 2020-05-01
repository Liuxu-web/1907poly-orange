/*
 * @描述: 票夹 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:59:26
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 01:47:17
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
class TicketFolder extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>票夹页面</h1>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 发布者
    pubsub.publish("ticketFolder", "/ticketFolder");
  }
}

export default TicketFolder;
