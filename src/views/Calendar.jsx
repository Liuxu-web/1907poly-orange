/*
 * @描述: 演出日历
 * @创建者: 刘旭
 * @Date: 2020-05-01 13:06:29
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 21:08:36
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import CalendarComponent from "../components/Home/Calendar_component/Calendar_component.jsx";

class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 组件 */}
        <CalendarComponent />
      </React.Fragment>
    );
  }
}

export default Calendar;
