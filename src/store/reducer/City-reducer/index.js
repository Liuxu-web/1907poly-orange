/*
 * @描述: City-reducer 城市定位
 * @创建者: 刘旭
 * @Date: 2020-04-30 19:37:35
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-30 20:47:01
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { HOT_CITY_LIST, CITY_DATA } from "../../actionType/City-actionType";
import InfoCityList from "../../state/City-state";

const getCityList = function (state = InfoCityList, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    // 城市列表
    case HOT_CITY_LIST: {
      state.hot_city_List = payload;
      return state;
    }
    // 字母排序城市列表
    case CITY_DATA: {
      // 判断city_data 下标 小于等于 0 才可以循环添加
      if (state.city_data.length <= 0) {
        for (let key in payload) {
          state.city_data.push(payload[key]);
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default getCityList;
