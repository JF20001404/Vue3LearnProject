import './assets/main.css'
import { createApp } from 'vue'
// 1. 引入pinia
import { createPinia } from 'pinia'
// 2. 创建pinia
const pinia = createPinia()

import router from '@/router'
import App from './App.vue'

const app = createApp(App)
// 3. 挂载pinia
app.use(pinia)
app.use(router)
app.mount('#app')
