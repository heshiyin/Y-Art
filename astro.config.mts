import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://yart.netlify.app/',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
