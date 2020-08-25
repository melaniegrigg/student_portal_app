
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Logout from "../views/Logout.vue";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {

    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
  },
];

    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  }


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
