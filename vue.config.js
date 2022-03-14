module.exports = {
  devServer: {
    hot: true, // hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
    open: false, // 使用浏览器自动打开
    https: false,
    port: 8080,
    proxy: {
      // 匹配到/localApi开头时 替换成target指定的地址
      '/api': {
        // 本地
        target: 'http://api.vikingship.xyz/api',
        changeOrigin: true, // 开发环境才开启反向代理, 运行(生产)环境不开启
        pathRewrite: {
          // 把匹配到的/localApi这段开头 替换成 /
          '^/api': ''
        }
      }
    }
  }
}
