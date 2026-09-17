import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-static builds plain HTML/JS files for GitHub Pages
			adapter: adapter({
				fallback: '404.html'
			}),
			// the site lives at USERNAME.github.io/my-vis-5609, but at the root during `npm run dev`
			paths: {
				base: command === 'serve' ? '' : '/my-vis-5609'
			}
		})
	]
}));
