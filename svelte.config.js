import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Remove the base path since we're deploying to the root of a custom domain
// const base = '/web';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},

	kit: {
		adapter: adapter({ fallback: '404.html' })
		// Remove the paths configuration since we're deploying to the root
		// paths: {
		//	base: base
		// }
	}
};

export default config;
