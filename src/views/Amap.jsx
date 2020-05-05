import React, { Component } from "react";
import { Map } from "react-amap";
import Geolocation from "react-amap-plugin-geolocation";
import "./Amap.css";
const mapKey = "c26ae39e0fe9b680c2fd5b799184bbcc"; //需要自己去高德官网上去申请

const pluginProps = {
  enableHighAccuracy: true,
  timeout: 10000,
  showButton: true,
};
class Amap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={"amap"}>
        <button
          onClick={() => {
            this.props.history.go(-1);
          }}
        >
          返回
        </button>
        <Map amapkey={mapKey} zoom={15}>
          <Geolocation {...pluginProps} />
        </Map>
      </div>
    );
  }
  componentDidMount() {
    //eslint-disable-next-line
    AMap.plugin("AMap.Weather", function () {
      //创建天气查询实例
      // eslint-disable-next-line no-undef
      var weather = new AMap.Weather();
      //执行实时天气信息查询
      weather.getLive("大同市", function (err, data) {
        console.log(err, data);
      });
    });
  }
}

export default Amap;
