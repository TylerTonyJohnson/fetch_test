export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.j8_S2pVR.js","app":"_app/immutable/entry/app.16rteq2N.js","imports":["_app/immutable/entry/start.j8_S2pVR.js","_app/immutable/chunks/entry.L662WOc1.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.16rteq2N.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.D7UZ3tYN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
