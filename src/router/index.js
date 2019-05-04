import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/index'
import Money from '../pages/money/index'
import Ious from '../pages/ious/index'
import Raise from '../pages/raise/index'
import Download from '../pages/special/download'
import "../css/reset.scss"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/money',
      name: 'money',
      component: Money,
    },{
      path: '/ious',
      name: 'ious',
      component: Ious,
    },{
      path: '/raise',
      name: 'raise',
      component: Raise,
    },{
      path: '/download',
      name: 'download',
      component: Download,
    }

  ]
})
