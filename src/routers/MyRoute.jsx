/*
 * @描述: 路由组件
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:42:49
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 23:41:19
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// 高阶组件
import GuardRouter from "./GuardRouter";

class MyRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {this.props.routeList.map((v) => (
            <Route key={v.path} path={v.path} exact={v.exact} render={() => <GuardRouter {...v} />} />
          ))}
          {/* 重定向 404 */}
          <Redirect to={"/error"} from={"*"} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MyRoute;
