import React, { Component } from "react";
import pubsub from "pubsub-js";
// 引入头部组件样式
import headStyle from "../../assets/css/my/headnav.module.css";
import "../../assets/iconfont/iconfont.css";
export default class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerInfo: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/* <!-- 头部导航 --> */}
          <div className={headStyle.title}>
            <i
              className={"iconfont icon-arrow-ios-back"}
              onClick={() => {
                this.state.routerInfo.props.history.go(-1);
              }}
            ></i>
          </div>
          <div className={headStyle.login_pic}>
            <img
              src="https://m.juooo.com/static/img/login_logo.4a43235.png"
              alt=""
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 登录login订阅者
    this.loginhome = pubsub.subscribe(
      "login",
      function (topic, message) {
        this.setState({
          routerInfo: message,
        });
      }.bind(this)
    );
    // 注册订阅者
    this.register = pubsub.subscribe(
      "register",
      function (topic, message) {
        this.setState({
          routerInfo: message,
        });
      }.bind(this)
    );
  }
  componentWillUnmount() {
    pubsub.unsubscribe(this.loginhome);
    pubsub.unsubscribe(this.register);
  }
}
