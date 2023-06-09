import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import '@/assets/css/main.scss'

createApp(App).use(router).mount('#app')
