/*
 * @描述: Show 演出列表
 * @创建者: 刘旭
 * @Date: 2020-05-06 12:32:51
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 14:18:34
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { GET_SHOW_LIST, GET_SHOW_TYPE } from "../../actionType/Show-actionType";

function changeShowList(payload) {
  return {
    type: GET_SHOW_LIST,
    payload,
  };
}

function changeShowType(payload) {
  return {
    type: GET_SHOW_TYPE,
    payload,
  };
}

export default {
  // 类型
  CHANGE_SHOW_TYPE() {
    return async (dispatch) => {
      const url = `/Show/Index/getShowCategoryList?version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(changeShowType(data));
    };
  },
  // 列表
  CHANGE_SHOW_LIST(type = 0, page = 1) {
    return async (dispatch) => {
      this.setState({
        bool: true,
      });
      const url = `/Show/Search/getShowList?city_id=0&category=${type}&keywords=&venue_id=&start_time=&page=${page}&referer_type=&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(changeShowList(data));
      console.log(this.props);
      this.setState({
        bool: false,
      });
    };
  },
};
