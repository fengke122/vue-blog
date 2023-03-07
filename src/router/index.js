import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import userIndex from "@/views/userIndex.vue";
import UserDetil from '@/views/UserDetil';
import ManagerIndex from '@/views/ManagerIndex';
import UserList from '@/views/UserList';
import BlogsList from '@/views/BlogsList';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/userindex',
    name: 'userindex',
    component: userIndex
  },
  {
    path: '/userdetil',
    name: 'userdetil',
    component: UserDetil
  },
  {
    path: '/managerIndex',
    name: 'ManagerIndex',
    component: ManagerIndex,
    children:[
      {
        path:'',
        name:'UserList',
        component:UserList
      },
      {
        path:'blogsList',
        name:'BlogsList',
        component:BlogsList
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
