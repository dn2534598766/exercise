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

axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>console.log(res))

axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'pop',
    page:1
  }
}).then(res=>console.log(res))