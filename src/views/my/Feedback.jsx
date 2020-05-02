import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
// 引入样式
import "../../assets/css/my/feedback.css";
import HeadNav from "../../components/my/HeadNav";
export default class Feedback extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrap">
          {/* <!-- 头部导航 --> */}
          <HeadNav titleName={"意见反馈"}></HeadNav>
          {/* <!-- 文本域 --> */}
          <div className="edit_content__text">
            <textarea
              type="text"
              className="edit_content__text_input"
              placeholder="请填写您的问题或建议，我们将不断改进"
            ></textarea>
            <p className="count_chart">0/200</p>
          </div>
          {/* <!-- 手机号 --> */}
          <div className="app_phone">
            <p className="phone_cord">手机号</p>
            <input
              type="text"
              placeholder="请填写手机号,以便于我们联系"
              className="app_phone_input"
            ></input>
          </div>
          {/* <!-- 所在城市 --> */}
          <div className="city_live">
            <h3 className="city_live_title">所在城市</h3>
            <div className="city_live_choose">
              <span className="city_live_choose_text">请选择城市</span>
              <i>&gt;</i>
            </div>
          </div>
          {/* <!-- 提交按钮 --> */}
          <div className="commit_button">
            <span className="commit_button_span">提交</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // 发布者
    pubsub.publish("feedback", this);
  }
}
