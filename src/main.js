import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'
//引入css初始化公共文件
import './assets/css/base/base.css'
import router from './router'
import './plugins/element'

Vue.prototype.$ = jquery;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
