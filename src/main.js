import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

import Vuep from 'vuep'
import 'vuep/dist/vuep.css'

// 引入animate动画
import animated from 'animate.css'
Vue.use(Vuep /*, { codemirror options } */)
Vue.use(animated);

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
