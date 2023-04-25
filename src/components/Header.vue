<script>
import { ref, computed } from 'vue'
import Register from './Register.vue'
import Login from './Login.vue'
import Logout from './Logout.vue'
import Profile from './Profile.vue'
import ProductsList from './ProductsList.vue'
import Products from './Products.vue'
import Sidebar from './Sidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Category from './Category.vue'
import Cart from './Cart.vue'
import router from '../router'
// const currentView = ref('Register')
// const routes = {
//   // '/': Home,
//   // '/about': About,
//   '/register': Register
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// console.log(router.currentRoute._value.path)


// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })
// console.log(window.auth_user)
let name;
export default {
  computed: {
    userType (){
      // return sessionStorage.getItem('email')
      // return sessionStorage.getItem('name')
      // return window.sessionStorage.getItem('email')
      name = window.sessionStorage.getItem('name')
      return name;
      // return window.sessionStorage.getItem('name')
    },
    // loggedin: true,
    data() {
      return {
        // userLoggedIn: false
        userLoggedIn: name ? true : false,
        products: this.products,
        length: this.length,
        CartProducts: sessionStorage.getItem('CartProducts'),        
      };
    },
    mounted () {
      console.log('CartProducts', JSON.parse(this.CartProducts));
      this.products = JSON.parse(this.CartProducts);
      this.length = this.products.length;
      alert(this.length);
      console.log(this.length);
    },
  },
  methods: {
    logout() {
      // alert('l')
      sessionStorage.clear()
      localStorage.clear()
      window.location = '/'
    },
    count() {
      this.length = this.products.length;
    }
  }
}
</script>

<template>
  <header class="header" style="z-index: 2;">
	<img alt="Vue logo" class="logo" src="../assets/karavya.png" width="50" height="50" />
    <div class="wrapper">
  	  <router-link to="/">Home</router-link>   
      <router-link to="/products">Products</router-link> 
  	  <router-link to="/about">About</router-link> 
  	  <router-link to="/non-existent-path">Link</router-link>
      <router-link to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
          <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
        </svg>{{length}}
      </router-link>
    </div>
    <a :title="userType">Profile</a> 
    <div class="wrapper" v-if="userType">
      <p>{{userType}}</p> 
      <router-link to="/profile" :title="userType">Profile</router-link>
      <button @click="logout" class="btn link logout">Logout</button>
    </div>
    <div class="wrapper" v-else>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a{
  padding: 5px;
  color: white !important;
}

p{
  padding: 5px;
  color: white !important;
}

.link {
  padding: 5px;
  color: white !important;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 25rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    margin: 0 25rem 0 0;
  }

  p{
  	margin: 0 2rem 0 0;
  	color: white;
  }

  a{
  	padding: 5px;
  	color: white;
  }
}
</style>
