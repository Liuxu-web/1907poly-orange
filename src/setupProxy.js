/*
 * @描述: 服务器代理. 添加代理请注释, ( 代理什么接口 - 名字 )
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:16:23
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-27 21:21:00
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // 代理聚橙首页面 - 刘旭
  app.use(
    "^/api",
    proxy.createProxyMiddleware({
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
