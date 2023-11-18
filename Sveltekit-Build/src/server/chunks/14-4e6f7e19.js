const load = async ({ fetch, params }) => {
  const sourceData = (await fetch(`/api/sailpoint/sourceAggEvents/${params.sourceID}`)).json();
  return { sourceData };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f644b717.js')).default;
const universal_id = "src/routes/home/sources/[sourceID]/+page.ts";
const imports = ["_app/immutable/nodes/14.6d01e554.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/index.7b3d626a.js","_app/immutable/chunks/each.ac7da970.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ae9fcbec.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/CodeBlock.f9dc51ff.js","_app/immutable/chunks/spread.8a54911c.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=14-4e6f7e19.js.map
