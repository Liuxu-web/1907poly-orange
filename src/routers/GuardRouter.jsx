/*
 * @描述: 路由集中管理 高阶组件
 * @创建者: 刘旭
 * @Date: 2020-04-27 23:22:59
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 23:42:32
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class GuardRouter extends Component {
  render() {
    return <this.props.component {...this.props} />;
  }
}
// 使用withRouter 给每一个路由组件 添加 路由信息.
export default withRouter(GuardRouter);
