/*
 * @描述:
 * @创建者: 刘旭
 * @Date: 2020-04-30 19:42:19
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-30 20:48:11
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import { HOT_CITY_LIST, CITY_DATA } from "../../actionType/City-actionType";
// 城市列表 action 工厂函数
function getCity(payload) {
  return {
    type: HOT_CITY_LIST,
    payload,
  };
}
function getCityData(payload) {
  return {
    type: CITY_DATA,
    payload,
  };
}

export default {
  // 获取城市列表
  CHANGE_CITY_LIST() {
    return async (dispatch) => {
      const url = `https://api.juooo.com/city/city/getHotCityList?version=6.1.1&referer=2`;
      const { data } = await this.$get(url);
      dispatch(getCity(data.hot_city_List));
    };
  },
  // 获取字母排序城市列表
  CHANGE_CITY_DATA() {
    return async (dispatch) => {
      const url = `https://api.juooo.com/city/city/getSortedCityList?version=6.1.1&referer=2`;
      const { data } = await this.$get(url);
      dispatch(getCityData(data));
      console.log(this.props);
    };
  },
};
