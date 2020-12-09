import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'
import router from './router'
import jQuery from 'jquery';
import store from './store'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.$ = window.jQuery = jQuery;
window.axios = axios;


require('@/store/subscriber')

axios.defaults.baseURL = 'http://localhost:8000/api'


Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token'))
.catch(err => console.log(err))
.finally(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
