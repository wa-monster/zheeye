import { createRouter, createWebHashHistory } from 'vue-router'
import ColumnDetail from '@/components/ColumnDetail.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import CreatePost from '@/views/CreatePost.vue'
import store from './store'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login, meta: { redirectAlreadyLogin: true } },
    { path: '/post', name: 'post', component: CreatePost, meta: { requuiredLogin: true } },
    { path: '/column/:id', name: 'column', component: ColumnDetail }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requuiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next({ name: 'home' })
  } else {
    next()
  }
})
export default router
