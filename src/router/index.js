import Vue from 'vue';
import VueRouter from 'vue-router';
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// import Home from '../views/Home';
// 使用路由懒加载
const About = () => import('../views/About.vue');
const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue') },
  { path: '/about', component: About },
  { path: '/bar', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // mode: 'history', // 默认 hash 模式
  routes // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()

  next();
});

router.afterEach((to, from) => {
  // ...
  console.log(to, from);
});

export default router;
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// import router from './router/index'
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
