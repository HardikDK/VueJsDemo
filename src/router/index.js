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
  // mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home,
      meta: { breadCrumb: 'Home' },
      children: [
        {
          path: '/',
          // name: 'Home',
          component: Home,
          meta: { breadCrumb: 'Home' },          
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: { breadCrumb: 'About' },
        },
        {
          path: '/register',
          name: 'Register',
          // component: Register
          component: () => import('../components/Register.vue'),
          meta: { breadCrumb: 'Register' },
        },
        {
          path: '/non-existent-path',
          name: 'NotFound',
          component: NotFound,
          meta: { breadCrumb: 'NotFound' },
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: { breadCrumb: 'Login' },
        },
        // {
        //   path: '/',
        //   name: 'Logout',
        //   component: Home,
        //   meta: { breadCrumb: 'Logout' },
        // },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile,
          meta: { breadCrumb: 'Profile' },
        },
        {
          path: '/productslist',
          name: 'ProductsList',
          component: ProductsList,
          meta: { breadCrumb: 'ProductsList' },
        },
        {
          path: '/products',
          name: 'Products',
          component: Products,
          meta: { breadCrumb: 'Products' },
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart,
          meta: { breadCrumb: 'Cart' },
        }
      ]
    },
  ]
});



// const router = createRouter({
//   mode: "history",
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home,
//       meta: { breadCrumb: 'Home' },
//       children: [
//         {
//           path: '/about',
//           name: 'About',
//           // route level code-splitting
//           // this generates a separate chunk (About.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import('../views/AboutView.vue'),
//           meta: { breadCrumb: 'About' },
//         },
//         {
//           path: '/register',
//           name: 'Register',
//           // component: Register
//           component: () => import('../components/Register.vue'),
//           meta: { breadCrumb: 'Register' },
//         },
//         {
//           path: '/non-existent-path',
//           name: 'NotFound',
//           component: NotFound,
//           meta: { breadCrumb: 'NotFound' },
//         },
//         {
//           path: '/login',
//           name: 'Login',
//           component: Login,
//           meta: { breadCrumb: 'Login' },
//         },
//         {
//           path: '/',
//           name: 'Logout',
//           component: Home,
//           meta: { breadCrumb: 'Logout' },
//         },
//         {
//           path: '/profile',
//           name: 'Profile',
//           component: Profile,
//           meta: { breadCrumb: 'Profile' },
//         },
//         {
//           path: '/productslist',
//           name: 'ProductsList',
//           component: ProductsList,
//           meta: { breadCrumb: 'ProductsList' },
//         },
//         {
//           path: '/products',
//           name: 'Products',
//           component: Products,
//           meta: { breadCrumb: 'Products' },
//         },
//         {
//           path: '/cart',
//           name: 'Cart',
//           component: Cart,
//           meta: { breadCrumb: 'Cart' },
//         }
//       ]
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     },
//     {
//       path: '/register',
//       name: 'register',
//       // component: Register
//       component: () => import('../components/Register.vue')
//     },
//     {
//       path: '/non-existent-path',
//       name: 'NotFound',
//       component: NotFound
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/',
//       name: 'Logout',
//       component: Home
//     },
//     {
//       path: '/profile',
//       name: 'Profile',
//       component: Profile
//     },
//     {
//       path: '/productslist',
//       name: 'ProductsList',
//       component: ProductsList
//     },
//     {
//       path: '/products',
//       name: 'Products',
//       component: Products
//     },
//     {
//       path: '/cart',
//       name: 'Cart',
//       component: Cart
//     }
//   ]
// })


// const router = createRouter({
//   mode: "history",
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home,
//       meta: { breadCrumb: 'Home' },
//       children: [
//         {
//           path: '/about',
//           name: 'About',
//           // route level code-splitting
//           // this generates a separate chunk (About.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import('../views/AboutView.vue'),
//           meta: { breadCrumb: 'About' },
//         },
//         {
//           path: '/register',
//           name: 'Register',
//           // component: Register
//           component: () => import('../components/Register.vue'),
//           meta: { breadCrumb: 'Register' },
//         },
//         {
//           path: '/non-existent-path',
//           name: 'NotFound',
//           component: NotFound,
//           meta: { breadCrumb: 'NotFound' },
//         },
//         {
//           path: '/login',
//           name: 'Login',
//           component: Login,
//           meta: { breadCrumb: 'Login' },
//         },
//         {
//           path: '/',
//           name: 'Logout',
//           component: Home,
//           meta: { breadCrumb: 'Logout' },
//         },
//         {
//           path: '/profile',
//           name: 'Profile',
//           component: Profile,
//           meta: { breadCrumb: 'Profile' },
//         },
//         {
//           path: '/productslist',
//           name: 'ProductsList',
//           component: ProductsList,
//           meta: { breadCrumb: 'ProductsList' },
//         },
//         {
//           path: '/products',
//           name: 'Products',
//           component: Products,
//           meta: { breadCrumb: 'Products' },
//         },
//         {
//           path: '/cart',
//           name: 'Cart',
//           component: Cart,
//           meta: { breadCrumb: 'Cart' },
//         }
//       ]
//     },
//   ]
// })


// const router = createRouter({
//   mode: "history",
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'About',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       // component: Register
//       component: () => import('../components/Register.vue')
//     },
//     {
//       path: '/non-existent-path',
//       name: 'NotFound',
//       component: NotFound
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/',
//       name: 'Logout',
//       component: Home
//     },
//     {
//       path: '/profile',
//       name: 'Profile',
//       component: Profile
//     },
//     {
//       path: '/productslist',
//       name: 'ProductsList',
//       component: ProductsList
//     },
//     {
//       path: '/products',
//       name: 'Products',
//       component: Products
//     },
//     {
//       path: '/cart',
//       name: 'Cart',
//       component: Cart
//     }
//   ]
// })

export default router
