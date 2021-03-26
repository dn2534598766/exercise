import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home.vue')
const Sort = ()=>import('../views/sort/Sort.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/profile.vue')

Vue.use(VueRouter)

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes
})

export default router















// import Vue from 'vue'
// import VueRouter from 'vue-router'

// // const originalPush = VueRouter.prototype.push

// // VueRouter.prototype.push = function push(location) {
// //   return originalPush.call(this, location).catch(err => err)
// // }

// const Home = ()=>import('../views/home/Home.vue')
// const Sort = ()=>import('../views/sort/Sort.vue')
// const Cart = ()=>import('../views/cart/Cart.vue')
// const Profile = ()=>import('../views/profile/Profile.vue')
// Vue.use(VueRouter)

// const routes = [
//   {
//     path:'',
//     redirect:'/home'
//   },
//   {
//     path: '/home',
//     component: Home,
    
//   },
//   {
//     path: '/sort',
//     component:Sort  
//   },
//   {
//     path:'/cart',
//     component:Cart
//   },
//   {
//     path:'/profile',
//     component:Profile,
//   }
// ]

// const router = new VueRouter({
//   routes,
//   mode:'history',
// })

// export default router