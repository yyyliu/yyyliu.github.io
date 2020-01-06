import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/bernadette.css'
import '../assets/css/latolatinfonts.css'

// only import bootstrap modules we used
import {BButton} from 'bootstrap-vue'
Vue.component('b-button', BButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
