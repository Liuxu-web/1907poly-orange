/*
 * @描述: 演出日历 组件
 * @创建者: 刘旭
 * @Date: 2020-05-01 13:26:57
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 19:35:59
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./calendar.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import calendarCreator from "../../store/actionsCreator/Calendar-actionCreator";
class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.FullYear = 0;
    this.Month = new Date().getMonth() + 1;
  }

  render() {
    return (
      <React.Fragment>
        <div className={"calendar-box"}>
          {/* 顶部 */}
          <div className={"calendar-header"}>
            <button
              onClick={() => {
                this.props.history.push("/");
              }}
              className={"iconfont icon-arrow-ios-back"}
            ></button>
            <h1>演出日历</h1>
            <button className={"iconfont icon-shenglvehao"}></button>
          </div>
          {/* 横向滑动列表 */}
          <div className={"calendar-tab"}>
            <ul>
              {this.props.calendarTabList.map((v) => (
                <li key={v.id}>
                  <a
                    href={"/#"}
                    onClick={this.Tab.bind(this)}
                    className={v.name === "全部" ? "active" : null}
                  >
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              全国 <i className={"iconfont icon-dizhi"}></i>
            </div>
          </div>
          {/* 年月 */}
          <div className={"calendar-years"}>
            <button
              onClick={this.goMonth.bind(this, false)}
              className={"iconfont icon-arrow-ios-back"}
            ></button>
            <h1 id={"Month"}>{new Date().getFullYear() + this.FullYear + "年" + this.Month + "月"}</h1>
            <button
              onClick={this.goMonth.bind(this, true)}
              className={"iconfont icon-arrow-ios-forward"}
            ></button>
          </div>
          {/* 星期 */}
          <div className={"calendar-week-box"}>
            <div className={"calendar-week"}>
              <span>日</span>
              <span>一</span>
              <span>二</span>
              <span>三</span>
              <span>四</span>
              <span>五</span>
              <span>六</span>
            </div>
          </div>
          {/* 日期 */}
          <div className={"calendar-week-date-box"}>
            <div className={"calendar-week-date"}>
              {this.props.calendarDayList.map((v) => (
                <div key={v.day + v.date} className={v.isCurrentDay ? "dataAvtice" : "date"}>
                  <p className={v.isCurrentMonth ? "active" : null}>{v.day}</p>
                  <span>{v.isCurrentDay ? "今日" : null}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 提示 */}
          <h2>没有更多了</h2>
        </div>
      </React.Fragment>
    );
  }

  Tab(e) {
    e.preventDefault();
    const ele = document.querySelectorAll(".calendar-tab a");
    for (let i = 0; i < ele.length; i++) {
      ele[i].className = "";
    }
    e.target.className = "active";
  }

  // 点击渲染下一个月 || 上一个月
  goMonth(bool) {
    const off = 1 + parseInt(this.props.calendarDayList[10].date.substr(5, 2));
    const off2 = parseInt(this.props.calendarDayList[10].date.substr(5, 2)) - 1;

    if (bool) {
      if (off <= 12) {
        this.props.CHANGE_CALENDAR_DAY.apply(this, [++this.Month]);
      } else {
        this.props.CHANGE_CALENDAR_DAY.apply(this, [1]);
        this.Month = 1;
      }
    } else {
      if (off2 >= 1) {
        this.props.CHANGE_CALENDAR_DAY.apply(this, [--this.Month]);
      } else {
        this.props.CHANGE_CALENDAR_DAY.apply(this, [12]);
        this.Month = 12;
      }
    }
  }

  componentDidMount() {
    console.log(this.Month);
    this.props.CHANGE_CALENDAR_TAB.apply(this);
    this.props.CHANGE_CALENDAR_DAY.apply(this, [this.Month]);
  }
}
// 映射state 数据 到 当前组件的props
function mapStateToProps({ calendarLsit }) {
  return {
    calendarDayList: calendarLsit.calendarDayList,
    calendarTabList: calendarLsit.calendarTabList,
  };
}
// 映射dispatch 方法 到 当前组件的props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(calendarCreator, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
