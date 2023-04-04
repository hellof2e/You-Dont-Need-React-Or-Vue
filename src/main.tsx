import { router } from "./routes"

router.setRoutes([{
    path: '/',
    component: 'app-home',
    action: async () => { await import('./views/index'); }
  }, {
    path: '/docs',
    component: 'app-home',
    action: async () => { await import('./views/index'); }
  },
]);
