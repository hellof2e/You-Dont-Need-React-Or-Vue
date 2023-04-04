import { Router } from '@vaadin/router'
import "@/components/Header"
import "./main.css"

const outlet = document.querySelector('#root');
export const router = new Router(outlet);

router.setRoutes([{
    path: '/',
    component: 'app-home', // custom element name
    action: async () => { await import('./views/index/index'); }
  }, {
    path: '/docs',
    component: 'app-docs',
    action: async () => { await import('./views/docs'); }
  },
]);