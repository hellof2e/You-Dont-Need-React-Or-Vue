import { defineConfig } from 'vite';
import path from "path";
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';

const { resolve } = path;

export default defineConfig({
	resolve: {
		alias: [
			{ find: "@", replacement: resolve(__dirname, "./src") },
		],
	},
  plugins: [vitePluginMdToHTML()],
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
})