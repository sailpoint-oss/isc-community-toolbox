const load = async ({ fetch }) => {
  const aggData = (await fetch("/api/sailpoint/sourceAggEvents")).json();
  return { aggData };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-728c7b11.js')).default;
const server_id = "src/routes/home/source-aggregations/+page.server.ts";
const imports = ["_app/immutable/nodes/10.85c4084a.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/index.7b3d626a.js","_app/immutable/chunks/Progress.f79dd2c2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ae9fcbec.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/Table.f5db4492.js","_app/immutable/chunks/each.ac7da970.js"];
const stylesheets = ["_app/immutable/assets/7.5326dc8c.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-9374670e.js.map
