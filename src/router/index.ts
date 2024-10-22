import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue")
  },
  { path: "/teams", component: () => import("@/views/TeamsView.vue") },
  { path: "/location", component: () => import("@/views/LocationView.vue") },
  { path: "/life-at-sabre", component: () => import("@/views/LifeAtSabreView.vue") },
  { path: "/how-we-hire", component: () => import("@/views/HowWeHireView.vue") },
  { path: "/students", component: () => import("@/views/StudentsView.vue") },
  { path: "/jobs", component: () => import("@/views/JobsView.vue") },
  { path: "/about", component: () => import("@/views/AboutView.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
