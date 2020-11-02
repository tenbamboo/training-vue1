import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/',
    name: 'selectFood',
    component: () => import(/* webpackChunkName: "Foods" */ '../views/Foods.vue'),
  },
  {
    path: '/addFood',
    name: 'addFood',
    component: () => import(/* webpackChunkName: "AddFood" */ '../views/AddFood.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
