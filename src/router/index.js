import Vue from "vue";
import VueRouter from "vue-router";

import ChooseSide from "../components/ChooseSide.vue";
import PlayAsHunter from "../components/PlayAsHunter.vue";
import PlayAsDemon from "../components/PlayAsDemon.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    redirect: "/ChooseSide",
  },
  {
    path: "/ChooseSide",
    component: ChooseSide,
  },
  {
    path: "/PlayAsHunter",
    component: PlayAsHunter,
  },
  {
    path: "/PlayAsDemon",
    component: PlayAsDemon,
  }
];

export const router = new VueRouter({
  routes: routeList,
});
