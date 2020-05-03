import React, { Component } from "react";
import LoginNav from "../../components/my/LoginNav";
import pubsub from "pubsub-js";
export default class ResetPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {/* <!-- 头部 --> */}
          <header>
            <LoginNav></LoginNav>
          </header>
          {/* <!-- 手机号 --> */}
          <div className="phone">
            <input type="text" placeholder="请输入手机号/邮箱" />
            <input type="text" placeholder="请输入图形验证码" />
            <button>下一步</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 发布者
    pubsub.publish("register", this);
  }
}
