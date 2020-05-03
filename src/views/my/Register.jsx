import React, { Component } from "react";
import pubsub from "pubsub-js";
import LoginNav from "../../components/my/LoginNav";
import "../../assets/css/my/register.css";
export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="root">
            {/* <!-- 头部 --> */}
            <header className="header">
              <LoginNav></LoginNav>
            </header>
            {/* <!-- 手机号 --> */}
            <div className="phone">
              <input type="text" placeholder="       请输入手机号" />
              <input type="text" placeholder="请输入图形验证码" />
              <p className="num">+86</p>
              <p className="zhu">未注册的手机号将自动创建会员账号</p>
              <button>获取短信验证码</button>
              <p className="wen">
                <span>邮箱注册</span>
                <span
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  密码登录
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
                {" "}
                <img src="./img/a2.png" alt="" />
              </p>
              <p>
                {" "}
                <img src="./img/a1.png" alt="" />
              </p>
            </div>
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
