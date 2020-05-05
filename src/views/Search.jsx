/*
 * @描述: 搜索页面
 * @创建者: 刘旭
 * @Date: 2020-05-02 13:49:12
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-05 23:10:45
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import "./search.css";
import SearchCreator from "../store/actionsCreator/Search-actionCreator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Search extends Component {
  constructor(props) {
    super(props);
    this.text = null;
    this.state = {
      searchHistory: localStorage.search ? JSON.parse(localStorage.search) : [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={"search-box"}>
          {/* 头部搜索 */}
          <div className={"search-header"}>
            <div className={"search-input"}>
              <i className={"iconfont icon-sousuo1"}></i>
              <input
                type="text"
                onChange={this.debounce.call(this, this.searchList.bind(this), 1000)}
                ref={(e) => (this.text = e)}
                placeholder={"搜索热门演出"}
              />
              <button
                onClick={this.props.CHANGE_SEARCH_DATA.bind(this, this.text)}
                className={"iconfont  icon-guanbi"}
              />
            </div>
            <button onClick={this.goHome.bind(this)}>取消</button>
          </div>

          {/* 历史搜索 / 热门搜索 */}
          {this.props.searchDataLf.length === 0 ? (
            <div className={"search-content"}>
              <h1>
                <span>历史搜索</span>
                <button
                  onClick={() => {
                    localStorage.search = [];
                    this.setState({
                      searchHistory: [],
                    });
                  }}
                  className={"iconfont icon-lajitong"}
                ></button>
              </h1>
              {this.state.searchHistory.map((v1) => (
                <button onClick={this.btn.bind(this)} key={v1}>
                  {v1}
                </button>
              ))}
              <h2>热门搜索</h2>
              <div className={"search-option"}>
                {this.props.searchWord.map((v) => (
                  <button onClick={this.btn.bind(this)} key={v.word}>
                    {v.word}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* 查询显示内容 */}
          {this.props.searchDataLf.length > 0 ? (
            <div className={"search-list"}>
              <ul>
                {this.props.searchDataLf.map((v) => (
                  <li
                    onClick={this.skipRoutre.bind(this, "/details/", v.schedular_id)}
                    key={v.schedular_id}
                  >
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
                  <li
                    onClick={this.skipRoutre.bind(this, "/details/", v.schedular_id)}
                    key={v.schedular_id}
                  >
                    <span>{v.city_name}</span>
                    <img src={v.pic} alt={v.intro} />
                    <h1>{v.intro}</h1>
                    <p>{v.end_show_time}</p>
                    {v.min_price === "0" ? <h2>待定</h2> : <h2>￥{v.min_price} 起</h2>}
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
          ) : null}
        </div>
      </React.Fragment>
    );
  }

  // 防抖
  debounce(fn, wait) {
    let timeout = null;
    return function () {
      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this);
        timeout = null;
      }, wait);
    };
  }

  // 跳转路由 函数
  skipRoutre(path, id) {
    this.props.history.push(`${path}${id}.html`);
  }

  // 输入内容查询显示结果
  searchList() {
    // 搜索内容
    const text = this.text.value;
    // 判断搜索内容是否为空
    if (text) {
      // 执行dispath 函数 获取数据
      this.props.GET_SEARCH_DATA.apply(this, [text]);
      // 判断本地是否有存储历史记录
      if (localStorage.search) {
        // 进入此条件, 证明有历史记录
        const loc = JSON.parse(localStorage.search);
        // 判断 历史记录 的内容是否大于3个
        if (loc.length > 2) {
          // 大于三个, 删除第一个 , 末尾增加最新的
          loc.shift();
          loc.push(text);
        } else {
          // 没有大于三个 ,直接添加
          loc.push(text);
        }
        // json 转换 保存本地
        localStorage.search = JSON.stringify(loc);
        // 通过sst 改变视图
        this.setState({
          searchHistory: loc,
        });
      } else {
        // 进入此条件,. 证明没有历史记录 生成历史记录
        localStorage.search = JSON.stringify([text]);
        // 通过sst 改变视图
        this.setState({
          searchHistory: [text],
        });
      }
    } else {
      // 进入此条件, 搜索内容为空, 清空所搜数据
      this.props.CHANGE_SEARCH_DATA.apply(this, [this.text]);
    }
  }

  // 点击历史搜索查询
  btn(e) {
    const btnText = e.target.innerText;
    this.props.GET_SEARCH_DATA.apply(this, [btnText]);
    this.text.value = btnText;
  }

  // 取消按钮,返回首页,并清空数据
  goHome() {
    this.props.CHANGE_SEARCH_DATA.apply(this, [this.text]);
    this.props.history.push("/");
  }
  //
  componentDidMount() {
    this.props.GET_SEARCH_WORD.apply(this);
  }
  // 销毁组件 清空数据
  componentWillUnmount() {
    this.props.CHANGE_SEARCH_DATA.apply(this, [this.text]);
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
