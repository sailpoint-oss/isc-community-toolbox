import { c as create_ssr_component, v as validate_component } from './ssr-3eccf1b3.js';
import { P as Progress } from './Progress-e5ba7d72.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import './ProgressRadial-14a0db91.js';
import './index2-f081c4d4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4"><div class="flex justify-center mt-4 flex-col align-middle"><div class="text-2xl py-2 text-center" data-svelte-h="svelte-1hwf81y">Listing of sources and their most recent aggregation events</div> ${`${validate_component(Progress, "Progress").$$render($$result, {}, {}, {})}`}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-728c7b11.js.map
