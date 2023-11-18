const load = async ({ fetch }) => {
  const sources = (await fetch("/api/sailpoint/sources")).json();
  return { sources };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ed80e6a8.js')).default;
const universal_id = "src/routes/home/sources/+page.ts";
const imports = ["_app/immutable/nodes/13.dcd76235.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/each.ac7da970.js","_app/immutable/chunks/index.7b3d626a.js","_app/immutable/chunks/stores.dc566077.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ae9fcbec.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=13-5321d69a.js.map
