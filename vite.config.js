import { sveltekit } from '@sveltejs/kit/vite';
import svelteMd from "vite-plugin-svelte-md";

// import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		svelteMd(), // <--
		sveltekit(),
		imagetools(),
	]
};

export default config;
