const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/user-account",
        component: () => import("pages/accountPage.vue"),
      },
      {
        path: "/violations",
        component: () => import("pages/violationsPage.vue"),
      },
      {
        path: "/incidents",
        component: () => import("pages/incidentsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
