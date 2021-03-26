import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import moduleA from './moduleA'
import mutations from './mutations'

const state = {
  counter:1000,
  students:[
    {id:100,name:'javascript',age:21},
    {id:101,name:'python',age:49},
    {id:102,name:'golang',age:16},
    {id:103,name:'ruby',age:20}
  ],
  info:{
    name:'jay',
    age:59,
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA
  },
  
})

export default store