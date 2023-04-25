import { Router } from '@vaadin/router'
import "@/components/Header"
import "./main.css"

const outlet = document.querySelector('#root')
export const router = new Router(outlet)

const modulesPage = (import.meta as any).glob(
  "/src/docs/**/**.md"
)

console.log(modulesPage, 22)

const pageRouter = []
for(const path in modulesPage) {
  const name = (/docs\/(.*)\/*.md/.exec(path) as any[])[1]

  console.log(name,  modulesPage[path]);
  pageRouter.push({
    path: `/${name}`,
    // component: `app-${name}`, // custom element name
    // action: () => {
    //   const node = document.createElement('app-home');
    //   node.setAttribute('path', path);
    //   return node;
    // },
    action: async () => {  
      const md = await modulesPage[path]();
      const node = document.createElement('div');
      node.innerHTML = md.default;
      return node;
    }
  })
}


// class UserCard extends HTMLElement {
//   constructor() {
//       super();11+


      
//       var el = document.createElement('p');
//       el.classList.add('name');
//       el.innerText = 'User Name';
      
//       this.append(el);
//   }

// }
// window.customElements.define('app-home', UserCard);

import TestHTML from "./defining.md"

router.setRoutes(pageRouter)

router.setRoutes([{
    path: '/',
    component: 'app-home', // custom element name
    action: async () => { await import('./views/index/'); }
  }, {
    path: '/docs',
    component: 'app-docs',
    action: async () => { await import('./views/docs'); }
  },
  ...pageRouter,
]);