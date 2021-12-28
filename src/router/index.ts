import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "../pages/Layout.vue";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: { path: "/home" },
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "About" */ "../pages/About.vue"),
      },
      {
        path: "404",
        name: "404",
        component: NotFound,
      },
    ],
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: "/404" };
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});
export default router;
