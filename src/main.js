import Vue from 'vue';
import { VTooltip } from 'v-tooltip';
import 'normalize.css';

Vue.directive('tooltip', VTooltip);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
