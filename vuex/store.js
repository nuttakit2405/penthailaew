// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vues from 'vues'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vue.Store({
  el: '#app',
  data: {
      msgr: 'Hello kitty'
  }
})
