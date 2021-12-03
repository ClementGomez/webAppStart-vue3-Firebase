import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

// init Vue App
app.use(router).mount('#app')