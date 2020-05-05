/*
 * @描述: 城市定位 组件
 * @创建者: 刘旭
 * @Date: 2020-04-30 19:05:12
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-05 20:25:23
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";

import "./city.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import cityCreator from "../../../store/actionsCreator/City-actionCreator";

class City_component extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- 顶部 --> */}
        <div className={"city_header"}>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
            className={"iconfont icon-arrow-ios-back"}
          ></button>
          <span>城市选择</span>
        </div>
        {/* <!-- 城市内容 --> */}
        <div className={"city_content_box"}>
          {/* <!-- 侧边栏 --> */}
          <div className={"aside"}>
            <span onClick={this.Goto.bind(this, true)}>定位 热门</span>
            {this.props.city_data.map((v, i) => (
              <p onClick={this.Goto.bind(this, false, v.id, i)} key={v.id}>
                {v.id}
              </p>
            ))}
          </div>
          {/* <!-- 定位城市 --> */}
          <div className={"city_content_top"}>
            <h1>定位城市</h1>
            <button>{localStorage.city}</button>
          </div>
          {/* <!-- 热门城市 --> */}
          <div className={"city_content_middle"}>
            <h1>热门城市</h1>
            <div className={"city_list_top"}>
              <button>全国</button>
              {this.props.hot_city_List.map((v) => (
                <button
                  onClick={() => {
                    localStorage.city = v.name;
                    this.props.history.push("/");
                  }}
                  key={v.id}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
          {/* 排序城市 */}
          <div className={"city_content_bottom"}>
            {this.props.city_data.map((v) => (
              // 循环 字母 title
              <React.Fragment key={v.id}>
                <h1 id={v.id}>{v.id}</h1>
                <ul>
                  {/* 循环 字母城市 */}
                  {v.list.map((item) => (
                    <li
                      onClick={() => {
                        localStorage.city = item.name;
                        this.props.history.push("/");
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  // 根据侧边栏字母实现当前页面锚点跳转
  Goto(boll, id, index) {
    if (boll) {
      // 参数为true 为返回顶部
      const ele = document.querySelector(".city_content_box");
      ele.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // 参数为false 为类型跳转
      const ele = document.querySelector("#" + id);
      const oP = document.querySelectorAll(".aside p");
      for (let i = 0; i < oP.length; i++) {
        oP[i].style.color = "";
      }
      oP[index].style.color = "red";
      ele.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  componentDidMount() {
    // 获取城市列表
    this.props.CHANGE_CITY_LIST.apply(this);
    // 获取字母排序城市列表
    this.props.CHANGE_CITY_DATA.apply(this);
  }
}

// 映射state 到 当前组件的props
function mapStateToProps({ cityList }) {
  return {
    city_data: cityList.city_data,
    hot_city_List: cityList.hot_city_List,
  };
}
// 映射dispatch 到 当前组件的props
function mapDispatchProps(dispatch) {
  return bindActionCreators(cityCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(City_component);
