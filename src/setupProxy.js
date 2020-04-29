/*
 * @描述: 服务器代理. 添加代理请注释, ( 代理什么接口 - 名字 )
 * @创建者: 刘旭
 * @Date: 2020-04-27 21:16:23
 * @修改者: 刘旭
 * @LastEditTime: 2020-04-29 11:04:39
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // 代理聚橙首页面 - 刘旭
  app.use(
    "^/api",
    proxy.createProxyMiddleware({
      target: "https://api.juooo.com/home/index/getClassifyHome?",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
