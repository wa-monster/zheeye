import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ColumnDetail from '@/components/ColumnDetail.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/column/:id', name: 'column', component: ColumnDetail }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
