/*
 * @描述: Home-actionCreator
 * @创建者: 刘旭
 * @Date: 2020-04-29 18:56:38
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 19:53:23
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { GET_CLASS_IFY_HOME } from "../../actionType/Home-actionType";

// action 工厂函数
export function getHomeAction(payload) {
  return {
    type: GET_CLASS_IFY_HOME,
    payload,
  };
}

export default {
  /* 
    获取首页数据 ( 测试 不用代理也可以获得数据 )
    详细数据在 对应的state
  */
  gethome() {
    return async (dispatch) => {
      const { data } = await this.$get(
        "https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2"
      );

      dispatch(getHomeAction(data));
      console.log(this.props);
    };
  },
};
