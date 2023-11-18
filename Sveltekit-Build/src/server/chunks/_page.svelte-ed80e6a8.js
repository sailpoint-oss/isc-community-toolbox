import { c as create_ssr_component, o as each, e as escape, f as add_attribute } from './ssr-3eccf1b3.js';
import { g as getModalStore } from './stores-45fd0783.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import './index2-f081c4d4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4"><div class="flex justify-center flex-col align-middle"><table class="table"><thead data-svelte-h="svelte-g75gtt"><th>Name</th> <th>Description</th>  <th>Type</th> <th>Authoritative</th> <th>Healthy</th> <th></th></thead> <tbody>${each(data.sources, (source) => {
    return `<tr><td><p class="text-center">${escape(source.name)}</p></td> <td><p class="text-center">${escape(source.description)}</p></td>  <td><p class="text-center">${escape(source.type)}</p></td> <td><p class="text-center">${escape(source.authoritative ? "True" : "False")}</p></td> <td><p class="${"text-center font-bold " + escape(source.healthy ? "text-green-500" : "text-red-500", true)}">${escape(source.healthy ? "True" : "False")} </p></td> <td class="flex flex-col justify-center gap-1"><a${add_attribute("href", `/home/sources/${source.id}`, 0)} class="btn variant-filled-primary text-white" data-sveltekit-preload-data="hover">Open</a> <button class="btn variant-filled-primary text-white" data-svelte-h="svelte-9ysj5b">View
							</button></td> </tr>`;
  })}</tbody></table></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ed80e6a8.js.map
