import { createApp } from 'vue/dist/vue.esm-bundler'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import i18n from "./i18n"

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
