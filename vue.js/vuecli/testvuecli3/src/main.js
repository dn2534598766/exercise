import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.prototype.test=function(){
//   console.log('hhh')
// }
// Vue.prototype.name='humour'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index'

// new Vue({
//   router,
//   render:h=> h(App)
// }).$mount('#app')