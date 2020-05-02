/*
 * @描述: 搜索页面
 * @创建者: 刘旭
 * @Date: 2020-05-02 13:49:12
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-02 18:28:48
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./search.css";
import SearchCreator from "../store/actionsCreator/Search-actionCreator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Search extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 头部搜索 */}
        <div className={"search-header-box"}>
          <div className={"search-header"}>
            <div className={"search-input"}>
              <i className={"iconfont icon-sousuo1"}></i>
              <input type="text" placeholder={"搜索热门演出"} />
              <button className={"iconfont  icon-guanbi"} />
            </div>
            <button>取消</button>
          </div>
        </div>

        {/* 默认内容 */}
        {/* <div className={"search-content"}>
          <h1>
            <span>历史搜索</span>
            <button className={"iconfont icon-lajitong"}></button>
          </h1>
          <button>冰雪奇缘</button>
          <h2>热门搜索</h2>
          <div className={"search-option"}>
            <button>冰雪奇缘</button>
            <button>第一次约会</button>
            <button>摇滚红与黑</button>
            <button>魔女宅急便</button>
            <button>咖啡因</button>
            <button>猫CATS</button>
          </div>
        </div> */}
        {/* 查询显示内容 */}

        <div className={"search-list"}>
          <ul>
            {this.props.searchDataLf.map((v) => (
              <li key={v.schedular_id}>
                <span>{v.city_name}</span>
                <img src={v.pic} alt={v.intro} />
                <h1>{v.intro}</h1>
                <p>{v.end_show_time}</p>
                {v.min_price === "0" ? <h2>待定</h2> : <h2>￥{v.min_price} 起</h2>}
              </li>
            ))}
          </ul>
          <ul>
            {this.props.searchDataRg.map((v) => (
              <li key={v.schedular_id}>
                <span>{v.city_name}</span>
                <img src={v.pic} alt={v.intro} />
                <h1>{v.intro}</h1>
                <p>{v.end_show_time}</p>
                <h2>{v.min_price === "0" ? "待定" : `￥${v.min_price}起`}</h2>
                {v.support_desc.length > 0 ? (
                  <h3>
                    {v.support_desc.map((item, index) => (
                      <span key={item}>{item}</span>
                    ))}
                  </h3>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // 搜索内容
    this.props.GET_SEARCH_DATA.apply(this);
  }
}

// 映射 state 到 当前组件 props
function mapStateToProps({ SearchList }) {
  return {
    searchDataLf: SearchList.searchDataLf,
    searchDataRg: SearchList.searchDataRg,
    searchWord: SearchList.searchWord,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
