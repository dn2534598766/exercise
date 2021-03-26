import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import {request} from '../network/request'
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
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([
//   axios({
//     url:'/home/multidata'
//   }),
//   axios({
//     url:'/home/data',
//     params:{
//       type:"sell",
//       page:3
//     }
//   })]).then(axios.spread((res1,res2)=>{
//     console.log(res1)
//     console.log(res2)
//   }))
// request({
//   url:'/home/multidata'
// })
// .then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })
// request({
//   url:'/home/data'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

// request({
//   url:'/home/multidata'
// },
//   res=>{
//     console.log(res)
//   },
//   err=>{
//     console.log(err)
// })

// const config = {
//   url:'/home/multidata',
//   success:(res)=>{
//     console.log(res)
//   },
//   failure:(err)=>{
//     console.log(err)
//   }
// }
// request(config)

request({
  url:'/home/multidata'
},
res=>{
  console.log(res)
},
err=>{
  console.log(err)
}
)

// request({
//   url:'/home/multidata',
//   success(res){
//     console.log(res)
//   },
//   failure(err){
//     console.log(err)
//   }
// })

// request({
//   url:'/home/multidata',
//   success:res=>{
//     console.log(res)
//   },
//   failure:err=>{
//     console.log(err)
//   }
// })