import adapter from '@sveltejs/adapter-auto';
import adapterNetlify from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterNetlify()
	},
	extensions: [".svelte", ".md"], // <--
};

export default config;
