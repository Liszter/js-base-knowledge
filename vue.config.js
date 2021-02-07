const axiosRequest = 'http://localhost'

const pkg = require('./package.json')
const name = pkg.name || 'learning' // page title
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  assetsDir: './assets',
  // dist文件下的map文件
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    open: true,
    port: 8000,
    // 不检查域名
    // sockHost: 'http://localhost:7020/',
    disableHostCheck: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: axiosRequest,
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        'xxComponents': '@/components',
        'xxApi': '@/api',
        'xxStyle': '@/styles'
      }
    }
  }
}
