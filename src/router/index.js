import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Category from '@/pages/category/category'
import Cart from '@/pages/cart/cart'
import My from '@/pages/my/my'
import List from '@/pages/list/list'
import Login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
