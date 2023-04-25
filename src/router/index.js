import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import Profile from '../components/Profile.vue'
import ProductsList from '../components/ProductsList.vue'
import Products from '../components/Products.vue'
import Sidebar from '../components/Sidebar.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Category from '../components/Category.vue'
import Cart from '../components/Cart.vue'

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // component: Register
      component: () => import('../components/Register.vue')
    },
    {
      path: '/non-existent-path',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Logout',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/productslist',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
