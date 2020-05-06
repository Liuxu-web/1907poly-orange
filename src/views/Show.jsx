/*
 * @描述: 演出列表
 * @创建者: 刘旭
 * @Date: 2020-05-06 11:18:33
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 15:44:46
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./show.css";
import loading from "../assets/img/loading2.gif";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ShowCreator from "../store/actionsCreator/Show-actionCreator";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="show-box">
          {/* 头部信息 */}
          <div className="show-header">
            <button
              onClick={() => {
                this.props.history.push("/");
              }}
              className={"iconfont icon-arrow-ios-back"}
            ></button>
            <h1>演出</h1>
            <button className={"iconfont icon-shenglvehao"}></button>
          </div>
          {/* 类型选择 */}
          <div className={"show-type"}>
            <ul>
              <li>
                <a onClick={this.showTypeBtn.bind(this, 0)} href="/#" className="active">
                  全部
                </a>
              </li>
              {this.props.type.map((v, i) => (
                <li key={v.id}>
                  <a onClick={this.showTypeBtn.bind(this, v.id)} href={"/#"} className={""}>
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              onClick={() => {
                this.props.history.push("/amap");
              }}
            >
              全国
              <i
                onClick={() => {
                  this.props.history.push("/amap");
                }}
                className={"iconfont icon-dizhi"}
              ></i>
            </div>
          </div>
          {/* 列表 */}
          {this.state.bool ? (
            <div className={"loading"}>
              <img src={loading} alt="加载中" />
            </div>
          ) : (
            <div className={"home-hot"}>
              <div className={"home-list"}>
                <ul>
                  {this.props.list.map((v) => (
                    <li
                      onClick={this.skipRoutre.bind(this, "/details/", v.schedular_id)}
                      key={v.schedular_id + v.show_id}
                    >
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
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }

  // 跳转路由 函数
  skipRoutre(path, id) {
    this.props.history.push(`${path}${id}.html`);
  }

  // 列表选择
  showTypeBtn(type, e) {
    e.preventDefault();
    const ele = document.querySelectorAll(".show-type a");
    ele.forEach((item) => {
      item.className = "";
    });
    e.target.className = "active";
    this.props.CHANGE_SHOW_LIST.apply(this, [type]);
  }
  componentDidMount() {
    if (this.props.match.params.id === "0") {
      const url = this.props.match.params.url;
      switch (url) {
        case "17": {
          this.props.history.push("/neocaine");
          return;
        }
        case "18": {
          this.props.history.push("/plus");
          return;
        }
        case "19": {
          this.props.history.push("/vip");
          return;
        }
        case "20": {
          this.props.history.push("/integralStore");
          return;
        }
        case "21": {
          this.props.history.push("/groupBooking");
          return;
        }
        default: {
          return;
        }
      }
    }
    // 列表
    this.props.CHANGE_SHOW_LIST.apply(this, [0]);
    // 类型
    this.props.CHANGE_SHOW_TYPE.apply(this);
  }
  componentWillUnmount() {
    this.setState = () => null;
  }
}

function mapStateToProps({ ShowList }) {
  return {
    list: ShowList.ShowList.list,
    page: ShowList.ShowList.page,
    type: ShowList.showType,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShowCreator, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Show);
