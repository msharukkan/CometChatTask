import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [sveltekit(), svgLoader({ defaultImport: 'raw' }), tailwindcss(),],
	server: {
		port: 8080
	}
});
