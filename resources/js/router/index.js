import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../pages/HomePage/index.vue"
import SettingsPage from "../pages/SettingsPage/index.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage,
    },
  ],
})

export default router
