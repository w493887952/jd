// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

import './js/viewport'
// viewport.js解决自使用屏幕

/* reset.css初始化浏览器默认样式 */
import './assets/styles/reset.css'
/* border.css一像素边框解决方案 */
import './assets/styles/border.css'
/* fastclick解决移动端点击事件三百毫秒延迟事件 */
import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
