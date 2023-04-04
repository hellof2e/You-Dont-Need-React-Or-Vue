import { defineConfig } from 'vite';
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';


export default defineConfig({
  plugins: [vitePluginMdToHTML()],
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
})

// import Markdown from 'vite-plugin-md'
// import code from '@yankeeinlondon/code-builder'
// import link from '@yankeeinlondon/link-builder'

// export default defineConfig({
//   plugins: [
//     Markdown({
//       headEnabled: true,
//       frontmatterDefaults: {
//         requireAuth: false,
//       },
//       style: {
//         baseStyle: 'github',
//       },
//       builders: [
//         link(),
//         code({
//           theme: 'base',
//         }),
//       ],
//     }),
//   ],
// })