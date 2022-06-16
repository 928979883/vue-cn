import Vue from 'vue'
import App from './App.vue'
//引入css公共文件
import './assets/css/base/base.css'
import router from './router'
import './plugins/element'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
