import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from 'vue-router'
//rem插件
import 'lib-flexible'
//mint-ui框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//其他页面路由
import {routes} from './routes'
//mint-ui组件
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(VueRouter)
//实例化路由
const router = new VueRouter({
  routes,
  mode: 'history',
})
//挂载路由
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
