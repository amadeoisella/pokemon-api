import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/pokeapi",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/pokeapi",
      },
      {
        path: "pokeapi",
        component: () => import("@/views/PokeDex.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
