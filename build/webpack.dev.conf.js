const utils = require('./utils')
const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const config = require("./config");
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    // 配置打包文件输出的目录
    // path: path.resolve(__dirname, '../dist'),
    path: config.build.assetsRoot,
    // 生成的 js 文件名称
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    // 生成的 chunk 名称
    chunkFilename: utils.assetsPath('js/[name].[hash:8].js'),
    // 资源引用的路径
    publicPath: '/' // 必须加publicPath
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
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   }
    // })
  ]
});
