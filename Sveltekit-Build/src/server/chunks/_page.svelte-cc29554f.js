import { c as create_ssr_component, o as each, f as add_attribute, e as escape } from './ssr-3eccf1b3.js';
import { r as reports } from './reports-881f004a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row flex-wrap gap-4 p-4 justify-center">${each(reports, (report) => {
    return `<a class="card card-hover overflow-hidden w-modal-slim" data-sveltekit-preload-data="hover"${add_attribute("href", report.url, 0)}><header><div class="w-full aspect-[21/9] relative bg-[#526bf8] overflow-hidden"><div class="text font-bold text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px]">${escape(report.name)}</div> </div></header> <div class="p-4 space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-6huxvk">Summary</h3> <article><p>${escape(report.description)}</p> </article></div> <hr class="opacity-50"> </a>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cc29554f.js.map
