import Vue from 'vue';
import Wui from 'wxl-ui';
import config from '../config';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'wxl-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont/iconfont.css';

// 全局样式

// iconfont图标样式

Vue.use(Wui);

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;

new Vue({
  el: '#app',
  router,
  store, // ++
  components: { App },
  template: '<App/>'
});

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')
