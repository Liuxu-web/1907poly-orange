import React, { Component } from "react";
//引入订阅发布
import pubsub from "pubsub-js";
// 引入头部组件样式
import headStyle from "../../assets/css/my/headnav.module.css";
import "../../assets/iconfont/iconfont.css";
class HeadNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerInfo: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <!-- 头部导航 --> */}
        <div className={headStyle.title}>
          <i
            className={"iconfont icon-arrow-ios-back"}
            onClick={() => {
              this.state.routerInfo.props.history.go(-1);
            }}
          ></i>
          <span className={headStyle.title_content}>
            {this.props.titleName}
          </span>
          <div className={headStyle.title_expand}>
            <i className={"iconfont icon-shenglvehao"}></i>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 意见反馈订阅者
    this.distory = pubsub.subscribe(
      "feedback",
      function (topic, message) {
        this.setState({
          routerInfo: message,
        });
      }.bind(this)
    );
    // 收货地址订阅者
    this.address = pubsub.subscribe(
      "address",
      function (topic, message) {
        this.setState({
          routerInfo: message,
        });
      }.bind(this)
    );
    // 实名订票人订阅者
    this.myname = pubsub.subscribe(
      "myrealname",
      function (topic, message) {
        this.setState({
          routerInfo: message,
        });
      }.bind(this)
    );
  }
  componentWillUnmount() {
    pubsub.unsubscribe(this.distory);
    pubsub.unsubscribe(this.address);
    pubsub.unsubscribe(this.myname);
  }
}

export default HeadNav;
