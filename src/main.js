// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import App from '@/app/Main'
import store from '@/vuex'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  name: 'Main',
  router,
  store,
  components: { App },
  template: '<App/>'
})
