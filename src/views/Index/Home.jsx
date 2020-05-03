/*
 * @描述:
 * @创建者: 张莹
 * @Date: 2020-04-29 21:59:20
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-03 20:56:41
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";

// 发布与订阅
import pubsub from "pubsub-js";
// 样式
import "./Home.css";
//引入此路径，才不会打包失败
import Swiper from "swiper";
//引入样式，还可以加上自己的样式
import "../../../node_modules/swiper/css/swiper.min.css";
import HomeCreator from "../../store/actionsCreator/Home-actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
          <div className={"home-banner-t"}>
            <div className={"home-banner-t-swiper "}>
              <div className={"swiper-wrapper"}>
                {this.props.slide_list.map((v) => (
                  <div key={v.title} className={"swiper-slide"}>
                    <img src={v.image_url} alt={v.title} />
                  </div>
                ))}
              </div>
              {/* <!-- 如果需要分页器 --> */}
              <div className={"swiper-pagination"}></div>
            </div>
          </div>
          {/* 选项卡 */}
          <div className={"home-tab"}>
            {this.props.classify_list.map((v) => (
              <div key={v.id}>
                <img src={v.pic} alt={v.name} />
                <span>{v.name}</span>
              </div>
            ))}
          </div>
          {/* 轮播图2 */}
          <div className={"home-banner-w"}>
            <h1>
              <span>会员专享折扣</span>
              <span>
                99元/年 <i className={"iconfont icon-arrow-ios-forward"}></i>
              </span>
            </h1>
          </div>
          {/* 广告 */}
          <div className={"home-adv"}>
            <img
              src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png"
              alt=""
            />
          </div>
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
                {this.props.list_lf.map((v) => (
                  <li key={v.schedular_id}>
                    <img src={v.pic} alt={v.intro} />
                    <h1>
                      <span>主办</span>
                      {v.name}
                    </h1>
                    <h2>{v.end_show_time}</h2>
                    <h3>
                      ￥{v.min_price}
                      <span>起</span>
                    </h3>
                    <h4>
                      {v.support_desc.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </h4>
                  </li>
                ))}
              </ul>
              <ul>
                {this.props.list_rg.map((v2) => (
                  <li key={v2.schedular_id}>
                    <img src={v2.pic} alt={v2.intro} />
                    <h1>
                      <span>主办</span>
                      {v2.name}
                    </h1>
                    <h2>{v2.end_show_time}</h2>
                    <h3>
                      ￥{v2.min_price}
                      <span>起</span>
                    </h3>
                    <h4>
                      {v2.support_desc.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 底部填充 */}
          <div className={"home-footer"}>没有更多了</div>
        </div>
      </React.Fragment>
    );
  }
  // 跳转路由 函数
  skipRoutre(path) {
    this.props.history.push(path);
  }
  // 轮播图实例
  swiper() {
    setTimeout(() => {
      new Swiper(".home-banner-t-swiper", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        simulateTouch: false, //禁止鼠标模拟
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      });
    }, 1000);
  }

  componentDidMount() {
    this.props.GET_EXCLUSIVE.apply(this, [this.props.page]);
    // 发布者
    pubsub.publish("home", "/");
    // 顶部轮播图
    this.swiper();
    // 订阅者 执行下一页测试
    pubsub.subscribe("page", (msgName, params) => {
      this.props.GET_EXCLUSIVE.apply(this, [params]);
    });
  }
  // 清除 瀑布流数据
  componentWillUnmount() {
    this.props.CHANGE_GET_EXCLUSIVE.apply(this);
  }
}
// 映射 仓库state  到 当前组件的props
function mapStateToProps({ homeList }) {
  return {
    classify_list: homeList.classify_list,
    slide_list: homeList.slide_list,
    list_lf: homeList.list_lf,
    list_rg: homeList.list_rg,
    page: homeList.page,
    recommend_ad_list: homeList.recommend_ad_list,
  };
}
// 映射 dispatch 到 当前组件的props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
