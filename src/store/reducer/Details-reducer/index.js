/*
 * @描述: Details 演出详情
 * @创建者: 刘旭
 * @Date: 2020-05-05 14:21:08
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-05 16:45:00
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import InfoDetails from "../../state/Details-state";
import { GET_DETAILS, GET_DESC, GET_TYPE, DEL } from "../../actionType/Details.actionType";

const changeDetails = function (state = InfoDetails, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    // 演出详情
    case GET_DETAILS: {
      state.details = payload;
      // 地址
      state.venue_name = payload.venue.venue_name;
      state.venue_address = payload.venue.venue_address;
      // 入场提示
      state.tips = payload.tips;
      // 演出时间
      state.show_time_data = payload.show_time_data.show_time_start_display;
      return state;
    }
    // html 字符串
    case GET_DESC: {
      state.desc = payload;
      return state;
    }
    // 相关推荐
    case GET_TYPE: {
      state.type = payload;
      return state;
    }
    // 清空数据
    case DEL: {
      state.details = [];
      // 返回的html 字符串
      state.desc = "";
      // 地址
      state.venue_name = "";
      state.venue_address = "";
      // 入场提示
      state.tips = "";
      // 演出时间
      state.show_time_data = "";
      // 相关推荐
      state.type = [];
      return state;
    }
    default: {
      return state;
    }
  }
};

export default changeDetails;
