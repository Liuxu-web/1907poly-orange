import React, { Component } from "react";
//引入订阅发布
import pubsub from "pubsub-js";
// 引入头部组件样式
import headStyle from "../../assets/css/my/headnav.module.css";
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
            onClick={() => {
              this.state.routerInfo.props.history.go(-1);
            }}
          >
            &lt;
          </i>
          <span className={headStyle.title_content}>
            {this.props.titleName}
          </span>
          <div className={headStyle.title_expand}>
            <i>...</i>
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
  }
  componentWillUnmount() {
    pubsub.unsubscribe(this.distory);
  }
}

export default HeadNav;
