/*
 * @描述: 首页 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:28:14
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 21:55:49
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
//Swiper 轮播图插件测试
//引入此路径，才不会打包失败
import Swiper from "swiper";
//引入样式，还可以加上自己的样式
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../assets/css/Home-swiper.css";
// import { NavBar, Icon } from "antd-mobile";  antd design mobile UI库

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="swiper-container banner">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 开启自动轮播
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
  }
}

export default Home;
