import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "home",
    component: Home
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/tab",
    component: () => import("../views/Tab.vue")
  },
  {
    path: "/tab2",
    component: () => import("../views/Tab2.vue")
  },
  {
    path: "/myhome",
    component: () => import("@/views/myhome/index.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
