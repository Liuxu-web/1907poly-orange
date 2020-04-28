/*
 * @描述: 首页 (底部导航)
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:28:14
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-28 16:09:21
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const data = await this.$get("/api", { city_id: 0, version: "6.1.1", referer: 2 });
    console.log(data);
  }
}

export default Home;
