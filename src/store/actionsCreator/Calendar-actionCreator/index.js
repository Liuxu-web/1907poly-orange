/*
 * @描述: Calendar-actionCreator 演出日历
 * @创建者: 刘旭
 * @Date: 2020-05-01 16:19:49
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 19:36:31
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import { GET_CALENDAR_TAB_LIST, GET_CALENDAR_DAY } from "../../actionType/Calendar-actionType";

function getCalendarTab(payload) {
  return {
    type: GET_CALENDAR_TAB_LIST,
    payload,
  };
}
function getCalendarDay(payload) {
  return {
    type: GET_CALENDAR_DAY,
    payload,
  };
}

export default {
  // 获取 演出列表
  CHANGE_CALENDAR_TAB() {
    return async (dispatch) => {
      const url = `https://api.juooo.com/Show/Index/getShowCategoryList?version=6.1.1&referer=2`;
      const { data } = await this.$get(url);
      dispatch(getCalendarTab(data));
    };
  },
  // 获取 当前月天数
  CHANGE_CALENDAR_DAY(month = 5) {
    return async (dispatch) => {
      const url = `https://m.juooo.com/Search/getCalendar?year=2020&month=${month}&category=0&version=6.1.1&referer=2`;
      const { data } = await this.$get(url);
      dispatch(getCalendarDay(data.calendar));
      //   console.log(this.props);
    };
  },
};
