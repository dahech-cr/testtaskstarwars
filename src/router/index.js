import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OnePerson from '../views/onePerson.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/one_person/:type',
    name: OnePerson,
    component: OnePerson,
  },
  {
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  },

]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router