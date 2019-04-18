import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)

// 首页
import Home from './pages/Home.vue';
import Tantan from './pages/Home/Tantan.vue';
import Information from "./pages/Home/Information.vue";
import FriendsCircle from "./pages/Home/FriendsCircle.vue";
import SettingUp from "./pages/Home/SettingUp.vue";
//jQuery组件
import $ from "vue-jquery";

Vue.use(VueRouter);

Vue.use($);



// 定义路由
const router = new VueRouter({
    routes: [
        {
            path: '/home', component: Home, name: 'home',
            children: [
                { path: 'tantan', component: Tantan, name: 'tantan', },
                { path: 'information', component: Information, name: 'information', },
                { path: 'friendsCircle', component: FriendsCircle, name: 'friendsCircle', },
                { path: 'settingUp', component: SettingUp, name: 'settingUp', }
            ]
        },
        { path: "/", redirect: '/home/tantan' },
    ],
    mode: "history"
})

// 暴露路由对象，为后续挂载容器做准备
export default router