import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Emo from './components/Emo.vue'
import Emo2 from './components/Emo2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path:'/', component:Emo},
        {path:'/2', component:Emo2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
