import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/index.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../views/edit/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
