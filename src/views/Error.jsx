/*
 * @描述: 404 找不到页面
 * @创建者: 刘旭
 * @Date: 2020-04-27 22:05:58
 * @修改者: 刘旭
 * @LastEditTime: 2020-05-01 22:55:36
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React, { Component } from "react";

import style from "./error.module.css";
class Error extends Component {
  constructor(props) {
    super(props);
    this.boll = true;
    this.ele = null;
    this.state = {
      maxStars: 1300, //默认1300颗星星
    };
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
  // 修改星星数量
  change() {
    if (this.boll) {
      this.boll = false;
      const num = this.ele.value;
      if (num <= 6000 && num >= 1300) {
        this.setState({
          maxStars: num,
        });
        this.Fun();
        this.ele.value = "";
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.error}>
          <input
            onChange={this.debounce.call(this, this.change.bind(this), 1000)}
            type="text"
            ref={(e) => (this.ele = e)}
          />
          <p>恭喜你发现404彩蛋</p>
          <p>找到隐藏输入框,防抖1秒</p>
          <p>输入范围,改变星星数量</p>
          <p>范围1300 - 6000</p>
          <p>只能改变一次,慎重</p>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            返回首页
          </button>
        </div>
        <canvas id="canvas" className={style.canvas}></canvas>
      </React.Fragment>
    );
  }
  // 宇宙特效
  Fun() {
    //宇宙特效
    let canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      hue = 217,
      stars = [],
      count = 0,
      maxStars = this.state.maxStars; //星星数量,默认1300
    let canvas2 = document.createElement("canvas"),
      ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, "#CCC");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache
    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        let hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      let max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    }

    let Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8; //星星大小,值越大星星越小,默认8

      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 50000; //星星移动速度,值越大越慢,默认5W

      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this;
    };

    Star.prototype.draw = function () {
      let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    };

    for (let i = 0; i < maxStars; i++) {
      new Star(this.state.scope);
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.5; //尾巴
      ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  }

  componentDidMount() {
    this.Fun();
  }
}

export default Error;
