import React, { Component } from "react";
import axios from "axios";
import { TheStyle } from "./theaterStyle";
import Swiper from "swiper";
import "../../../../node_modules/swiper/css/swiper.min.css";
import "../../../assets/css/Home-swiper.css";

// 这个看起来像是图片. 但是指定目录没有
// let dian = require('../../../assets/img/dian.png')

class theater extends Component {
  constructor() {
    // 这个记得放在上面
    super();
    this.state = {
      theatreList: [],
    };
  }

  render() {
    return (
      <div>
        {/* 因为样式的问题, 所以只能把你的写的页面注释了 */}
        {/* <TheStyle>
          <div className="head_nav">
            <h3>剧院</h3>
          </div>

          <div className="theater-body">
            <div className="theater-list">
              <ul>
                {this.state.theatreList.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="theater-info-shows">
                        <div className="theater-info">
                          <a href="null" className="theater-pic-name-count">
                            <img src={item.pic} alt="" />
                            <div className="theater-name-count-wrap">
                              <span>{item.name}</span>
                              <p>{item.count}场在售演出</p>
                            </div>
                          </a>
                          <a href="null" className="theater-link">
                            <img alt="图片丢失" src={dian} />
                          </a>
                        </div>

                        <div className="theater-shows">
                          <div className="theater-show-wrap">
                            <div className="swiper-container">
                              <div className="swiper-wrapper">
                                {item.show_list.map((item2, index) => {
                                  return (
                                    <div className="swiper-slide" key={index}>
                                      <div className="theater-show-date">
                                        <p>{item2.show_time}</p>
                                        <span></span>
                                      </div>
                                      <a href="null">
                                        <img src={item2.pic} alt="" />
                                      </a>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </TheStyle> */}
      </div>
    );
  }

  // componentDidMount() {
  //   axios("/api/theatre/index/getTheatreList", {
  //     params: {
  //       page: 1,
  //       version: "6.1.1",
  //       referer: 1,
  //     },
  //   }).then((res) => {
  //     console.log(res.data.data.theatre_list);

  //     this.setState({ theatreList: res.data.data.theatre_list });
  //     var swiper = new Swiper(".swiper-container", {
  //       slidesPerView: "auto",
  //       spaceBetween: 0,
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //       },
  //     });
  //   });
  // }
}

export default theater;
