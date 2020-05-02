/*
 * @描述:
 * @创建者: 张莹
 * @Date: 2020-04-29 21:59:20
 * @修改者: 张莹
 * @LastEditTime: 2020-05-02 20:13:51
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

import React, { Component } from "react";
import { Icon } from "antd-mobile"; //antd design mobile UI库

import "./home.scss";
import "../../assets/iconfont/iconfont.css";
// 发布与订阅
import pubsub from "pubsub-js";
//Swiper 轮播图插件测试
//引入此路径，才不会打包失败
import Swiper from "swiper";
//引入样式，还可以加上自己的样式
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../assets/css/Home-swiper.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          {/* 头部 */}
          <div className="header">
            <div
              onClick={() => {
                this.props.history.push("/city");
              }}
              className="address"
            >
              <i className="iconfont icon-dingwei icon-d"></i>
              <span>全国</span>
            </div>
            <div className="search">
              <Icon type="search" size="md" className="search-icon" />
              <input
                onClick={() => {
                  this.props.history.push("/search");
                }}
                type="text"
                placeholder="搜索热门演出"
              />
            </div>
            <div className="rili">
              <i
                onClick={() => {
                  this.props.history.push("/calendar");
                }}
                className="iconfont icon-rili icon-r"
              ></i>
            </div>
          </div>
          {/* 轮播图 */}
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
          <div className="main">
            <div className="section">
              {/* 分类 */}
              <div className="label-item">
                <ul>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                  <li>
                    <img
                      src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png"
                      alt=""
                    />
                    <span>演唱会</span>
                  </li>
                </ul>
              </div>
              {/* vip card */}
              <div className="card-vip">
                <div className="card-nav">
                  <div className="card-nav-left">
                    <img
                      className="img-v"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                    <span>会员专享折扣</span>
                  </div>
                  <div className="card-nav-right">
                    <span>99元/年</span>
                    <Icon type="right" className="icon-right" />
                  </div>
                </div>
                {/* vip 的轮播图  */}
                <div className="card-main"></div>
              </div>
              {/* 广告 */}
              <div className="adv">
                <img
                  src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png"
                  alt=""
                />
              </div>
            </div>
            {/* 热门演出 */}
            <div className="hot-warp">
              <div className="title">
                <h3>热门演出</h3>{" "}
                <span>
                  全部
                  <Icon type="right" className="icon-right" />
                </span>
              </div>
              <ul>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
                <li>
                  <img
                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"
                    alt=""
                  />
                  <span>2020第七届城市戏剧节 《涂红》-石家庄站</span>
                </li>
              </ul>
            </div>
            {/* 巡回演出 */}
            <div className="tour-warp">
              <div className="title">
                <h3>巡回演出</h3>{" "}
                <span>
                  全部
                  <Icon type="right" className="icon-right" />
                </span>
              </div>
              <div className="tour-warp-block">
                <img
                  src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg"
                  alt=""
                />
                <div className="tour-content">
                  <span>2020.08.13 - 10.03</span>
                  <h5>聚橙制作 | 法语音乐剧《摇滚红与黑》</h5>
                  <span>
                    <span>￥80</span>起
                  </span>
                  <div className="tour-bottom">
                    <span>
                      <span>6</span>城巡演
                    </span>
                    上海|广州|深圳|成都...
                  </div>
                </div>
              </div>
            </div>
            {/* 舞台剧 */}
            <div className="theatre">
              <div className="title">
                <h3>舞台剧</h3> <Icon type="right" className="icon-right" />
              </div>
            </div>
            {/* 为你推荐 */}
            <div className="for-you">
              <div className="title">
                <h3>为你推荐</h3>
              </div>
              <div className="show-for-you"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 发布者
    pubsub.publish("home", "/");
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
