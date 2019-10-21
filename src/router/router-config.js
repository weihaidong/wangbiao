import index from '@/pages/index'
import login from '@/pages/login'
import errors from '@/pages/error'
let route=[
    {
        path: '*',
        component: errors,
        name: 'errors'
    },
    {
        path: '/',
        redirect: '/index',
        meta: {
          requireAuth: true
        }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'index',
      meta: {//否需要登录验证
        requireAuth: true
      },
      component: index,
      children: [ // 在 app 路由下，添加子路由
      
      ]
    }
  ]
  export default route