import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import './main.css';
import 'bootstrap'; 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/umd/popper'
import { BCarousel } from 'bootstrap-vue'
import { BCarouselSlide } from 'bootstrap-vue'
import Resource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
    
window.axios = require('axios');

Vue.use(Resource);

Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)

Vue.config.productionTip = false;
// step 1: tell Vue about the VueRouter
Vue.use(VueRouter);
Vue.component('RouterLink', Vue.component('router-link'));
Vue.component('RouterView', Vue.component('router-view'));

new Vue({
  // step 2: pass in router object
  router,
  render: h => h(App)
}).$mount('#app');