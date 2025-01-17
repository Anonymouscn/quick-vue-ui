import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import kits from '../packages'
import router from "./router/router.js";

const app = createApp(App)

app.use(kits).use(router)

app.mount('#app')