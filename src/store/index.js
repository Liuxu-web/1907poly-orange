/*
 * @描述: 创建仓库
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:56:28
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 19:19:01
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
// 创建仓库模块
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// 引入合并仓库
import rootReducer from "./reducer";

// 创建仓库
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
