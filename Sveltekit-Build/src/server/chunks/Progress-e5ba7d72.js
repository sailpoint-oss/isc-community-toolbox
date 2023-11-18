import { c as create_ssr_component, v as validate_component } from './ssr-3eccf1b3.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import { P as ProgressRadial } from './ProgressRadial-14a0db91.js';

const css = {
  code: ".progress-bar.svelte-sfm816{padding-top:calc(50vh - 4.5rem - 200px);padding-left:calc(50% - 4.5rem)}",
  map: null
};
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="progress-bar svelte-sfm816">${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30",
      class: "progress-bar"
    },
    {},
    {}
  )} </div>`;
});

export { Progress as P };
//# sourceMappingURL=Progress-e5ba7d72.js.map
