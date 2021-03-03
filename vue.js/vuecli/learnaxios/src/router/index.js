import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

const routes = [

]
const router = new Router({
  routes
})
export default router

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>console.log(res))

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>console.log(res))
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
axios.all([
  axios({
    url:'/home/multidata'
  }),
  axios({
    url:'/home/data',
    params:{
      type:"sell",
      page:3
    }
  })]).then(axios.spread((res1,res2)=>{
    console.log(res1)
    console.log(res2)
  }))
