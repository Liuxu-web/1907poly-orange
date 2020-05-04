/*
 * @描述: 演出详情页面
 * @创建者: 刘旭
 * @Date: 2020-05-04 21:41:39
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-04 23:32:09
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./details.css";
class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"details-box"}>
          {/* 顶部模糊层 */}
          <div className={"header-backImg"}>
            <img
              src="https://image.juooo.com/group1/M00/04/3D/rAoKNV54aAaAFt9MAABSgrHvRdw160.jpg"
              alt="模糊背景"
            />
          </div>
          {/* 顶部 */}
          <div className={"details-header"}>
            {/* 导航 */}
            <div onClick={this.navigation.bind(this, "/")} className={"header"}>
              <button className={"iconfont icon-arrow-ios-back"}></button>
              <span>演出详情</span>
              <div>
                <button className={"iconfont icon-fenxiang1"}></button>
                <button
                  onClick={this.navigation.bind(this, "/")}
                  className={"iconfont icon-shouye1"}
                ></button>
              </div>
            </div>
            {/* 演出信息 */}
            <div className={"header-content"}>
              <div className={"lf"}>
                <img
                  src="https://image.juooo.com/group1/M00/04/3D/rAoKNV54aAaAFt9MAABSgrHvRdw160.jpg"
                  alt=""
                />
              </div>
              <div className={"rg"}>
                <h1>【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站</h1>
                <h2>￥280-1080</h2>
              </div>
            </div>
          </div>
          {/* 购票信息1 */}
          <div className={"buy"}>
            <div className={"ticket"}>
              <span>
                <i className={"iconfont icon-duigou"}></i>
                电子票
              </span>
            </div>
            <div className={"time-site"}>
              <div className={"time"}>2020年5月4日23:04:13</div>
              <div className={"site"}>
                <h1>上海 | 上海环球港4楼</h1>
                <h2>环球港L4演艺空间</h2>
                <span>
                  <i className={"iconfont icon-dizhi"}></i>
                </span>
              </div>
              <div className={"banner"}>
                <mark>橙PLUS卡</mark>
                <p>开通送￥200 最高省108元</p>
                <span>
                  立即开卡 <i className={"iconfont icon-arrow-ios-forward"}></i>
                </span>
              </div>
            </div>
          </div>
          {/* 购票提示 */}
          <div className={"butTitle"}>
            <ul>
              <li>
                <span>优&nbsp;&nbsp;&nbsp;惠:</span>
              </li>
              <li>
                <span>VIP+&nbsp;&nbsp;:</span>
              </li>
              <li>
                <span>入&nbsp;&nbsp;&nbsp;场:</span>
              </li>
            </ul>
          </div>
          {/* 底部购买 */}
          <div className={"buyFooter"}>
            <div>
              <i className={"iconfont icon-kefu"}></i>
              <span>客服</span>
            </div>
            <button>选座购买</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  // 导航
  navigation(path) {
    this.props.history.push(path);
  }
}

export default Details;
