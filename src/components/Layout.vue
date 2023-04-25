<script setup>
import { ref, computed } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Register from './Register.vue'
import Sidebar from './Sidebar.vue'
import router from '../router'
// const currentTab = ref('Register')
// const tabs = {
//   Register
// }
// const routes = {
//   // '/': Home,
//   // '/about': About,
//   '/register': Register
// }
// console.log(router)
// console.log(router.currentRoute)
// console.log(window)
// console.log(window.location.reload)
// alert(window)
// alert(window.location.pathname)
// alert(window.location.href)
const links = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: window.location.pathname,
    disabled: true,
    href: window.location.href.split('/'),
  },
  // {
  //   title: 'Link 2',
  //   disabled: true,
  //   href: 'breadcrumbs_link_2',
  // },  
]

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// element () {
//   return this.href ? 'a' : 'button';
// }
// {{$route.path}}
// {{ item.title }}



const currentView = computed(() => {
  // return routes[currentPath.value.slice(1) || '/'] || NotFound
  return currentTab
})
</script>

<template>
  <Header />    
  <main style="z-index: 1;">
    <v-breadcrumbs :items="links" style="margin-bottom: 0;margin-top: 5%;">
    
      <template v-slot:title="{ item }">
        {{ item.title }}
      </template>
    </v-breadcrumbs>
    <router-view/>
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: 10px 16px 10px 16px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: grey;
  }

  .logo {
    margin: 0 2rem 0% 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
