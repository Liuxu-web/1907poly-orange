/*
 * @描述: Neocaine 购买新卡
 * @创建者: 刘旭
 * @Date: 2020-05-06 16:16:41
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 17:36:08
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import InfoNeocaine from "../../state/Neocaine-state";
import { GET_N_PIC, GET_N_LIST, GET_N_VIP } from "../../actionType/Neocaine-actionType";

const Neocaine = function (state = InfoNeocaine, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    // 图片
    case GET_N_PIC: {
      state.NeocaineList.pc_image = payload;
      return state;
    }
    // 卡
    case GET_N_LIST: {
      // 品类次卡
      state.NeocaineList.cate_card = payload.cate_card;
      // 城市次卡
      state.NeocaineList.once_card = payload.once_card;
      // 储蓄卡
      state.NeocaineList.store_card = payload.store_card;
      return state;
    }
    // vip
    case GET_N_VIP: {
      const iconArr = [
        "icon-prior-buy",
        "icon-ziyuan",
        "icon-zhekou",
        "icon-menpiao1",
        "icon-che-tianchong",
        "icon-jifen",
        "icon-goupiao",
        "icon-mingxing",
        "icon-shu",
        "icon-birthday-reminder",
        "icon-shujumofang",
      ];

      for (let key in payload.equity_list) {
        payload.equity_list[key].benefits_icon = iconArr[key];
      }
      state.NeocaineList.equity_list = payload.equity_list;
      state.NeocaineList.service_rule = payload.service_rule;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default Neocaine;
