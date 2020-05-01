import Login from "../views/Login";
import Error from "../views/Error";
import Index from "../views/Index";
import City_component from "../components/Home/City_component";

import Home from "../views/Index/Home";
import Theater from "../views/Index/Theater/Theater";
import TicketFolder from "../views/Index/TicketFolder";
import My from "../views/Index/My";

/*
 * @描述: 路由集中式管理 数据
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:45:14
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-30 19:13:36
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
// 导出路由配置信息
export const routeList = (() => {
  return [
    {
      // 城市定位
      path: "/city",
      component: City_component,
    },
    {
      // 登录页面
      path: "/login",
      component: Login,
    },
    {
      // 404 页面
      path: "/error",
      component: Error,
    },
    {
      // 首页
      path: "/",
      component: Index,
      childrens: [
        {
          // 首页
          path: "/",
          exact: true,
          component: Home,
        },
        {
          // 剧院
          path: "/theater",
          component: Theater,
        },
        {
          // 票夹
          path: "/ticketFolder",
          component: TicketFolder,
        },
        {
          // 我的
          path: "/my",
          component: My,
        },
      ],
    },
  ];
})();
