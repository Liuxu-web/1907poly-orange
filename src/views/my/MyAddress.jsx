import React, { Component } from "react";
// 发布与订阅
import pubsub from "pubsub-js";
import HeadNav from "../../components/my/HeadNav";
import "../../assets/iconfont/iconfont.css";
import addressStyle from "../../assets/css/my/myaddress.module.css";
export default class MyAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div style={{ display: this.state.isShow ? "none" : "block" }}>
            <HeadNav titleName={"收货地址"}></HeadNav>
            <div className={addressStyle.noaddress}>
              <img
                className={addressStyle.noaddress_pic}
                src="https://m.juooo.com/static/img/address_empty_icon.7c96321.png"
                alt=""
              />
              <p className={addressStyle.noaddress_text}>暂无收货地址</p>
            </div>
            <div className={addressStyle.add_address}>
              <input
                className={addressStyle.add_address_button}
                type={"button"}
                value={"+添加收货地址"}
                onClick={() => {
                  this.setState({ isShow: true });
                }}
              />
            </div>
          </div>
          {/* 添加收货地址,默认隐藏,点击按钮显示 */}
          <div
            className={"edit_address"}
            style={{ display: this.state.isShow ? "block" : "none" }}
          >
            <div>
              <HeadNav titleName={"添加地址"}></HeadNav>
              <form action="" className={addressStyle.edit_address_form}>
                <div className={addressStyle.edit_address_wrap}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    收货人
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_input}
                    type="text"
                    placeholder={"请输入收货人姓名"}
                  />
                </div>
                <div className={addressStyle.edit_address_wrap}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    手机号
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_input}
                    type="text"
                    placeholder={"请输入收货人手机号"}
                  />
                </div>
                <div className={addressStyle.edit_address_wrap}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    所在地区
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_input}
                    type="text"
                    placeholder={"请选择所在地区"}
                  />
                  <i className={"iconfont icon-arrow-ios-forward"}></i>
                </div>
                <div className={addressStyle.edit_address_address}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    详细地址
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_textarea}
                    type="text"
                    placeholder={"请输入街道,楼牌号等"}
                  />
                </div>
                <div className={addressStyle.swith}>
                  <div className={addressStyle.swith_wrap}>
                    <span>设为默认地址</span>
                    <span>选择器</span>
                  </div>
                </div>
              </form>
              <div className={addressStyle.add_address_commit_btn}>
                <input
                  type="button"
                  value="保存"
                  className={addressStyle.add_address_button}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 发布者
    pubsub.publish("address", this);
  }
}
