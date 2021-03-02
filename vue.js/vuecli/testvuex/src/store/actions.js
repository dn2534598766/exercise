  export default {
    aUpdataInfo(context,message){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updataInfo')
          console.log(message)
          resolve('1111111')
        },1000)
      })
    }
  }
 