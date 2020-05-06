/*
 * @描述: Neocaine 购买新卡
 * @创建者: 刘旭
 * @Date: 2020-05-06 16:20:57
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 16:46:02
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { GET_N_PIC, GET_N_VIP, GET_N_LIST } from "../../actionType/Neocaine-actionType";

// 图片
function changeNPic(payload) {
  return {
    type: GET_N_PIC,
    payload,
  };
}
// 卡
function changeNList(payload) {
  return {
    type: GET_N_LIST,
    payload,
  };
}

// vip
function changeNLVip(payload) {
  return {
    type: GET_N_VIP,
    payload,
  };
}

export default {
  // 图片
  CHANGE_PIC() {
    return async (dispatch) => {
      const url = `/Card/index/hotBanner?version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(changeNPic(data[0]));
      console.log(this.props);
    };
  },
  // 卡
  CHANGE_LIST() {
    return async (dispatch) => {
      const url = `/Card/index/getCardGroupList?version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(changeNList(data));
      console.log(this.props);
    };
  },
  // vip
  CHANGE_VIP() {
    return async (dispatch) => {
      const url = `/vip/index/getVipRule?version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(changeNLVip(data.vip_rule_data));
      console.log(this.props);
    };
  },
};
