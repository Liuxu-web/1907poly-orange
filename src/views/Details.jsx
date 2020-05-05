/*
 * @描述: 演出详情页面
 * @创建者: 刘旭
 * @Date: 2020-05-04 21:41:39
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-05 17:10:35
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./details.css";
import loading from "../assets/img/loading.gif";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailsCreator from "../store/actionsCreator/Details-actionCreator";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.bool ? (
          <div className={"loading"}>
            <img src={loading} alt="加载中" />
          </div>
        ) : (
          <div className={"details-box"}>
            {/* 顶部模糊层 */}
            <div className={"header-backImg"}>
              <img src={this.props.details.pic} alt="模糊背景" />
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
                  <img src={this.props.details.pic} alt="" />
                </div>
                <div className={"rg"}>
                  <h1>{this.props.details.show_name}</h1>
                  <h2>￥{this.props.details.price_range}</h2>
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
                <div className={"time"}>{this.props.time}</div>
                <div className={"site"}>
                  <h1>{this.props.venue_name}</h1>
                  <h2>{this.props.venue_address}</h2>
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
                  <h1>
                    <p>
                      <span>折扣</span>优惠活动,指定票夹8折
                    </p>
                    <i className={"iconfont icon-shenglvehao"}></i>
                  </h1>
                </li>
                <li>
                  <span>VIP+&nbsp;&nbsp;:</span>
                  <h2>
                    <p>
                      V+会员享<span>国内免邮+双倍积分</span>
                    </p>
                    <i className={"iconfont icon-arrow-ios-forward"}></i>
                  </h2>
                </li>
                <li>
                  <span>入&nbsp;&nbsp;&nbsp;场:</span>
                  <h3>1.2米以上儿童凭票入场，1.2米以下儿童谢绝入场.凭票入场,对号入座</h3>
                </li>
              </ul>
            </div>
            {/* 演出介绍 */}
            <div style={{ maxHeight: "5.2792rem" }} className={"presentation"}>
              <h1>演出介绍</h1>
              <div dangerouslySetInnerHTML={{ __html: this.props.desc }}></div>,
              <div onClick={this.showall.bind(this)} className={"show"}>
                展示全部
              </div>
            </div>
            {/* 温馨提示 */}
            <div className={"warm-title"}>
              <h1>温馨提示</h1>
              <ul>
                <li>配送说明</li>
                <li>订票说明</li>
                <li>确认订单</li>
                <li>购票提醒</li>
              </ul>
            </div>
            {/* 相关推荐 */}
            <div className={"details-type"}>
              <h1>相关推荐</h1>
              {this.props.type.map((v) => (
                <div
                  onClick={this.skipRoutre.bind(this, v.schedular_id)}
                  key={v.schedular_id}
                  className={"type"}
                >
                  <div className={"lf"}>
                    <img src={v.pic} alt={v.intro} />
                  </div>
                  <div className={"rg"}>
                    <h1>{v.show_time_top}</h1>
                    <h2>{v.name}</h2>
                    <h3>{v.venue_name}</h3>
                    <h4>
                      {v.support_desc.map((v2) => (
                        <span key={v2}>{v2}</span>
                      ))}
                    </h4>
                    <h5>
                      ￥{v.min_price} <span>起</span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            {/* 查看更多 */}
            <div className={"btn"}>
              <button>查看更多演出</button>
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
        )}
      </React.Fragment>
    );
  }
  // 导航
  navigation(path) {
    this.props.history.push(path);
  }
  // 跳转路由 函数
  skipRoutre(id) {
    this.props.CHANGE_DETAILS.apply(this, [id]);
    this.setState({
      bool: true,
    });
    document.querySelector(".details-box").scrollIntoView(true); //为ture返回顶部，false为底部
  }
  // 展示全部
  showall() {
    const ele = document.querySelector(".presentation");
    const show = document.querySelector(".show");
    ele.removeAttribute("style");
    show.style.display = "none";
  }

  componentDidMount() {
    document.querySelector(".loading").scrollIntoView(true); //为ture返回顶部，false为底部
    // 获取详情
    this.props.CHANGE_DETAILS.apply(this, [this.props.match.params.id]);
    // 相关推荐
    this.props.CHANGE_TYPE.apply(this);
  }

  componentWillUnmount() {
    this.props.DELETE_DETAILS.apply(this);
  }
}

function mapStateToProps({ Details }) {
  return {
    details: Details.details,
    desc: Details.desc,
    venue_name: Details.venue_name,
    venue_address: Details.venue_address,
    tips: Details.tips,
    time: Details.show_time_data,
    type: Details.type,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DetailsCreator, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
