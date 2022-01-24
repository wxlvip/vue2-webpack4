const About = () => import('../views/About.vue');
const Bar = { template: '<div>bar</div>' };

export default [
  {
    path: '/',
    name: 'home',
    // title: '首页',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  { // 测试
    path: '/test',
    name: 'test',
    title: 'test',
    meta: {
      title: '测试页面'
    },
    component: () => {
      // require(['@/components/diy-tool-box/index.vue'], resolve)
      import('../views/Home.vue');
      // require(['@/module/map/MapConsole.vue'], resolve);
    }
  },
  {
    path: '/about',
    meta: {
      title: '首页'
    },
    component: About
  },
  {
    path: '/bar',
    meta: {
      title: '首页'
    },
    component: Bar
  },
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "Home" */ '../components/login.vue')
  }
];
