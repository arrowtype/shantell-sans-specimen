import { sveltekit } from '@sveltejs/kit/vite';
import svelteMd from "vite-plugin-svelte-md";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		svelteMd(), // <--
		sveltekit(),
	]
};

export default config;
