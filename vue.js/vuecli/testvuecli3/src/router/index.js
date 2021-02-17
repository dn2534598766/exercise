import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'

const Home = ()=>import('../views/Home.vue')
const User = ()=>import('../views/User.vue')
const Introduction = ()=>import('../views/Introduction.vue')
const HomeMessage = ()=>import('../views/HomeMessage.vue')
const HomeNews = ()=>import('../views/HomeNews.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'message'
      },
      {
        path:'message',
        component: HomeMessage
      },
      {
        path:'news',
        component:HomeNews
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/user/:id',
    name:'User',
    component:User
  },
  {
    path:'/introduction',
    component:Introduction
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router


// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes=[

// ]

// const router = new VueRouter({
//   routes
// })
// export default router