import { c as create_ssr_component, v as validate_component } from './ssr-3eccf1b3.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import { P as ProgressRadial } from './ProgressRadial-14a0db91.js';
import './alasql.fs-ab2a2e02.js';
import './index2-f081c4d4.js';
import './_commonjsHelpers-2155838d.js';
import 'fs';
import 'path';
import 'react-native-fs';
import 'stream';
import 'http';
import 'url';
import 'punycode';
import 'https';
import 'zlib';
import 'react-native-fetch-blob';

const css = {
  code: ".progress-bar.svelte-sfm816{padding-top:calc(50vh - 4.5rem - 200px);padding-left:calc(50% - 4.5rem)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><div class="p-4"><div class="flex justify-center mt-4 flex-col align-middle"><div class="text-2xl py-2 text-center" data-svelte-h="svelte-1wbzyk2">Listing of identities that are inactive but still have access in sources</div> ${`<div class="progress-bar svelte-sfm816">${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30",
      class: "progress-bar"
    },
    {},
    {}
  )}</div>`}</div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-002168fb.js.map
