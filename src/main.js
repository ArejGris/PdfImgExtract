//import Vue from 'vue'
//import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'
import vue3GoogleLogin from 'vue3-google-login'
import "@fortawesome/fontawesome-svg-core"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app=createApp(App)
app.use(vue3GoogleLogin,{clientId:'279702978160-osf5uoulf9f8ghnc6qq8u6v3o1fs1oif.apps.googleusercontent.com'})
app.use(router)
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)
app.mount('#app')