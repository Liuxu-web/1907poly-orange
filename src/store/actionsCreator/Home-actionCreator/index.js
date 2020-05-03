/*
 * @描述: Home-actionCreator
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:56:38
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-03 20:53:12
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
// 发布与订阅
import pubsub from "pubsub-js";

import {
  GET_CLASS_IFY_HOME,
  GET_EXCLUSIVE_LIST,
  CHANGE_EXCLUSIVE_LIST,
} from "../../actionType/Home-actionType";

// 首页数据 底部导航 , 轮播图 选项卡
function getHomeAction(payload) {
  return {
    type: GET_CLASS_IFY_HOME,
    payload,
  };
}
function getExclusive(payload) {
  return {
    type: GET_EXCLUSIVE_LIST,
    payload,
  };
}
function changeExclusive() {
  return {
    type: CHANGE_EXCLUSIVE_LIST,
  };
}

export default {
  // 首页数据 底部导航 , 轮播图 选项卡
  gethome() {
    return async (dispatch) => {
      const url = `/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(getHomeAction(data));
    };
  },
  // 获取瀑布流数据
  GET_EXCLUSIVE(page = 1) {
    return async (dispatch) => {
      const url = `/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${page}&referer_type=index&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      console.log(data);
      dispatch(getExclusive(data));
      console.log(this.props);
      pubsub.publish("boll");
    };
  },
  // 清空瀑布流数据
  CHANGE_GET_EXCLUSIVE() {
    return (dispatch) => {
      dispatch(changeExclusive());
    };
  },
};
