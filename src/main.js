import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'
import  {reqCategoryList} from '@/api/index'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
reqCategoryList();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
