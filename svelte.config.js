// import preprocess from 'svelte-preprocess'; //maybe not needed?
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
			paths: {
				base: dev ? '' : '/shantell-sans-specimen-2', // update repo name as needed
			},
		  })
		},
	extensions: [".svelte", ".md"], // <--
};

export default config;
