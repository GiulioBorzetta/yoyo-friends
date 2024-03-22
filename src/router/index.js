import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Card",
      name: "Card",
      component: () => import("../views/Card.vue"),
    },
    {
      path: "/video/:id",
      name: "VideoPage",
      component: () => import("../views/VideoPage.vue"),
    },
  ],
});

export default router;
