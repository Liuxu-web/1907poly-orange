/*
 * @描述: Search 搜索演出
 * @创建者: 刘旭
 * @Date: 2020-05-02 15:37:36
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 20:21:21
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import InfoSearch from "../../state/Search-state";
import { SEARCH_DATA, SEARCH_WORD, CHANGE_DATA } from "../../actionType/Search-actionType";

const chengeSearchList = function (state = InfoSearch, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    // 搜索内容
    case SEARCH_DATA: {
      // 遍历添加到两个数组中, 完成不等高渲染
      state.searchDataLf = [];
      state.searchDataRg = [];
      payload.list.forEach((item, index) => {
        if ((index + 1) % 2 === 0) state.searchDataRg.push(payload.list[index]);
        else state.searchDataLf.push(payload.list[index]);
      });

      return state;
    }
    // 热门搜索
    case SEARCH_WORD: {
      state.searchWord = payload;
      return state;
    }

    // 清空搜索内容
    case CHANGE_DATA: {
      state.searchDataLf = [];
      state.searchDataRg = [];
      return state;
    }
    default: {
      return state;
    }
  }
};

export default chengeSearchList;
