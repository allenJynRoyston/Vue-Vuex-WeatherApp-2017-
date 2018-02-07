import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Forecast from '../components/Forecast.vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueResource);
Vue.component('PageHeader', require('../components/Header.vue'))
Vue.component('PageFooter', require('../components/Footer.vue'))


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast
    }
  ]
})
