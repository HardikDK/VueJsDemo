<script setup>
// <script>
import { ref, computed } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Register from './Register.vue'
import Sidebar from './Sidebar.vue'
import router from '../router'
// import Crumbs from './Crumbs.vue'
// const currentTab = ref('Register')
// export default {
// export  {
//   data() {
//     return {
//       productId: sessionStorage.productId,
//       products: this.products,
//       CartProducts: sessionStorage.getItem('CartProducts'),
//       length: sessionStorage.getItem('CartProductsLength'),
//       links: [
//         {
//           title: 'Home',
//           disabled: false,
//           href: '/',
//         },
//         {
//           // title: window.location.pathname,
//           title: window.location.pathname.split('/')[1],
//           disabled: true,
//           href: window.location.href.split('/'),
//         },
//         // {
//         //   title: 'Link 2',
//         //   disabled: true,
//         //   href: 'breadcrumbs_link_2',
//         // },  
//       ]

//     };
//     // alert(typeof(this.CartProducts));
//   },
//   mounted () {
//     // alert(typeof(this.CartProducts));
//     console.log('CartProducts', JSON.parse(this.CartProducts));
//     this.products = JSON.parse(this.CartProducts);
//     // alert(this.products.length);
//   },
//   methods:{
//     RemoveCart(product, id){
//       // // alert('RemoveCart')
//       // // JSON.parse(this.CartProducts).pop(product)
//       // // this.products.pop(product)
//       // this.products.splice(length, product);
//       // // sessionStorage.CartProductsLength = '';
//       // // sessionStorage.CartProductsLength -= 1;
//       // sessionStorage.CartProductsLength = sessionStorage.CartProductsLength >= 0 ? sessionStorage.CartProductsLength - 1 : '';
//       // // this.products = JSON.parse(this.CartProducts);
//       // // sessionStorage.clear();
//       // // window.location = '/products';
//       // window.location.reload();
//     },
//   }
// };

// const tabs = {
//   Register
// }
// const routes = {
//   // '/': Home,
//   // '/about': About,
//   '/register': Register
// }
// console.log(router)
console.log(router.currentRoute)
// console.log(window)
console.log(location)
// console.log(window.location.reload)
// alert(window)
// alert(window.location.pathname)
// alert(window.location.href)

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
// const currentView = mounted(() => {
  // return routes[currentPath.value.slice(1) || '/'] || NotFound
  // return links;
});

console.log(window.history.state.current)
console.log(window.history.state)
console.log(window.history)
// alert(router.currentRoute._value.fullPath)
// alert(router.currentRoute._rawValue.path)
// alert(router.currentRoute._value.name)
// alert(router.currentRoute._rawValue.name)
// alert(typeof(router.currentRoute));
console.log(router.currentRoute);
// console.log(JSON.parse(router.currentRoute));
// const currentRouteURL = JSON.parse(router.currentRoute);
// console.log(currentRouteURL)
// alert(typeof(currentRouteURL))
const links = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  // {
  //   // title: window.location.pathname,
  //   // title: window.location.pathname.split('/')[1],
  //   // title: location.pathname.split('/')[1],
  //   // title: router.currentRoute._value.fullPath.split('/')[1],
  //   // title: router.currentRoute._rawValue.path.split('/')[1],
  //   // title: router.name,
  //   title: window.history.state.current.split('/')[1],
  //   disabled: true,
  //   href: window.location.href.split('/'),
  // },
  // {
  //   title: 'Link 2',
  //   disabled: true,
  //   href: 'breadcrumbs_link_2',
  // },  
]

 // style="margin-bottom: 0;margin-top: 5%;"
</script>

<template>
  <Header />    
  <main style="z-index: 1;">
    <v-breadcrumbs :items="links" style="margin-bottom: 0;margin-top: 5%;">
      <span v-for="(matched, idx) in this.$route.matched"
        :key="idx">
        <a 
        :href="matched.path">
        {{ matched.name }}
        </a>{{idx}}{{Object.keys(this.$route.matched).length}}{{Object.keys(this.$route.matched).length-1}}
        <span v-if="idx != Object.keys(this.$route.matched).length - 1"> / </span>
        </span>
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
