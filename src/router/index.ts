import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main-index",
    component: () => import("@/views/main/index.vue"),
  },
  {
    path: "/about",
    name: "about-index",
    component: () => import("@/views/about/index.vue"),
  },
  {
    path: "/tour",
    name: "about-tour",
    component: () => import("@/views/about/tour.vue"),
  },
  {
    path: "/rooms",
    name: "rooms-index",
    component: () => import("@/views/rooms/index.vue"),
  },
  {
    path: "/service",
    name: "service-index",
    component: () => import("@/views/service/index.vue"),
  },
  {
    path: "/reservation",
    name: "reservation-index",
    component: () => import("@/views/reservation/index.vue"),
  },
  {
    path: "/location",
    name: "location-index",
    component: () => import("@/views/location/index.vue"),
  },
  {
    path: "/customer",
    name: "customer-index",
    component: () => import("@/views/customer/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
