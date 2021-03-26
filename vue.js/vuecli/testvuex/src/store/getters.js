  export default {
    moreAgeStu(state){
      return age=>{
        return state.students.filter(s=>s.age>=age)
      }
    }
  }
