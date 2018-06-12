import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
