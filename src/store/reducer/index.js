/*
 * @描述: reducer 合并
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:56:44
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 16:33:07
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import { combineReducers } from "redux";

import homeList from "../reducer/Home-reducer"; // 首页数据

import cityList from "../reducer/City-reducer"; // 城市定位

import calendarLsit from "../reducer/Calendar-reducer"; // 演出日历

import theater from "./theater/index.js"; //影院数据

import SearchList from "../reducer/Search-reducer"; // 搜索演出

import Details from "../reducer/Details-reducer"; // 演出详情

import ShowList from "../reducer/Show-reducer"; // 演出列表

import Neocaine from "../reducer/Neocaine-reducer";

const rootReducer = combineReducers({
  homeList,
  cityList,
  calendarLsit,
  SearchList,
  theater,
  Details,
  ShowList,
  Neocaine,
});

export default rootReducer;
