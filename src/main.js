import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// import Router from 'vue-router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import BootstrapVue from 'bootstrap-vue'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import default

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import SsrCarousel from 'vue-ssr-carousel'
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import ssrCarouselCss from 'vue-ssr-carousel/index.css?inline'

// import Vue from 'vue'
// import VueAgile from 'vue-agile'
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
import VueSplide from '@splidejs/vue-splide';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router'

import './assets/main.css'

import cors from 'cors'

// import VueDump from 'vue-dump';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import VueBreadcrumbs from 'vue-2-breadcrumbs';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
// import Vuesax from 'vuesax'

import {  BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";




// createApp(App).mount('#app')
const app = createApp(App)


const vuetify = createVuetify({
  components,
  directives,
})

app.use(BreadcrumbPlugin);


// app.component('ssr-carousel')
// app.component('SsrCarousel')
// app.component('ssrCarouselCss')

// app.component('SplitCarousel')
// app.component('SplitCarouselItem')

// app.component('VueSlickCarousel')
// app.component('VueSlickCarousel', VueSlickCarousel)

// app.component('Splide', Splide)
// app.component('SplideSlide', SplideSlide)

app.use(router)
app.use(cors)
// app.use(axios())
// app.use(SplitCarousel)
// app.use(SplitCarouselItem)
// app.use(VueAgile)

// app.use(VueSlickCarousel)
// app.use( VueSplide );

app.use(vuetify)

app.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
// app.component 'ssr-carousel', SsrCarousel
// app.component 'ssr-carousel', SsrCarousel

app.mount('#app')