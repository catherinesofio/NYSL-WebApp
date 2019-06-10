import Vue from 'vue'
import Router from 'vue-router'
import ScreenSplash from '@/components/ScreenSplash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScreenSplash',
      component: ScreenSplash
    }
  ]
})
