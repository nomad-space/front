// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueAuth from '@websanova/vue-auth'
import bearer from '@websanova/vue-auth/drivers/auth/bearer.js'
import axiosDriver from '@websanova/vue-auth/drivers/http/axios.1.x.js'
import routerDriver from '@websanova/vue-auth/drivers/router/vue-router.2.x.js'
import VueConfigManager from 'vue-config-manager'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'
// import Jquery from 'jquery'
// import JqueryUI from 'jquery-ui'
/* eslint-disable */
// var $ = Jquery
// window.jQuery = Jquery

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-121617476-1',
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: !isProd, // default value
    trace: !isProd, // default value
    sendHitTask: isProd // default value
  }
})

Vue.use(VueConfigManager, {
  defaults: {
    api: {
      base: 'http://localhost:7784',
      search: 'http://localhost:7782'
    }
  },
  hosts: {
    'mvp.nomad.space': {
      api: {
        base: 'http://api.mvp.nomad.space',
        search: 'http://search.mvp.nomad.space'
      }
    }
  }
})

Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  },

  environment: {
    debug: false
  }
})

// Vue.prototype.$config = configManager.create(Vue, options)
// Object.defineProperty(Vue.prototype, '$host_search', { value: 'http://localhost:7783/' })
// Vue.prototype.$host_search = 'http://localhost:7783/'


Vue.use(VueAxios, axios)
// Vue.axios.defaults.baseURL = 'http://localhost:8080/v1'
Vue.axios.defaults.baseURL = Vue.$config('api.base')+'/v1'


Vue.config.productionTip = false

Vue.router = router

Vue.use(vueAuth, {
  auth: bearer,
  http: axiosDriver,
  router: routerDriver,
  rolesVar: 'role',
  tokenStore: ['localStorage', 'cookie'],
  // tokenStore: ['cookie'], // ['localStorage', 'cookie'],
  facebookOauth2Data: {
    clientId: '196729390739201'
  },
  googleOauth2Data: {
    clientId: '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com'
  },
  loginData: {
    url: 'auth/signin',
    method: 'POST',
    redirect: '/',
    // redirect: '/booking',
    fetchUser: true
  },
  registerData: {
    url: 'auth/signup',
    method: 'POST',
    redirect: '/login'
  },
  logoutData: {
    url: 'auth/signout',
    method: 'GET',
    redirect: '/',
    makeRequest: false
  },
  // oauth1Data:         {url: 'auth/login',         method: 'POST'},
  fetchData: {
    url: 'user/profile',
    method: 'GET',
    enabled: true
  }
  // refreshData:        {url: 'auth/refresh',       method: 'GET', enabled: true, interval: 30},
  // impersonateData:    {url: 'auth/impersonate',   method: 'POST', redirect: '/'},
  // unimpersonateData:  {url: 'auth/unimpersonate', method: 'POST', redirect: '/admin', makeRequest: false},

})

/* eslint-disable */
// const app = new Vue({
//   el: '#app',
//   router,
//   render: (h) => h(App)
// })
//
// Vue.router = router


// var component = require('./App.vue');
//
// Object.defineProperties(Vue.prototype, {
//   $hostsearch: {
//     get: function () {
//       return 'http://localhost:7783/';
//     }
//   }
// })

App.router = Vue.router;
// Object.defineProperty(Vue.prototype, '$host_search', { value: 'http://localhost:7783/' })

// Vue.prototype.$hostsearch = 'http://localhost:7783/'
new Vue(App).$mount('#app');

// Object.defineProperty(Vue.prototype, '$host_search', { value: 'http://localhost:7783/' })

// Object.defineProperties(Vue.prototype, {
//   $host_search: {
//     get: function () {
//       return 'http://localhost:7783/';
//     }
//   }
// })


