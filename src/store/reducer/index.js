/*
 * @描述: reducer 合并
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:56:44
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 19:06:33
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import { combineReducers } from "redux";

import homeList from "../reducer/Home-reducer";

const rootReducer = combineReducers({
  homeList,
});

export default rootReducer;
