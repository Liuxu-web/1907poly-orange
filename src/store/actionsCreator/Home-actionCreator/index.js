/*
 * @描述: Home-actionCreator
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:56:38
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-04 23:53:57
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import {
  GET_CLASS_IFY_HOME,
  GET_EXCLUSIVE_LIST,
  CHANGE_EXCLUSIVE_LIST,
  GET_ALL_LIST,
  GET_HOT_LIST,
  GET_TOUR,
} from "../../actionType/Home-actionType";

// 首页数据 底部导航 , 轮播图 选项卡
function getHomeAction(payload) {
  return {
    type: GET_CLASS_IFY_HOME,
    payload,
  };
}
// 热门演出
function getHotList(payload) {
  return {
    type: GET_HOT_LIST,
    payload,
  };
}
// 巡回演出
function getTour(payload) {
  return {
    type: GET_TOUR,
    payload,
  };
}
// 会员折扣轮播图
function getAllLsit(payload) {
  return {
    type: GET_ALL_LIST,
    payload,
  };
}

// 瀑布流数据
function getExclusive(payload) {
  return {
    type: GET_EXCLUSIVE_LIST,
    payload,
  };
}
// 清空瀑布流数据
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
  // 获取会员折扣轮播图信息
  CHANGE_ALL_LIST() {
    return async (dispath) => {
      const url = `/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispath(getAllLsit(data.allList));
    };
  },
  // 热门演出
  CHANGE_HOT_LIST() {
    return async (dispatch) => {
      const url = `/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(getHotList(data.hots_show_list));
    };
  },
  // 获取瀑布流数据
  CHANGE_EXCLUSIVE(page = 1) {
    return async (dispatch) => {
      const url = `/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${page}&referer_type=index&version=6.1.1&referer=2`;
      await this.$get("/api" + url).then(({ data }) => {
        dispatch(getExclusive(data));
      });
    };
  },
  // 巡回演出
  CHANGE_TOUR() {
    return async (dispatch) => {
      const url = `/show/tour/getList?version=6.1.1&referer=2`;
      const { data } = await this.$get("/api" + url);
      dispatch(getTour(data.list));
      console.log(this.props);
    };
  },
  // 清空瀑布流数据
  CHANGE_GET_EXCLUSIVE() {
    return (dispatch) => {
      dispatch(changeExclusive());
    };
  },
};
