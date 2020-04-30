/*
 * @描述: 首页 /  底部四大金刚导航
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:37:20
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-30 19:12:42
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Index.module.css";
// 刘旭,封装的路由组件.
import MyRoute from "../routers/MyRoute";
// redux-redux
import homeCreator from "./../store/actionsCreator/Home-actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Index extends Component {
  constructor(props) {
    super(props);
    this.path = "首页";
  }

  render() {
    return (
      <React.Fragment>
        {/* 路由组件 通过路由组件,可以使用数据集中式管理,子级组件,传递当前this.props.childrens*/}
        <MyRoute routeList={this.props.childrens}></MyRoute>

        {/* 底部导航配置  之后可能会封装为组件*/}
        <footer style={style.footer}>
          {this.props.homeList.bottom_list.map((v) => (
            <div key={v.url} className={style.Nav}>
              <NavLink
                className={this.path === v.name ? style.NavImgActive : style.NavImg}
                onClick={() => {
                  this.path = v.name;
                }}
                to={v.url}
              >
                <div>
                  <img src={v.pic} alt={v.name} />
                </div>
                <p>{this.path === v.name ? null : v.name}</p>
              </NavLink>
            </div>
          ))}
        </footer>
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.props.gethome.apply(this);
    console.log(this.path);
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

export default connect(mapStateToProps, mapDispatchProps)(Index);
