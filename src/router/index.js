import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from 'App.vue'
import Home from '../components/HotelMenu.vue'
import FoodCart from '../views/FoodCart.vue'
import ContactInfo from '../views/ContactInfo.vue'
import CustomerDetails from '../views/CustomerDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home ,
  },
  {
    path: '/food-cart',
    name: 'FoodCart',
    component: FoodCart ,
  },
  {
    path: '/contact-info',
    name: 'ContactInfo',
    component: ContactInfo,
  },
  {
    path: '/customer-details',
    name: 'CustomerDetails',
    component: CustomerDetails,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
  