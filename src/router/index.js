import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Characters from "../views/Characters.vue";
import Locations from "../views/Locations.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/character",
    name: "character",
    component: Characters,
  },
  {
    path: "/location",
    name: "location",
    component: Locations,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
