import { createRouter, createWebHashHistory } from 'vue-router'
import ColumnDetail from '@/components/ColumnDetail.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import CreatePost from '@/views/CreatePost.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/post', component: CreatePost },
    { path: '/column/:id', name: 'column', component: ColumnDetail }
  ]
})

export default router
