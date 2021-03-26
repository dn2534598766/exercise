import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:id',
    name:'User',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/introduction',
    component:Introduction,
    meta:{
      title:'简介'
    },
    beforeEnter:(to,from,next)=>{
      console.log(from)
      next()
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})
router.beforeEach((to,from,next)=>{
  next()
  document.title=to.matched[0].meta.title
})
// router.afterEach((to,from)=>{
//   console.log(to,from)
// })
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