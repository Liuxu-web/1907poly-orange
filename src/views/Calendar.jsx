/*
 * @描述: 演出日历
 * @创建者: 刘旭
 * @Date: 2020-05-01 13:06:29
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 16:44:59
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import CalendarComponent from "../components/Home/Calendar_component.jsx";

class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        <CalendarComponent />
      </React.Fragment>
    );
  }
}

export default Calendar;
