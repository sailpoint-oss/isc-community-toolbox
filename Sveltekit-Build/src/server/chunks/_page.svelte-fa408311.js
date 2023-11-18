import { c as create_ssr_component, v as validate_component } from './ssr-3eccf1b3.js';
import { P as Progress } from './Progress-e5ba7d72.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import './alasql.fs-ab2a2e02.js';
import './ProgressRadial-14a0db91.js';
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

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4"><div class="flex justify-center mt-4 flex-col align-middle"><div class="text-2xl py-2 text-center" data-svelte-h="svelte-12wr2y6">Listing of identities that are missing the cloud life cycle state attribute</div> ${`${validate_component(Progress, "Progress").$$render($$result, {}, {}, {})}`}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fa408311.js.map
