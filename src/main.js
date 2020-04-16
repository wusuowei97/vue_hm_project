import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入 vant 组件库
import 'vant/lib/index.css' // 引入 vant 组件库 样式
// 引入全局自定义样式
import './assets/css/globle.css'

Vue.use(Vant) // 全局注册 vant

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
