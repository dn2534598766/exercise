import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:1000,
    students:[
      {id:100,name:'javascript',age:21},
      {id:101,name:'python',age:49},
      {id:102,name:'golang',age:16},
      {id:103,name:'ruby',age:20}
    ]
  },
  mutations:{
    addCount(state){
      state.counter++
    },
    subCount(state){
      state.counter--
    },
    increaseCount(state,count){
      state.counter+=count
    }
  },
  getters:{
    moreAgeStu(state){
      return function(age){
        return state.students.filter(s=>{
          return s.age>=age
        })
      }
    }
  }
})

export default store