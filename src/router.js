import {createRouter,createWebHistory} from 'vue-router'
import ImageExtract from './components/ImageExtract.vue'
import ViewAll from './components/ViewAll.vue'
import TheImg from './components/TheImg.vue'
import LogIn from './components/LogIn.vue'
const router=createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/',name:'home',component:ImageExtract
    },
    {
        path:'/view-all',name:'view',component:ViewAll
    },
    {
        path:'/view-img',name:'image',component:TheImg
    },
    {path:'/login',name:'login',component:LogIn}
]
})
export default router