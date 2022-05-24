// 生产环境使用

/*
* 压缩代码
不需要热更新
提取css，压缩css文件
sourceMap
构建前清除上一次构建的内容
* @intervolga/optimize-cssnano-plugin 用于压缩css代码
mini-css-extract-plugin 用于提取css到文件中
clean-webpack-plugin 用于删除上次构建的文件
webpack-merge 合并 webpack配置
copy-webpack-plugin 用户拷贝静态资源
...
* */
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const {merge} = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
/*   clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  output: {
    // 配置打包文件输出的目录
    // path: path.resolve(__dirname, '../dist'),
    path: config.build.assetsRoot,
    // 生成的 js 文件名称
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    // 生成的 chunk 名称
    chunkFilename: utils.assetsPath('js/[name].[hash:8].js'),
    // 资源引用的路径
    // publicPath: './', // 必须加publicPath 生产环境为 './'
    publicPath: config.build.assetsPublicPath // 必须加publicPath
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         name: 'chunk-vendors',
  //         test: /[\\\/]node_modules[\\\/]/,
  //         priority: -10,
  //         chunks: 'initial'
  //       },
  //       common: {
  //         name: 'chunk-common',
  //         minChunks: 2,
  //         priority: -20,
  //         chunks: 'initial',
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [

    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: 'production'
    //   }
    // }),
    // new MiniCssExtractPlugin({
    //   filename: utils.assetsPath('css/[name].[hash:8].css'),
    //   chunkFilename: utils.assetsPath('css/[name].[hash:8].css')
    // }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist') }
    //   ],
    // }),
    new CleanWebpackPlugin()
  ]
})
