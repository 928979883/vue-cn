import Vue from 'vue'
import App from './App.vue'
import {Button ,Header ,Main ,Footer ,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(Button)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
