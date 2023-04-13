//import Vue from 'vue'
//import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'

import "@fortawesome/fontawesome-svg-core"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app=createApp(App)
app.use(router)
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)
app.mount('#app')