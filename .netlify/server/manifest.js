export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/shantell-martin-by-Michelle-Mosqueda1.jpg","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","fonts/.DS_Store","fonts/ShantellSans[BNCE,IRGL,TRAK,ital,wght].woff2","fonts/ShantellSans[BNCE,IRGL,TRAK,wght].woff2","fonts/Shantell_Sans-Normal-Regular_Italic.woff2","global.css","mstile-144x144.png","mstile-150x150.png","mstile-310x150.png","mstile-310x310.png","mstile-70x70.png","safari-pinned-tab.svg","shantell_sans-opengraph.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".css":"text/css",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-32078940.js","imports":["_app/immutable/start-32078940.js","_app/immutable/chunks/index-d85eae44.js","_app/immutable/chunks/singletons-bd00e7f5.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "process",
				pattern: /^\/process\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
