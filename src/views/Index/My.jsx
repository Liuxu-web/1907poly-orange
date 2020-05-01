/*
 * @描述: 我的 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:00:39
 * @修改者: 徐华
 * @LastEditTime: 2020-04-27 22:01:0
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑2
 */
import React, { Component } from "react";

// 引入mine.css,我的页面样式
import "../../components/my/mine.css";
export default class My extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {/* 我的页面 -徐华*/}
        <div id="app">
          <header className="header">
            <div className="header_icon fl">
              <i className="icon"></i>
            </div>
            <div className="header_main">
              <div className="header_main_head">
                <div className="user_logo">
                  <img
                    src={"https://m.juooo.com/static/img/logo-user.8413cbf.png"}
                    alt=""
                  ></img>
                </div>
                <div className="login_reg">
                  <p className="login">登录/注册</p>
                  <p className="click_login">
                    请点击登录<i>&gt;</i>
                  </p>
                </div>
              </div>
              <div className="header_main_vip">
                <p>普通会员</p>
              </div>
              <div className="header_main_cnt">
                <div className="balance">
                  <p>0</p>
                  <p>账户余额</p>
                </div>
                <div className="separator"></div>
                <div className="integral">
                  <p>0</p>
                  <p>积分</p>
                </div>
                <div className="separator"></div>
                <div className="coupon">
                  <p>0</p>
                  <p>优惠劵</p>
                </div>
                <div className="separator"></div>
                <div className="openvip">
                  <p>立即开通</p>
                  <p>橙PLUS卡</p>
                </div>
              </div>
            </div>
          </header>
          <a href="" className="membership">
            <img
              src={"https://m.juooo.com/static/img/ad.411f5e6.png"}
              alt=""
            ></img>
          </a>
          <div className="mine_setting">
            <ul className="mine_setting_list">
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">我的订单</p>
              </li>
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">我的票夹</p>
              </li>
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">我的卡包</p>
              </li>
            </ul>
            <ul className="mine_setting_list">
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">实名购票人</p>
              </li>
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">收货地址</p>
              </li>
              <li
                className="mine_setting_list_items"
                onClick={() => {
                  this.props.history.push("/feedback/index");
                }}
              >
                <i></i>
                <p className="mine_setting_list_items_name">意见反馈</p>
              </li>
              <li className="mine_setting_list_items">
                <i></i>
                <p className="mine_setting_list_items_name">客服帮助</p>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    console.log(this.props);
  }
}
