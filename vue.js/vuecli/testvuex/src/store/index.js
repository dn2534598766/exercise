import Vue from 'vue'
import Vuex from 'vuex'

import {INCREASECOUNT} from './mutations-type'

Vue.use(Vuex)

const moudleA = {
  state:{
    name:'lishan',
    age:40
  },
  mutations:{
    fullName(state){
      state.name+='1111111'
    }
  },
  actions:{},
}
const store = new Vuex.Store({
  state:{
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
  },
  mutations:{
    addCount(state){
      state.counter++
    },
    subCount(state){
      state.counter--
    },
    [INCREASECOUNT](state,count){
      state.counter+=count
    },
    addStudent(state,student){
      state.students.push(student)
    },
    addAttribute(state){
      Vue.set(state.info,"sex","男")
    },
    deleteAttribute(state){
      Vue.delete(state.info,"age")
    },
    updataInfo(state){
      Vue.set(state.info,'age',20)
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
  },
  actions:{
    aUpdataInfo(context,message){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updataInfo')
          console.log(message)
          resolve('1111111')
        },1000)
      })
    }
  },
  modules:{
    a:moudleA
  }
})

export default store