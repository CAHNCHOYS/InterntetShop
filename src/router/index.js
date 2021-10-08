import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/mainPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "main-layout" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
