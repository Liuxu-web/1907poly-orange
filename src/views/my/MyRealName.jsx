import React, { Component } from "react";
import HeadNav from "../../components/my/HeadNav";
import pubsub from "pubsub-js";
import addressStyle from "../../assets/css/my/myaddress.module.css";
export default class MyRealName extends Component {
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
            <HeadNav titleName={"添加购票人"}></HeadNav>
            <div className={addressStyle.noaddress}>
              <img
                className={addressStyle.noaddress_pic}
                src="https://m.juooo.com/static/img/real_name_empty.png"
                alt=""
              />
              <p className={addressStyle.noaddress_text}>暂无购票人</p>
            </div>
            <div className={addressStyle.add_address}>
              <input
                className={addressStyle.add_address_button}
                type={"button"}
                value={"+添加购票人"}
                onClick={() => {
                  this.setState({ isShow: true });
                }}
              />
            </div>
          </div>
          {/* 添加购票人,默认隐藏 */}
          <div
            className={"edit_address"}
            style={{ display: this.state.isShow ? "block" : "none" }}
          >
            <div>
              <HeadNav titleName={"添加购票人"}></HeadNav>
              <form action="" className={addressStyle.edit_address_form}>
                <div className={addressStyle.edit_address_wrap}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    姓名
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_input}
                    type="text"
                    placeholder={"请输入购票人姓名"}
                  />
                </div>
                <div className={addressStyle.edit_address_wrap}>
                  <span className={addressStyle.edit_address_wrap_text}>
                    身份证号
                  </span>
                  <input
                    className={addressStyle.edit_address_wrap_input}
                    type="text"
                    placeholder={"请输入购票人身份证号"}
                  />
                </div>
                <div className={addressStyle.addName}>
                  <i className={"iconfont icon-2"}></i>
                  <p className={addressStyle.addName_text}>
                    请如实填写身份信息，认证通过后不可修改
                  </p>
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
    pubsub.publish("myrealname", this);
  }
}
