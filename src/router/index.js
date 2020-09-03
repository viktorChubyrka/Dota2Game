import Vue from "vue";
import VueRouter from "vue-router";

import Promo from "../views/Promo.vue";
import Registration from "../views/Registration.vue";
import LogIn from "../views/LogIn.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import RecoweryPassword from "../views/RecoweryPassword.vue";
import PasswordResetSucces from "../views/PasswordResetSucces.vue";
import PersonalArea from "../views/PersonalArea";
import Profile from "../components/PersonalArea/Profile";
import Support from "../components/PersonalArea/Support";
import LoyalityProgram from "../components/PersonalArea/LoyalityProgram";
import Games from "../components/PersonalArea/Games";
import Money from "../components/PersonalArea/Money";
import Friends from "../components/PersonalArea/Friends";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Promo",
    component: Promo,
  },
  {
    path: "/registration/ref=:promo",
    name: "RegistrationPromo",
    component: Registration,
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
  {
    path: "/personalArea",
    name: "PersonalArea",
    component: PersonalArea,
    children: [
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "support:reportTopic",
        name: "Support",
        component: Support,
      },
      {
        path: "loyalityProgram",
        name: "LoyalityProgram",
        component: LoyalityProgram,
      },
      {
        path: "games",
        name: "Games",
        component: Games,
      },
      {
        path: "money",
        name: "Money",
        component: Money,
      },
      {
        path: "friends",
        name: "Friends",
        component: Friends,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
