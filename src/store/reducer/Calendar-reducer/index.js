/*
 * @描述: Calendar-reducer 演出日历
 * @创建者: 刘旭
 * @Date: 2020-05-01 15:36:41
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 17:36:48
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import { GET_CALENDAR_TAB_LIST, GET_CALENDAR_DAY } from "../../actionType/Calendar-actionType";
import InfoCalendar from "../../state/Calendar-state";

const getCalendar = function (state = InfoCalendar, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    case GET_CALENDAR_TAB_LIST: {
      payload.unshift({ id: 1, name: "全部" });
      state.calendarTabList = payload;
      return state;
    }

    case GET_CALENDAR_DAY: {
      state.calendarDayList = payload;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default getCalendar;
