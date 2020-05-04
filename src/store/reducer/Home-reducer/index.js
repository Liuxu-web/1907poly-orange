/*
 * @描述: 首页reducer
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:43:34
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-04 23:54:27
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import HomeList from "../../state/Home-state";
// 发布与订阅
import pubsub from "pubsub-js";
import {
  GET_CLASS_IFY_HOME,
  GET_EXCLUSIVE_LIST,
  CHANGE_EXCLUSIVE_LIST,
  GET_ALL_LIST,
  GET_HOT_LIST,
  GET_TOUR,
} from "../../actionType/Home-actionType";
// 图片
import bottomImg1 from "../../../assets/img/bottom/1.png";
import bottomImg2 from "../../../assets/img/bottom/2.png";
import bottomImg3 from "../../../assets/img/bottom/3.png";
import bottomImg4 from "../../../assets/img/bottom/4.png";

const getHomeReducer = function (state = HomeList, { type, payload }) {
  // 深拷贝
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    // 获取首页 轮播图 底部导航 等数据
    case GET_CLASS_IFY_HOME: {
      // 准备项目底部导航 NavLink to地址为数组
      const bottomObj = ["/", "/theater", "/ticketFolder", "/my"];
      // 准备 图片 地址
      const bottomImg = [bottomImg1, bottomImg2, bottomImg3, bottomImg4];
      // 遍历替换 路由地址
      bottomObj.forEach((v, i) => {
        payload.bottom_list[i].url = v;
      });
      // 遍历 替换 图片地址
      bottomImg.forEach((item, index) => {
        payload.bottom_list[index].pic = item;
      });
      state.bottom_list = payload.bottom_list;

      state.classify_list = payload.classify_list;
      state.slide_list = payload.slide_list;
      return state;
    }

    // 热门演出
    case GET_HOT_LIST: {
      state.hotLisT = payload;
      return state;
    }
    // 巡回演出
    case GET_TOUR: {
      state.tour = payload;
      return state;
    }

    // 会员折扣轮播图
    case GET_ALL_LIST: {
      state.allList = payload;
      return state;
    }

    // 获取瀑布流数据
    case GET_EXCLUSIVE_LIST: {
      // 遍历 判断奇数偶数下标 添加到两个数组中
      payload.list.forEach((v, i) => {
        if (state.list_lf.length > state.list_rg.length) {
          state.list_rg.push(payload.list[i]);
        } else {
          state.list_lf.push(payload.list[i]);
        }
      });
      state.page = payload.page;

      // 发布者
      pubsub.publish("boll");
      return state;
    }

    // 清空瀑布流数据
    case CHANGE_EXCLUSIVE_LIST: {
      state.list_rg = [];
      state.list_lf = [];
      state.page = 1;
      state.recommend_ad_list = [];
      return state;
    }
    default: {
      return state;
    }
  }
};

export default getHomeReducer;
