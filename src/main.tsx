import { router } from "./routes"
import "./main.css"

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
