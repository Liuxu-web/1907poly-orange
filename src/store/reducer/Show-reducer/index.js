/*
 * @描述: Show 演出列表
 * @创建者: 刘旭
 * @Date: 2020-05-06 12:28:18
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 14:06:32
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import InfoShowList from "../../state/Show-state";
import { GET_SHOW_LIST, GET_SHOW_TYPE } from "../../actionType/Show-actionType";

const show = function (state = InfoShowList, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    case GET_SHOW_LIST: {
      state.ShowList.list = payload.list;
      state.ShowList.page = payload.page;
      return state;
    }
    case GET_SHOW_TYPE: {
      state.showType = payload;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default show;
