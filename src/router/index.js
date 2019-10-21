import Vue from 'vue'
import Router from 'vue-router'
import router_config from './router-config.js';

Vue.use(Router)
let routers= new Router({
  mode: 'history', // 默认 hash 模式
  // base: '/base/', // 页面基础路径
  routes: router_config
})

export default routers;

// routers.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
//       next()
//     } else {
//       // 未登录,跳转到登陆页面
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     if(sessionStorage.getItem("token") == 'true'){
//       next('/index/table');
//     }else{
//       next();
//     }
//   }
// })
