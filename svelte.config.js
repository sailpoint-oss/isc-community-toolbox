import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), vitePreprocess({})],

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false,
		},
		// prerender: { entries: [] },
	},
};

export default config;
