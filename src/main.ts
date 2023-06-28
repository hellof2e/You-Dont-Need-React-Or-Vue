import { Router } from '@vaadin/router'

const outlet = document.querySelector('#root');
export const router = new Router(outlet);

router.setRoutes([{
    path: '/',
    component: 'app-home', // custom element name
    action: async () => { await import('./views/home/index'); }
  }, {
    path: '/docs',
    component: 'app-docs',
    action: async () => { await import('./views/docs'); }
  },
]);