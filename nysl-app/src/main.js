import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let firebaseConfig  = {
  apiKey: "AIzaSyA6wff5hwhcjNWUDn_bG5FjUlVAx9tbmWg",
  authDomain: "nysl-official.firebaseapp.com",
  databaseURL: "https://nysl-official.firebaseio.com",
  projectId: "nysl-official",
  storageBucket: "nysl-official.appspot.com",
  messagingSenderId: "560305134204",
  appId: "1:560305134204:web:54c4207b5bb8d4f1"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
