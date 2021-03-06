// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/style/common.css'
import common from '@/utils/common'
if (process.env.NODE_ENV === 'development') {
  require('../mock/index')
}

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
console.log(process.env)
let router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  common.setTitle(to.meta.title)
  next()
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
window.ra = app.$router
