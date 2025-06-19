import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShoppingListView from "@/views/ShoppingListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lists/:id",
      name: "ShoppingListView",
      component: ShoppingListView,
    },
  ],
});

export default router;
