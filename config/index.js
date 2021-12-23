export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'XXX 可视化管理系统',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  baseUrl: {
    dev: 'http://127.0.0.1:3000',
    pro: 'http://127.0.0.1:9080',
    tes: 'http://127.0.0.1:8080'
  },
  messageUrl: {
    dev: 'http://127.0.0.1:8080',
    pro: 'http://127.0.0.1:8080',
    tes: 'http://127.0.0.1:8080'
  },
  eventUrl: {
    dev: 'http://127.0.0.1:8080',
    pro: 'http://127.0.0.1:8080',
    tes: 'http://127.0.0.1:9080'
  },
  adminUrl: {
    dev: 'http://127.0.0.1:9080',
    pro: 'http://127.0.0.1:9080',
    tes: 'http://127.0.0.1:9080'
  },
  activUrl: {
    dev: 'http://127.0.0.1:8080/service',
    pro: 'http://127.0.0.1:8080/service',
    tes: 'http://127.0.0.1:8080/service'
  },
  login: false,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
};
