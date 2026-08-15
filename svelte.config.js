import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// Served from the repo root at mohammdbenni.me (a user site + custom
		// domain), so no base path. A project-site deploy would need '/<repo>'.
		paths: {
			base: ''
		},
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
