/*
 * @描述: 首页 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:28:14
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-28 13:24:03
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>首页页面==</h1>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const data = await this.$get("/api", { city_id: 0, version: "6.1.1", referer: 2 });
    console.log(data);
  }
}

export default Home;
