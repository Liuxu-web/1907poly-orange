import React, { Component } from "react";
import "./theater.css";
import { connect } from "react-redux";
import newsCreator from "../../../store/actionsCreator/theater/index.js";
// 发布与订阅
import pubsub from "pubsub-js";
class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    this.props.getList();
    // 发布者
    pubsub.publish("home", "/theater");
  }
  render() {
    return (
      <div>
        <div className="Header">剧院</div>
        {this.props.theatre_list.map((v, i) => (
          <div className={"theater-box"} key={v.id}>
            <div className={"theater-box-title"}>
              <img src={v.pic} className={"theater-box-title-img"} alt="" />
              <p className={"theater-box-title-p1"}>{v.name}</p>
              <p className={"theater-box-title-p2"}>{v.count}场在售演出</p>
              <div className="theater-more-btn">
                <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
              </div>
            </div>

            <div className="theater-box-list">
              <div className="moveList">
                {v.showList.map((item) => (
                  <div className={"moveList-box"} key={item.id}>
                    <div className={"moveList-time"}>
                      <p>{item.show_time}</p>
                      <span></span>
                    </div>
                    <img className={"moveList-img"} src={item.pic} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    theatre_list: state.theater.theater_list,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getList() {
      dispatch(newsCreator.getTheaList());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Theater);
