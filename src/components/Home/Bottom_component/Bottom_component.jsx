/*
 * @描述: 底部导航组件
 * @创建者: 刘旭
 * @Date: 2020-05-02 01:24:01
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 01:53:24
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Bottom.module.css";
// redux-redux
import homeCreator from "../../../store/actionsCreator/Home-actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// 发布与订阅
import pubsub from "pubsub-js";

class BottomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/",
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* 底部导航配置  之后可能会封装为组件*/}
        <footer style={style.footer}>
          <ul>
            {this.props.homeList.bottom_list.map((v) => (
              <li key={v.name}>
                <NavLink to={v.url}>
                  <div
                    style={{ background: `url(${v.pic})` }}
                    className={this.state.path === v.url ? style.footerActive : style.bottomImg}
                  ></div>
                  {v.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </footer>
      </React.Fragment>
    );
  }

  // 订阅者
  subscribe() {
    pubsub.subscribe("home", (msgName, params) => {
      this.setState({ path: params });
    });
    pubsub.subscribe("theater", (msgName, params) => {
      this.setState({ path: params });
    });
    pubsub.subscribe("ticketFolder", (msgName, params) => {
      this.setState({ path: params });
    });
    pubsub.subscribe("my", (msgName, params) => {
      this.setState({ path: params });
    });
  }
  componentDidMount() {
    // 获取聚橙网数据
    this.props.gethome.apply(this);
    // 订阅
    this.subscribe();
  }
  componentWillUnmount() {
    this.setState = () => null;
  }
}

// 映射state 到 当前组件的props
function mapStateToProps({ homeList }) {
  return {
    homeList,
  };
}
// 映射dispatch 到 当前组件的props
function mapDispatchProps(dispatch) {
  return bindActionCreators(homeCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(BottomComponent);
