import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlaylistView from "../views/PlaylistView.vue";
import EditView from "../views/EditView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/series/nova", component: PlaylistView },
  { path: "/series/:id", component: EditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
