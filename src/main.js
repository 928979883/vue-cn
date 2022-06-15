import Vue from 'vue'
import App from './App.vue'
//引入css公共文件
import './assets/css/base/base.css'
import {Button ,Header ,Main ,Footer ,Menu ,MenuItem ,Container ,Submenu ,Select ,Option ,Tabs ,TabPane ,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
