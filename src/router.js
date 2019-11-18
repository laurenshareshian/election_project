import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import Carousel from './components/Carousel.vue';
import RandomPick from './components/RandomPick.vue';
import Candidates from './components/Candidates.vue';

export default new VueRouter({
  routes: [
    { path: '/', components: {'Home': Home, 'Carousel': Carousel} },
    { path: '/aboutme', component: AboutMe },
    { path: '/candidates', component: Candidates },
    { path: '/randompick', component: RandomPick },
   // { path: '*', redirect: '/' }
  ]
});