import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@views/home/Home'
import Articles from '@views/articles/Articles'
import Author from '@/views/author/Author'
import Users from '@views/users/Users'
const routes=[
  {
    path:"/",
    redirect: '/home',
    meta:{
      title:'首页'
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },  
  {
    path:"/articles/:id",
    component:Articles,
    meta:{
      title:'所有帖子'
    }
  },
  {
    path:'/author',
    component:Author,
    meta:{
      title:"博主信息"
    }
  },
  {
    path:'/users',
    component:Users,
    meta:{
      title:"博主列表"
    }
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router



