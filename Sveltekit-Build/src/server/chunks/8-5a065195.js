const load = async ({ fetch }) => {
  const search = {
    indices: ["identities"],
    query: {
      query: `NOT _exists_:attributes.cloudLifecycleState`
    },
    sort: ["name"]
  };
  const response = fetch("/api/sailpoint/search", {
    method: "POST",
    body: JSON.stringify(search),
    headers: {
      "content-type": "application/json"
    }
  });
  return { response };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fa408311.js')).default;
const universal_id = "src/routes/home/missing-cloud-life-cycle-state/+page.ts";
const imports = ["_app/immutable/nodes/8.c90b853f.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/index.7b3d626a.js","_app/immutable/chunks/Progress.f79dd2c2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ae9fcbec.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/Table.f5db4492.js","_app/immutable/chunks/each.ac7da970.js","_app/immutable/chunks/alasql.min.1f65b74d.js"];
const stylesheets = ["_app/immutable/assets/7.5326dc8c.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-5a065195.js.map
