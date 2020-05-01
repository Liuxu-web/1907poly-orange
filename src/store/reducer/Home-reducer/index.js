/*
 * @描述: 首页reducer
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:43:34
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 01:45:03
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import HomeList from "../../state/Home-state";
import { GET_CLASS_IFY_HOME } from "../../actionType/Home-actionType";
// 图片
import bottomImg1 from "../../../assets/img/bottom/1.png";
import bottomImg2 from "../../../assets/img/bottom/2.png";
import bottomImg3 from "../../../assets/img/bottom/3.png";
import bottomImg4 from "../../../assets/img/bottom/4.png";

const getHomeReducer = function (state = HomeList, { type, payload }) {
  // 深拷贝
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    case GET_CLASS_IFY_HOME: {
      // 准备项目底部导航 NavLink to地址为数组
      const bottomObj = ["/", "/theater", "/ticketFolder", "/my"];
      const bottomImg = [bottomImg1, bottomImg2, bottomImg3, bottomImg4];
      // 循环遍历 聚橙网数据 底部导航 数据
      // 替换聚橙网数据中 底部导航 url 路由地址为 我们的地址
      bottomObj.forEach((v, i) => {
        payload.bottom_list[i].url = v;
      });
      bottomImg.forEach((item, index) => {
        payload.bottom_list[index].pic = item;
      });
      state.bottom_list = payload.bottom_list;
      state.classify_list = payload.classify_list;
      state.slide_list = payload.slide_list;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default getHomeReducer;
