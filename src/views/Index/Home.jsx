/*
 * @描述:
 * @创建者: 张莹
 * @Date: 2020-04-29 21:59:20
 * @修改者: 张莹
 * @LastEditTime: 2020-05-03 16:27:30
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
// 样式
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"home-box"}>
          {/* 头部 */}
          <div className={"home-header"}>
            <button onClick={this.skipRoutre.bind(this, "/city")}>
              <i className={"iconfont icon-dingwei"}></i> 全国
            </button>
            <p onClick={this.skipRoutre.bind(this, "/search")}>
              <i className={"iconfont icon-sousuo1"}></i> 搜索热门演出
            </p>
            <i onClick={this.skipRoutre.bind(this, "/calendar")} className={"iconfont icon-rili"}></i>
          </div>
          {/* 顶部轮播图 */}
          <div className={"home-banner-t"}></div>
          {/* 选项卡 */}
          <div className={"home-tab"}>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
            <div>
              <img src="../../assets/img/v.png" alt="" />
              <span>演唱会</span>
            </div>
          </div>
          {/* 轮播图2 */}
          <div className={"home-banner-w"}>
            <h1>
              <span>会员专享折扣</span>
              <span>
                99元/年 <i className={"iconfont icon-arrow-ios-forward"}></i>
              </span>
            </h1>
            <div className={"banner-w"}></div>
          </div>
          {/* 广告 */}
          <div className={"home-adv"}></div>
          {/* 热门演出 */}
          <div className={"home-hot"}>
            <h1>
              热门演出
              <span>
                全部<i className={"iconfont icon-arrow-ios-forward"}></i>
              </span>
            </h1>
            <div className={"home-slide"}></div>
          </div>
          {/* 巡回演出 */}
          <div className={"home-hot"}>
            <h1>
              巡回演出
              <span>
                全部<i className={"iconfont icon-arrow-ios-forward"}></i>
              </span>
            </h1>
            <div className={"home-tour"}>1</div>
          </div>
          {/* 为你推荐 */}
          <div className={"home-hot"}>
            <h1>为你推荐</h1>
            <div className={"home-list"}>
              <ul>
                <li>1</li>
              </ul>
              <ul>
                <li>1</li>
              </ul>
            </div>
          </div>
          {/* 底部填充 */}
          <div className={"home-footer"}>没有更多了</div>
        </div>
      </React.Fragment>
    );
  }

  skipRoutre(path) {
    this.props.history.push(path);
  }

  componentDidMount() {
    // 发布者
    pubsub.publish("home", "/");
    console.log(this.props);
  }
}

export default Home;
