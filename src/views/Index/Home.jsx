/*
 * @描述:
 * @创建者: 刘旭
 * @Date: 2020-04-29 21:59:20
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 13:58:14
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
import LazyLoad from "../../components/LazyLoad.jsx";
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
  constructor(props) {
    super(props);
    this.state = {
      city: sessionStorage.city ? sessionStorage.city : "定位中",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={"home-box"}>
          {/* 头部 */}
          <div className={"home-header"}>
            <button
              onClick={() => {
                this.props.history.push("/city");
              }}
            >
              <i className={"iconfont icon-dingwei"}></i>
              {this.state.city}
            </button>
            <p
              onClick={() => {
                this.props.history.push("/search");
              }}
            >
              <i className={"iconfont icon-sousuo1"}></i> 搜索热门演出
            </p>
            <i
              onClick={() => {
                this.props.history.push("/calendar");
              }}
              className={"iconfont icon-rili"}
            ></i>
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
              <div
                onClick={() => {
                  this.props.history.push(`/show/${v.category_id}/${v.id}`);
                }}
                key={v.id}
              >
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
            {/* 轮播图 */}
            <div className={"banner"}>
              <div className={"swiper-container banner-w-box "}>
                <div className={"swiper-wrapper"}>
                  {this.props.allList.map((v) => (
                    <div
                      onClick={this.skipRoutre.bind(this, "/details/", v.schedular_id)}
                      key={v.schedular_id}
                      className={"swiper-slide"}
                    >
                      <div className={"banner-con"}>
                        <div className={"lf"}>
                          <img src={v.pic} alt={v.city_name} />
                        </div>
                        <div className={"rg"}>
                          <h1>{v.schedular_name}</h1>
                          <h2>
                            <span>
                              <i>{v.min_discount}</i>折起
                            </span>
                            <button>立即抢购</button>
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* 广告 */}
          <div className={"home-adv"}>
            <img
              src='https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png'
              alt=''
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
            <div className={"home-slide"}>
              <ul>
                {this.props.hotLisT.map((v) => (
                  <li
                    onClick={this.skipRoutre.bind(
                      this,
                      "/details/",
                      v.schedular_url.substring(v.schedular_url.lastIndexOf("/") + 1)
                    )}
                    key={v.show_name}
                  >
                    <img src={v.pic} alt='' />
                    <h1>{v.show_name}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 巡回演出 */}
          <div className={"home-hot"}>
            <h1>
              巡回演出
              <span>
                全部<i className={"iconfont icon-arrow-ios-forward"}></i>
              </span>
            </h1>
            <div className={"home-tour-box"}>
              {this.props.tour.map((v) => (
                <div key={v.id} className={"home-tour"}>
                  <div className={"lf"}>
                    <img src={v.mobile_col_img} alt='' />
                  </div>
                  <div className='rg'>
                    <h1>2020年5月4日</h1>
                    <h2>{v.name}</h2>
                    <h3>
                      ￥{v.min_price} <span>起</span>
                    </h3>
                    <h4>
                      <i>{v.citys.length}</i>
                      <span>城巡演</span>
                      {v.citys.map((v2) => (
                        <span key={v2.id}>{v2.name} | </span>
                      ))}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 为你推荐 */}
          <div className={"home-hot"}>
            <h1>为你推荐</h1>
            <div className={"home-list"}>
              <ul>
                {this.props.list_lf.map((v) => (
                  <li
                    onClick={this.skipRoutre.bind(this, "/details/", v.schedular_id)}
                    key={v.schedular_id + v.show_id}
                  >
                    <LazyLoad
                      state={{
                        src: v.pic,
                        alt: v.intro,
                        BoxClassName: "lazyload-box", // 这是容器的类名
                        ImgClassName: "lazyload-img", // 这是img的类名
                      }}
                    ></LazyLoad>

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
                  <li
                    onClick={this.skipRoutre.bind(this, "/details/", v2.schedular_id)}
                    key={v2.schedular_id + v2.show_id}
                  >
                    <LazyLoad
                      state={{
                        src: v2.pic,
                        alt: v2.intro,
                        BoxClassName: "lazyload-box", // 这是容器的类名
                        ImgClassName: "lazyload-img", // 这是img的类名
                      }}
                    ></LazyLoad>
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
          {/* 开通会员广告 */}
          <div className={"home-adlet"}>
            <img
              src={"https://image.juooo.com/group1/M00/03/94/rAoKmV58jOmAAI84AAAp3i6IEAQ605.png"}
              alt='开通会员'
            />
          </div>
          {/* 底部填充 */}
          <div className={"home-footer"}>没有更多了</div>
        </div>
      </React.Fragment>
    );
  }
  // 跳转路由 函数
  skipRoutre(path, id) {
    this.props.history.push(`${path}${id}.html`);
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

    setTimeout(() => {
      new Swiper(".banner-w-box", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        simulateTouch: false, //禁止鼠标模拟
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      });
    }, 1500);
  }

  // 组件渲染结束执行钩子
  componentDidMount() {
    // document.querySelector(".home-box").scrollIntoView(true); //为ture返回顶部，false为底部
    // 获取巡回演出
    this.props.CHANGE_TOUR.apply(this);
    // 获取热门演出列表
    this.props.CHANGE_HOT_LIST.apply(this);
    // 获取会员折扣轮播图信息
    this.props.CHANGE_ALL_LIST.apply(this);
    // 获取瀑布流数据
    this.props.CHANGE_EXCLUSIVE.apply(this, [this.props.page]);
    // 发布者
    pubsub.publish("home", "/");
    // 顶部轮播图
    this.swiper();
    // 订阅者 执行下一页测试
    pubsub.subscribe("page", (msgName, params) => {
      this.props.CHANGE_EXCLUSIVE.apply(this, [params]);
    });
    // 定位当前城市
    const _this = this;
    if (!sessionStorage.city) {
      // eslint-disable-next-line no-undef
      AMap.plugin("AMap.Geolocation", function () {
        // eslint-disable-next-line no-undef
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // eslint-disable-next-line no-undef
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB",
        });

        geolocation.getCurrentPosition();
        // eslint-disable-next-line no-undef
        AMap.event.addListener(geolocation, "complete", onComplete);
        // eslint-disable-next-line no-undef
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete({ addressComponent }) {
          // data是具体的定位信息
          _this.setState({
            city: addressComponent.city,
          });
          sessionStorage.city = addressComponent.city;
        }

        function onError(data) {
          // 定位出错
        }
      });
    }
  }
  // 清除 瀑布流数据
  componentWillUnmount() {
    this.props.CHANGE_GET_EXCLUSIVE.apply(this);
    this.setState = () => null;
  }
}
// 映射 仓库state  到 当前组件的props
function mapStateToProps({ homeList }) {
  return {
    // 轮播图 与 类别选择
    classify_list: homeList.classify_list,
    slide_list: homeList.slide_list,
    // 瀑布流
    list_lf: homeList.list_lf,
    list_rg: homeList.list_rg,
    page: homeList.page,
    // 会员折扣轮播图
    allList: homeList.allList,
    // 热门演出
    hotLisT: homeList.hotLisT,
    // 巡回演出
    tour: homeList.tour,
  };
}
// 映射 dispatch 到 当前组件的props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
