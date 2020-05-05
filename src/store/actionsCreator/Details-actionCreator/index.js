/*
 * @描述: Details 演出详情
 * @创建者: 刘旭
 * @Date: 2020-05-05 14:25:46
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-05 17:10:46
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { GET_DETAILS, GET_DESC, GET_TYPE, DEL } from "../../actionType/Details.actionType";

function getDetails(payload) {
  return {
    type: GET_DETAILS,
    payload,
  };
}
// html 字符串
function getDesc(payload) {
  return {
    type: GET_DESC,
    payload,
  };
}
// 相关推荐
function getType(payload) {
  return {
    type: GET_TYPE,
    payload,
  };
}
// 清空数据
function del() {
  return {
    type: DEL,
  };
}

export default {
  // 获取演出详情
  CHANGE_DETAILS(id) {
    return async (dispatch) => {
      const url = `/Schedule/Schedule/getScheduleInfo?schedular_id=${id}&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(getDetails(data.static_data));
      dispatch(getDesc(data.static_data.show_desc.desc));
      // 加载中动画
      this.setState({
        bool: false,
      });
    };
  },
  // 相关推荐
  CHANGE_TYPE() {
    return async (dispatch) => {
      const url = `/Show/Search/getShowList?category=1&city_id=1&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(getType(data.list));
      console.log(this.props);
    };
  },
  // 清空数据
  DELETE_DETAILS() {
    return (dispatch) => {
      dispatch(del());
    };
  },
};
