import Vue from 'vue';
import { MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(MdField);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
