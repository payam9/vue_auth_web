import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyBfsGaNRQcssSib4akIDcl4AGb_T4WcLGQ',
  authDomain: 'vueproject-7cc4a.firebaseapp.com',
  databaseURL: 'https://vueproject-7cc4a.firebaseio.com',
  projectId: 'vueproject-7cc4a',
  storageBucket: 'vueproject-7cc4a.appspot.com',
  messagingSenderId: '370610522876'

})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
})
