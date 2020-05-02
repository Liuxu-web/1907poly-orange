/*
 * @描述: Search 搜索演出
 * @创建者: 刘旭
 * @Date: 2020-05-02 15:42:28
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 16:50:50
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { SEARCH_DATA, SEARCH_WORD } from "../../actionType/Search-actionType";

// 搜索内容
export function getSearchData(payload) {
  return {
    type: SEARCH_DATA,
    payload,
  };
}
// 热门搜索
export function getSearchWord(payload) {
  return {
    type: SEARCH_WORD,
    payload,
  };
}

export default {
  // 搜索内容
  GET_SEARCH_DATA(text = "摇滚红与") {
    return async (dispatch) => {
      const url = `https://api.juooo.com/Show/Search/getShowList?city_id=&category=&keywords=${text}&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2`;
      const { code, data, msg } = await this.$get(url);
      console.log(data);
      if (code === "200") dispatch(getSearchData(data));
      else console.log(msg);

      console.log(this);
    };
  },
  // 热门搜索
  GET_SEARCH_WORD() {
    return (dispatch) => {
      console.log("222222222");
    };
  },
};
