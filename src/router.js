import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage.vue"

const routes = [
  {
    path: "/main-page",
    name: "MainPage",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;