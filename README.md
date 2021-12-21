## Vue2.x + Webpack4

### 设置镜像
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

由于webpack4只兼容之前版本的一些插件，最新版本的不一定能用，这里就找到了各插件的边界。只是安装的时候需要指定版本。
```
"vue": "^2.6.14" ↓
"css-loader": "3.6.0" ↓
"file-loader": "^6.2.0",
"html-webpack-plugin": "4.5.2" ↓
"sass": "^1.45.1",
"sass-loader": "10.2.0" ↓
"style-loader": "2.0.0" ↓
"url-loader": "2.3.0" ↓
"vue-loader": "^15.9.8",
"vue-template-compiler": "^2.6.14",
"webpack": "^4.46.0" ↓
"webpack-cli": "^4.9.1" ↓
"webpack-dev-server": "^4.6.0"
```




## 素材

```
├── build // webpack的基本配置、开发环境配置、生产环境配置
├── config // 路径、端口以及反向代理配置
├── dist // webpack打包后的静态资源
├── node_modules // npm安装的依赖包
├── src // 前端主文件
│   ├── assets // 静态资源
│   │   ├── font
│   │   ├── img
│   │   └── scss
│   ├── components // 单个组件
│   │   ├── xxx.vue // 单文件组件
│   ├── router // 路由配置
│   ├── store // 全局变量
│   ├── App.vue // App组件
│   ├── main.js 主入口文件
├── static // 静态文件
├── .babelrc  // babel的配置项
├── .editorconfig  // 编辑器的配置项
├── .gitignore  // 会忽略语法检查的目录
├── index.html // 入口页面
├── package.json // 项目的描述和依赖 
```
