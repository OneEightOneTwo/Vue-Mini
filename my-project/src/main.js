import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


Vue.config.productionTip = false


// 暴露路由对象，为后续挂载容器做准备
// export default router

new Vue({
  router,
  el: "#app",
  render: h => h(App),
})
