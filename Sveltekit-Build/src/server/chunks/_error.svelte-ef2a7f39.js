import { c as create_ssr_component, b as subscribe } from './ssr-3eccf1b3.js';
import { p as page } from './stores2-39445ea0.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page);
  $$unsubscribe_page();
  return `WHOOPS!`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-ef2a7f39.js.map
