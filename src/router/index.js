import Vue from "vue";
import VueRouter from "vue-router";

import Promo from "../views/Promo.vue";
import Registration from "../views/Registration.vue";
import LogIn from "../views/LogIn.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import RecoweryPassword from "../views/RecoweryPassword.vue";
import PasswordResetSucces from "../views/PasswordResetSucces.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Promo",
    component: Promo,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/recoweryPassword/:email/:date",
    name: "RecoweryPassword",
    component: RecoweryPassword,
  },
  {
    path: "/passwordResetSucces",
    name: "PasswordResetSucces",
    component: PasswordResetSucces,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
