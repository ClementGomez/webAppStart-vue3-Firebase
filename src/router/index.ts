import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import { getCurrentUser } from '../firebase/config'

//routes

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
   }
]

// router

const router = createRouter({
  history: createWebHistory(),
  routes
})

//route guard

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await getCurrentUser()) {
    next('Login');
  } else {
    next();
  }
})


export default router