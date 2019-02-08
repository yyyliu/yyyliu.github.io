import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import VitaPage from '../pages/VitaPage.vue'
import RecruitPage from '../pages/RecruitPage.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Yang Liu' },
      component: MainPage
    },
    {
      path: '/cv',
      name: 'cv',
      meta: { title: 'Yang Liu' },
      component: VitaPage
    },
    {
      path: '/stats-interview',
      name: 'interview',
      meta: { title: 'Interview Study' },
      component: RecruitPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
