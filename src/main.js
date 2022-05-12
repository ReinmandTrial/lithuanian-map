import Vue from 'vue'
import App from './App.vue'

import { VueHammer } from 'vue2-hammer'

Vue.config.productionTip = false

Vue.use(VueHammer, {
  pan: {
    threshold: 0
  }
})
VueHammer.config.pan = {
  threshold: 1
};
new Vue({
  render: h => h(App),
}).$mount('#app')