import { c as create_ssr_component, b as subscribe } from './ssr-3eccf1b3.js';
import { p as page } from './stores2-39445ea0.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page);
  $$unsubscribe_page();
  return `WHOOPS! Inner`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-e8de01b5.js.map
