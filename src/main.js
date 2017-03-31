// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/fonts.css'

import def_lazy_img from './assets/images/loading.gif'

Vue.use(VueLazyLoad, {
  loading: def_lazy_img
})

Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
