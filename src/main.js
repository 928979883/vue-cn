import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'
//引入css初始化公共文件
import './assets/css/base/base.css'
import router from './router'
import './plugins/element'
import store from "./store";
import BaiduMap from  "vue-baidu-map"

Vue.prototype.$ = jquery;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
});
Vue.use(BaiduMap, {ak:  "Wz1Q79sMOCqTDgrW8gTVmWmrQQLHWyxR"});

new Vue({ 
  store,
  router,
  render: h => h(App),
}).$mount('#app')
