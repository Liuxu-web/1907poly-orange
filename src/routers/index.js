// 没有 底部导航
import Login from "../views/Login";
import Error from "../views/Error";
import Index from "../views/Index";
import City_component from "../components/Home/City_component/City_component";
import Calendar_component from "../components/Home/Calendar_component/Calendar_component";
import Search from "../views/Search";
import Details from "../views/Details";
import Amap from "../views/Amap";
import Show from "../views/Show";
import Neocaine from "../views/Neocaine";
import Plus from "../views/Plus";
import Vip from "../views/Vip";
import GroupBooking from "../views/GroupBooking";
import IntegralStore from "../views/IntegralStore";
// 有底部导航
import Home from "../views/Index/Home";
import Theater from "../views/Index/Theater/Theater";
import TicketFolder from "../views/Index/TicketFolder";
// 我的部分
import My from "../views/Index/My";

// 我的-->意见反馈
import Feedback from "../views/my/Feedback";
// 收货地址
import MyAddress from "../views/my/MyAddress";
// 实名购票人
import MyRealName from "../views/my/MyRealName";
// 注册
import Register from "../views/my/Register";
//忘记密码
import ResetPassword from "../views/my/ResetPassword";

/*
 * @描述: 路由集中式管理 数据
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:45:14
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 13:51:50
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
// 导出路由配置信息
export const routeList = (() => {
  return [
    {
      // 积分兑换
      path: "/integralStore",
      component: IntegralStore,
    },
    {
      // 拼团
      path: "/groupBooking",
      component: GroupBooking,
    },
    {
      // VIP + 会员
      path: "/vip",
      component: Vip,
    },
    {
      // 橙plus卡
      path: "/plus",
      component: Plus,
    },
    {
      // 购买新卡
      path: "/neocaine",
      component: Neocaine,
    },
    {
      // 演出
      path: "/show/:id/:url",
      component: Show,
    },
    {
      // 地图页面
      path: "/amap",
      component: Amap,
    },
    {
      // 演出详情页面
      path: "/details/:id.html",
      component: Details,
    },
    {
      // 搜索演出页面
      path: "/search",
      component: Search,
    },
    {
      // 演出日历
      path: "/calendar",
      component: Calendar_component,
    },
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
      //我的-->意见反馈
      path: "/feedback/index",
      verify: true,
      component: Feedback,
    },
    {
      //我的-->收货地址
      path: "/my/address",
      verify: true,
      component: MyAddress,
    },
    {
      //我的-->实名购票人
      path: "/myrealname",
      verify: true,
      component: MyRealName,
    },
    {
      //我的-->注册
      path: "/register",
      component: Register,
    },
    {
      //我的-->忘记密码
      path: "/resetpassword",
      component: ResetPassword,
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
