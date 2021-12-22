const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 性能分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // 配置主入口文件
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, 'dist'),
    // 生成的 js 文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js'
    // 资源引用的路径
    // publicPath: "./"
  },
  mode: 'development',
  devServer: {
    // allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, static?, watchFiles?, webSocketServer?
    open: true,
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // import引用文件省略后缀 runtime
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      // 注意 cache-loader 读取和保存缓存文件是有性能开销的，所以只使用这个加载器来缓存主要的加载器。
      {
        test: /\.vue$/,
        use: ['cache-loader', 'vue-loader'],
        // loader: 'vue-loader'
        include: path.resolve('src')
      },{
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },{
        // test 表示测试什么文件类型
        test: /\.css$/,
        // 使用 'style-loader','css-loader'
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // 与 MiniCssExtractPlugin 不共存
          'css-loader', 'postcss-loader']
      },{
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
      },{
        test: /\.(gif|png|svg|jpe?g)(\?.*)?$/,
        loader: 'url-loader', // 建议使用url-loader，不用file-loader，减少http请求次数
        options: {
          limit: 8 * 1024,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body'
    }),
    new VueLoaderPlugin(), //  手动创建项目，需在webpack中使用vue-loader自带插件
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    })
    // new BundleAnalyzerPlugin(
    //     {
    //         analyzerMode: 'static', //可选‘server'，'static'，'disabled'
    //         analyzerHost: '127.0.0.1',
    //         analyzerPort: 8889,
    //         reportFilename: 'report.html',
    //         defaultSizes: 'parsed',
    //         openAnalyzer: true,
    //         generateStatsFile: false,
    //         statsFilename: 'stats.json',
    //         statsOptions: null,
    //         logLevel: 'info'
    //     }
    // )
    // 配置环境变量
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
    //     }
    // })
  ]
};
