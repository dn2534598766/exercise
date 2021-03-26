import {INCREASECOUNT} from './mutations-type'

export default {
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
  }
