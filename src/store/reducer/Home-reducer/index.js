/*
 * @描述: 首页reducer
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:43:34
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 20:02:13
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import HomeList from "../../state/Home-state";
import { GET_CLASS_IFY_HOME } from "../../actionType/Home-actionType";

const getHomeReducer = function (state = HomeList, { type, payload }) {
  // 深拷贝
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    case GET_CLASS_IFY_HOME: {
      // 准备项目底部导航 NavLink to地址为数组
      const bottomObj = ["/", "/theater", "/ticketFolder", "/my"];
      // 循环遍历 聚橙网数据 底部导航 数据
      // 替换聚橙网数据中 底部导航 url 路由地址为 我们的地址
      bottomObj.forEach((v, i) => {
        payload.bottom_list[i].url = v;
      });
      state.bottom_list = payload.bottom_list;
      state.classify_list = payload.classify_list;
      state.slide_list = payload.slide_list;
      state.top_icon = payload.top_icon;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default getHomeReducer;
