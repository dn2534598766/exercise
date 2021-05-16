import vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views//Home/Home')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/Profile/Profile')
const Category = () => import('../views/Category/category')

vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },


]
const router=new VueRouter({
    routes,
    mode:'history'
})

export default router