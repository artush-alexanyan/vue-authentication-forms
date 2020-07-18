import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(axios)


Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBW1C25emtnf0vy7B-vrD0c7lncgpclFv4",
    authDomain: "vue-firebase-axios-7ba29.firebaseapp.com",
    databaseURL: "https://vue-firebase-axios-7ba29.firebaseio.com",
    projectId: "vue-firebase-axios-7ba29",
    storageBucket: "vue-firebase-axios-7ba29.appspot.com",
    messagingSenderId: "339788433909",
    appId: "1:339788433909:web:79ae286bf4eec29ad738bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
