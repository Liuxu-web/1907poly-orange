/*
 * @描述: Search 搜索演出
 * @创建者: 刘旭
 * @Date: 2020-05-02 15:37:36
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 17:33:13
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import InfoSearch from "../../state/Search-state";
import { SEARCH_DATA, SEARCH_WORD } from "../../actionType/Search-actionType";

const chengeSearchList = function (state = InfoSearch, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    // 搜索内容
    case SEARCH_DATA: {
      payload.list.forEach((item, index) => {
        if ((index + 1) % 2 === 0) state.searchDataRg.push(payload.list[index]);
        else state.searchDataLf.push(payload.list[index]);
      });

      return state;
    }
    // 热门搜索
    case SEARCH_WORD: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default chengeSearchList;
