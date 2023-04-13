import {createRouter,createWebHistory} from 'vue-router'
import ImageExtract from './components/ImageExtract.vue'
import ViewAll from './components/ViewAll.vue'
const router=createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/',name:'home',component:ImageExtract
    },
    {
        path:'/view-all',name:'view',component:ViewAll
    }
]
})
export default router