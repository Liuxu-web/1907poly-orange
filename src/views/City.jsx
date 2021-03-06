/*
 * @描述: 城市定位
 * @创建者: 刘旭
 * @Date: 2020-04-30 18:57:47
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 16:40:34
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import CityComponent from "../components/Home/City_component/City_component";

class City extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 组件 */}
        <CityComponent />
      </React.Fragment>
    );
  }
}

export default City;
