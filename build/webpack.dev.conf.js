const utils = require('./utils')
const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const path = require("path");
const config = require("./config");

module.exports = merge(webpackConfig, {
  mode: 'development',
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  output: {
    // 配置打包文件输出的目录
    // path: path.resolve(__dirname, '../dist'),
    path: config.dev.assetsRoot,
    // 生成的 js 文件名称
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    // 生成的 chunk 名称
    chunkFilename: utils.assetsPath('js/[name].[hash:8].js'),
    // 资源引用的路径
    publicPath: '/' // 必须加publicPath
  },
  devServer: {
    // allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?,
    // host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?,
    // onListening?, open?, port?, proxy?, server?, setupExitSignals?, static?, watchFiles?, webSocketServer?

    http2: config.dev.http2,
    https: config.dev.https,
    host: config.dev.host, // 主机地址，默认是localhost
    port: config.dev.port, // 端口
    open: config.dev.autoOpenBrowser, // 自动打开浏览器
    // hot: true, // 设置为 true 更改页面样式不会自动刷新页面
    // 启动gzip压缩
    compress:true,
    proxy: config.dev.proxyTable,
    static: {
      directory: path.join(__dirname, "../dist"),
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        // 使用 'style-loader','css-loader'
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'sass-loader', 'postcss-loader']
      },{
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'less-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
      },
      onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
    })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   }
    // })
  ]
});
