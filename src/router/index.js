import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/pages/Search'
import Callcenter from '@/components/pages/Callcenter'
import CallcenterDetail from '@/components/pages/CallcenterDetail'
import BookingComplete from '@/components/pages/BookingComplete'

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
      path: '/ms/callcenter',
      name: 'CallCenter',
      component: Callcenter
    },
    {
      path: '/ms/callcenter/detail',
      name: 'CallCenterDetail',
      component: CallcenterDetail
    },
    {
      path: '/ms/callcenter/:booking_id',
      name: 'CallCenterDetailBooking',
      component: CallcenterDetail
    },
    {
      path: '/booking/complete',
      name: 'BookingComplete',
      component: BookingComplete
    },
    {
      path: '/booking/complete/:booking_id',
      name: 'BookingComplete',
      component: BookingComplete
    },
    {
      path: '/booking/:search_id/:location_id/:hotel_id/:gate_id/:room_id/:checkin/:checkout/:adults/:price',
      name: 'Booking',
      component: () => import('@/components/pages/Booking.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
  next()
})

export default router

// console.log({auth: bearer,
//   http: axiosDriver,
//   router: routerDriver})
/* eslint-disable no-new */
