import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
//引入css初始化公共文件
import './assets/css/base/base.css'
import router from './router'
import './plugins/element'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
