import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
//引入vuex仓库
import store from './store'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
