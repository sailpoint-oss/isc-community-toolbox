const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.ico","SailPoint-Developer-Community-Lockup.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b81a31e7.js","app":"_app/immutable/entry/app.6c42c562.js","imports":["_app/immutable/entry/start.b81a31e7.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/singletons.47bc9baa.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.6c42c562.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/index.7b3d626a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-e9744a96.js')),
			__memo(() => import('./chunks/1-60dcc5a6.js')),
			__memo(() => import('./chunks/2-77089f36.js')),
			__memo(() => import('./chunks/3-d9f1aacb.js')),
			__memo(() => import('./chunks/4-44e1ab29.js')),
			__memo(() => import('./chunks/5-5a21d9d4.js')),
			__memo(() => import('./chunks/6-574c72b1.js')),
			__memo(() => import('./chunks/7-418cc4be.js')),
			__memo(() => import('./chunks/8-5a065195.js')),
			__memo(() => import('./chunks/9-f099c85b.js')),
			__memo(() => import('./chunks/10-9374670e.js')),
			__memo(() => import('./chunks/11-87a3e344.js')),
			__memo(() => import('./chunks/12-232a1e9d.js')),
			__memo(() => import('./chunks/13-5321d69a.js')),
			__memo(() => import('./chunks/14-4e6f7e19.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/sailpoint/cluster/[clusterID]",
				pattern: /^\/api\/sailpoint\/cluster\/([^/]+?)\/?$/,
				params: [{"name":"clusterID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-97bad773.js'))
			},
			{
				id: "/api/sailpoint/search",
				pattern: /^\/api\/sailpoint\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-6383650c.js'))
			},
			{
				id: "/api/sailpoint/search/[limit]",
				pattern: /^\/api\/sailpoint\/search\/([^/]+?)\/?$/,
				params: [{"name":"limit","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-6af7d2b0.js'))
			},
			{
				id: "/api/sailpoint/sourceAggEvents",
				pattern: /^\/api\/sailpoint\/sourceAggEvents\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-98cb6889.js'))
			},
			{
				id: "/api/sailpoint/sourceAggEvents/[sourceID]",
				pattern: /^\/api\/sailpoint\/sourceAggEvents\/([^/]+?)\/?$/,
				params: [{"name":"sourceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-bffb2e15.js'))
			},
			{
				id: "/api/sailpoint/sources",
				pattern: /^\/api\/sailpoint\/sources\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-61ca2e72.js'))
			},
			{
				id: "/api/sailpoint/sources/[limit]",
				pattern: /^\/api\/sailpoint\/sources\/([^/]+?)\/?$/,
				params: [{"name":"limit","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-4c27b61b.js'))
			},
			{
				id: "/api/sailpoint/source/[sourceID]",
				pattern: /^\/api\/sailpoint\/source\/([^/]+?)\/?$/,
				params: [{"name":"sourceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-b91d26ae.js'))
			},
			{
				id: "/callback",
				pattern: /^\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home/identity-inactive-but-has-access",
				pattern: /^\/home\/identity-inactive-but-has-access\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/home/missing-cloud-life-cycle-state",
				pattern: /^\/home\/missing-cloud-life-cycle-state\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/home/source-account-create-error",
				pattern: /^\/home\/source-account-create-error\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/home/source-aggregations",
				pattern: /^\/home\/source-aggregations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/home/source-delete-threshold",
				pattern: /^\/home\/source-delete-threshold\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/home/source-owner-configured",
				pattern: /^\/home\/source-owner-configured\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/home/sources",
				pattern: /^\/home\/sources\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/home/sources/[sourceID]",
				pattern: /^\/home\/sources\/([^/]+?)\/?$/,
				params: [{"name":"sourceID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/sailpoint/cluster/[clusterID]",
				pattern: /^\/sailpoint\/cluster\/([^/]+?)\/?$/,
				params: [{"name":"clusterID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-55408b6b.js'))
			},
			{
				id: "/sailpoint/search",
				pattern: /^\/sailpoint\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-6afa9b8d.js'))
			},
			{
				id: "/sailpoint/search/[limit]",
				pattern: /^\/sailpoint\/search\/([^/]+?)\/?$/,
				params: [{"name":"limit","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-4246c559.js'))
			},
			{
				id: "/sailpoint/sourceAggEvents",
				pattern: /^\/sailpoint\/sourceAggEvents\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-0a1cc55c.js'))
			},
			{
				id: "/sailpoint/sourceAggEvents/[sourceID]",
				pattern: /^\/sailpoint\/sourceAggEvents\/([^/]+?)\/?$/,
				params: [{"name":"sourceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-2955f0bd.js'))
			},
			{
				id: "/sailpoint/sources",
				pattern: /^\/sailpoint\/sources\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-9b776721.js'))
			},
			{
				id: "/sailpoint/sources/[limit]",
				pattern: /^\/sailpoint\/sources\/([^/]+?)\/?$/,
				params: [{"name":"limit","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-463772b0.js'))
			},
			{
				id: "/sailpoint/source/[sourceID]",
				pattern: /^\/sailpoint\/source\/([^/]+?)\/?$/,
				params: [{"name":"sourceID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-daf2b664.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
