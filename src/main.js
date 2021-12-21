import Vue from 'vue';
import App from './App';
import router from './router/index'
import store from './store'  // ++

new Vue({
    el: '#app',
    router,
    store, // ++
    components: { App },
    template: '<App/>'
})

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')
