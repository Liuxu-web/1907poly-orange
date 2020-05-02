/*
 * @描述: reducer 合并
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:56:44
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 15:51:00
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import { combineReducers } from "redux";

import homeList from "../reducer/Home-reducer"; // 首页数据

import cityList from "../reducer/City-reducer"; // 城市定位

import calendarLsit from "../reducer/Calendar-reducer"; // 演出日历

import SearchList from "../reducer/Search-reducer";

const rootReducer = combineReducers({
  homeList,
  cityList,
  calendarLsit,
  SearchList,
});

export default rootReducer;
