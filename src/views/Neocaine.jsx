/*
 * @描述: 购买新卡页面
 * @创建者: 刘旭
 * @Date: 2020-05-06 15:07:04
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-06 18:01:10
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import HeaderComponent from "../components/Home/Header_component/HeaderComponent";
import "./Neocaine.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import neocaineCreator from "../store/actionsCreator/Neocaine-actionCreator";
class Neocaine extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"Neocaine-box"}>
          <HeaderComponent text={"购买新卡"} />
          {/* 广告 */}
          <div className={"adv"}>
            <img src={this.props.pc_image.mb_image} alt={this.props.pc_image.name} />
          </div>
          {/* VIP */}
          <div className={"vip"}>
            <h1>
              <p>
                VIP+ <span>全国通用</span>
              </p>
              <i className={"iconfont icon-arrow-ios-forward"}></i>
            </h1>
            <ul>
              {this.props.equity_list.map((v) => (
                <li key={v.benefits_name}>
                  <span>
                    <i className={`iconfont ${v.benefits_icon}`}></i>
                  </span>
                  <p>{v.benefits_name}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* 储蓄卡 */}
          <div className={"card-box"}>
            {this.props.store_card.map((v) => (
              <div key={v.id}>
                <h1>
                  {v.card_type_name}
                  <span>全国通用,购卡重置200元</span>
                </h1>
                <div className={"card"}>
                  <div className={"lf"}>
                    <img src={v.card_image} alt={v.card_type_name} />
                  </div>
                  <div className={"rg"}>
                    <h1>{v.name}</h1>
                    <h2>有效期 : 长期有效</h2>
                    <h3>
                      ￥{v.card_price}
                      <span>赠送VIP+</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 品类次卡 */}
          <div className={"card-box"}>
            <h1>品类 · 次卡</h1>
            {this.props.cate_card.map((v) => (
              <div style={{ borderBottom: "1px solid #F5F5F5" }} key={v.id}>
                <div className={"card"}>
                  <div className={"lf"}>
                    <img src={v.card_image} alt={v.card_type_name} />
                  </div>
                  <div className={"rg"}>
                    <h1>{v.name}</h1>
                    <h2>有效期 : 长期有效</h2>
                    <h3>
                      ￥{v.card_price}
                      <span>赠送VIP+</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 城市次卡 */}
          <div className={"card-box"}>
            <h1>品类 · 次卡</h1>
            {this.props.once_card.map((v) => (
              <div style={{ borderBottom: "1px solid #F5F5F5" }} key={v.id}>
                <div className={"card"}>
                  <div className={"lf"}>
                    <img src={v.card_image} alt={v.card_type_name} />
                  </div>
                  <div className={"rg"}>
                    <h1>{v.name}</h1>
                    <h2>有效期 : 长期有效</h2>
                    <h3>
                      ￥{v.card_price}
                      <span>赠送VIP+</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 图片
    this.props.CHANGE_PIC.apply(this);
    // 卡
    this.props.CHANGE_LIST.apply(this);
    // vip
    this.props.CHANGE_VIP.apply(this);
  }
}

// 映射 仓库state  到 当前组件的props
function mapStateToProps({ Neocaine }) {
  return {
    pc_image: Neocaine.NeocaineList.pc_image,
    // 品类次卡
    cate_card: Neocaine.NeocaineList.cate_card,
    // 城市次卡
    once_card: Neocaine.NeocaineList.once_card,
    // 储蓄卡
    store_card: Neocaine.NeocaineList.store_card,
    // Vip 横向滚动
    equity_list: Neocaine.NeocaineList.equity_list,
    service_rule: Neocaine.NeocaineList.service_rule,
  };
}
// 映射 dispatch 到 当前组件的props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(neocaineCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Neocaine);
