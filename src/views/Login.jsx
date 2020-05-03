import React, { Component } from "react";
import pubsub from "pubsub-js";
import "../assets/iconfont/iconfont.css";
//引入样式
import "../assets/css/my/login.css";
import LoginNav from "../components/my/LoginNav";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div id="root">
            {/* <!-- 头部 --> */}
            <header className="header">
              <LoginNav></LoginNav>
            </header>
            {/* <!-- 手机号 --> */}
            <div className="phone">
              <input type="text" placeholder="请输入手机号/邮箱" />
              <input type="text" placeholder="请输入密码" />
              <button>登录</button>
              <p>
                <span
                  onClick={() => {
                    this.props.history.push("/resetpassword");
                  }}
                >
                  忘记密码
                </span>
                <span
                  onClick={() => {
                    this.props.history.push("/register");
                  }}
                >
                  验证码登录/注册
                </span>
              </p>
            </div>
            {/* <!-- 底部 其他方式登录 --> */}
            <div className="other">
              <p></p>
              <p></p>
              <p className="text">其他方式登录</p>
            </div>
            <div className="login">
              <p>
                <i
                  className={"iconfont icon-logo-qq"}
                  style={{ color: "green", fontSize: "0.2917rem" }}
                ></i>
              </p>
              <p>
                <i
                  className={"iconfont icon-weibo"}
                  style={{
                    color: "red",
                    fontSize: "0.2917rem",
                  }}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 发布者
    pubsub.publish("login", this);
  }
}
