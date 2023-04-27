<script setup>
// <script>
import { ref, computed } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Register from './Register.vue'
import Sidebar from './Sidebar.vue'
import router from '../router'

//  style="margin-bottom: 0;margin-top: 5%;"

//  {{idx}}{{Object.keys(this.$route.matched).length-1}} 

// :items="links" 

//  style="margin-bottom: 100%;"


</script>

<template>
  <Header />    
  <div style="margin-bottom: 100%;bottem:75%;margin-top: 5%;right: 2%;">
    <v-breadcrumbs style="position:fixed;">
      <template v-for="(matched, idx) in this.$route.matched"
        :key="idx">
        {{ matched.name }}
        <span v-if="idx != Object.keys(this.$route.matched).length - 1"> / </span>
      </template>
    </v-breadcrumbs>
  </div>
  <main style="z-index: 1;">
    <router-view/>
  </main>
  <Footer />
</template>

<style scoped>


.breadcrumb {
    position: fixed;
    top: 40px;
    width: 100%;
}


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
