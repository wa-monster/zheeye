import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
const app = createApp(App)

axios.get('/api/columns').then(res => {
  console.log(res)
})
app.use(router)
app.use(store)
app.mount('#app')
