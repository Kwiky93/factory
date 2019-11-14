import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:7070";
Vue.prototype.$axios = axios;

Vue.prototype.$webSocet = new WebSocket("ws://localhost:8080");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
