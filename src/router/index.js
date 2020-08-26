
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Student from "../views/Student.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
<<<<<<< HEAD
    path: "/login",
    name: "Login",
    component: Login,
=======

    path: "/logout",
    name: "Logout",
    component: Logout,
>>>>>>> 51f97e4b95a39db1f49c1926c45ffef4d7b001ed
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
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
