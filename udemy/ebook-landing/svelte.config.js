import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/adapter-vercel').Config} */


export default {
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
};

export const config = {
	runtime: 'nodejs20.x'
};