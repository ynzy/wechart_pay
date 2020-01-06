import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
// import activity from '../views/activity.vue'
// import pay from '../views/pay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: { title: '首页' }
  },
  {
    path: '/activity',
    name: 'activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/activity.vue'),
    meta: { title: '活动' }
  },
  {
    path: '/pay',
    name: 'pay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pay.vue'),
    meta: { title: '充值' }
  }
]

const router = new VueRouter({
  routes
})

export default router
