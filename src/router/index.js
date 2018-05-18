import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/pages/Search'

// import VueResource from 'vue-resource'

// Vue.use(VueResource)
// Vue.http.options.root = 'https://api-demo.websanova.com/api/v1'
//

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/ms/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/booking/:search_id/:location_id/:hotel_id/:gate_id/:room_id/:checkin/:checkout/:adults',
      name: 'Booking',
      component: () => import('@/components/pages/Booking.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router

// console.log({auth: bearer,
//   http: axiosDriver,
//   router: routerDriver})
/* eslint-disable no-new */
