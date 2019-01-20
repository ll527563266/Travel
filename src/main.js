// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@/utils/rem'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false
fastClick.attach(document.body)// 解决移动端某些浏览器点击延迟的问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})