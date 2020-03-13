// グローバル登録
import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./LikeNumber.vue";

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
