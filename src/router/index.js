import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import WebServer from '../components/Server'
import Contact from '../components/Contact'
import Help from '../components/Help'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/server',
      name: 'server',
      component: WebServer
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '*',
      redirect: '/home'  // 默认跳转路由
    }
  ]
})
