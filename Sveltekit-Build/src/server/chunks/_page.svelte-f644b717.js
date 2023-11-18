import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, b as subscribe, s as setContext, d as createEventDispatcher, i as getContext, q as compute_rest_props, g as spread, r as escape_attribute_value, h as escape_object, t as is_promise, n as noop, o as each, p as compute_slots } from './ssr-3eccf1b3.js';
import { p as prefersReducedMotionStore } from './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import { w as writable } from './index2-f081c4d4.js';
import { C as CodeBlock, s as slide } from './CodeBlock-8434d487.js';

const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$2 = "";
const cControl = "text-start w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel$1 = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id: `accordion-control-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase$2} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel$1} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}" id="${"accordion-control-" + escape(id, true)}"${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)} aria-labelledby="${"accordion-control-" + escape(id, true)}">${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `  <div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group"> <div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>  ${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}${add_attribute("title", title, 0)}> <div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
function formatDate(date) {
  if (!date)
    return "N/A";
  return new Date(date).toLocaleString();
}
function formatStatusColor(status) {
  switch (status) {
    case "HEALTHY":
      return "text-green-500";
    case "WARNING":
      return "text-red-500";
    case "FAILED":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
}
const VACluster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cluster } = $$props;
  if ($$props.cluster === void 0 && $$bindings.cluster && cluster !== void 0)
    $$bindings.cluster(cluster);
  return `<h2 data-svelte-h="svelte-1swdga0">Virtual Appliance Cluster</h2> <p>Name: ${escape(cluster?.name || "Empty")}</p> <p>ID: ${escape(cluster?.id || "Empty")}</p> ${cluster?.id ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="py-2 placeholder"></div> `;
    }
    return function(clusterResponse) {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ` <div class="py-2 placeholder"></div> `;
        }
        return function(clusterInfo) {
          return ` <p>Pod: ${escape(clusterInfo.pod)}</p> <p>Description: ${escape(clusterInfo.description ? clusterInfo.description : "Empty")}</p> <p>CCG Version: ${escape(clusterInfo.ccgVersion)}</p> <p>Debugging Enabled: <span${add_attribute(
            "class",
            clusterInfo.configuration?.debug === "true" ? "text-green-500" : "text-red-500",
            0
          )}>${escape(clusterInfo.configuration.debug === "true" ? "True" : "False")}</span></p> <p>Status: <span${add_attribute("class", formatStatusColor(clusterInfo.status), 0)}>${escape(clusterInfo.status)}</span></p> <p>Alert: <span${add_attribute("class", formatStatusColor(clusterInfo.status), 0)}>${escape(clusterInfo.alertKey)}</span></p> <div class="py-2"><p class="underline" data-svelte-h="svelte-1s5zmum">Client IDs</p> <ul class="list">${each(clusterInfo.clientIds, (client, index) => {
            return `<li><span>${escape(index + 1)}.</span> <span class="flex-auto">${escape(client)}</span> </li>`;
          })}</ul></div> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                content: () => {
                  return `${validate_component(CodeBlock, "CodeBlock").$$render(
                    $$result,
                    {
                      code: JSON.stringify(clusterInfo, null, 4),
                      language: "json"
                    },
                    {},
                    {}
                  )} `;
                },
                summary: () => {
                  return `Raw Data`;
                }
              })}`;
            }
          })} `;
        }(__value2);
      }(clusterResponse.json())} `;
    }(__value);
  }(fetch(`/api/sailpoint/cluster/${cluster?.id}`))}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let tabSet = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-4 flex flex-col gap-4"><div class="card p-4"><h1 class="text-2xl font-bold">${escape(data.sourceData.source.name)}</h1> <p class="">${escape(data.sourceData.source.description)}</p> <p class="">ID: ${escape(data.sourceData.source.id)}</p> <p class="">Type: ${escape(data.sourceData.source.type)}</p> <p class="">Authoritative: ${escape(data.sourceData.source.authoritative ? "True" : "False")}</p> <p>Healthy:
			<span${add_attribute(
      "class",
      data.sourceData.source.healthy ? "text-green-500" : "text-red-500",
      0
    )}>${escape(data.sourceData.source.healthy ? "True" : "False")}</span></p></div> <div class="card p-4">${validate_component(VACluster, "VaCluster").$$render($$result, { cluster: data.sourceData.source.cluster }, {}, {})}</div> <div class="card p-4"><h2 data-svelte-h="svelte-5pwitv">Most Recent Aggregations</h2> <div><p data-svelte-h="svelte-q0xae8">Accounts</p> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                lineNumbers: true,
                language: ":json",
                code: JSON.stringify(data.sourceData.sourceEvents.accounts.started, null, 4)
              },
              {},
              {}
            )} `;
          },
          summary: () => {
            return `Started: ${escape(formatDate(data.sourceData.sourceEvents.accounts.started?.created))}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                lineNumbers: true,
                language: ":json",
                code: JSON.stringify(data.sourceData.sourceEvents.accounts.passed, null, 4)
              },
              {},
              {}
            )} `;
          },
          summary: () => {
            return `Passed: ${escape(formatDate(data.sourceData.sourceEvents.accounts.passed?.created))}`;
          }
        })}`;
      }
    })} <p data-svelte-h="svelte-ee3394">Entitlements</p> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                lineNumbers: true,
                language: ":json",
                code: JSON.stringify(data.sourceData.sourceEvents.entitlements.started, null, 4)
              },
              {},
              {}
            )} `;
          },
          summary: () => {
            return `Started: ${escape(formatDate(data.sourceData.sourceEvents.entitlements.started?.created))}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                lineNumbers: true,
                language: ":json",
                code: JSON.stringify(data.sourceData.sourceEvents.entitlements.passed, null, 4)
              },
              {},
              {}
            )} `;
          },
          summary: () => {
            return `Passed: ${escape(formatDate(data.sourceData.sourceEvents.entitlements.passed?.created))}`;
          }
        })}`;
      }
    })}</div></div> <div class="card p-4">${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
      panel: () => {
        return ` ${tabSet === 0 ? `Search Events` : `${tabSet === 1 ? `${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            lineNumbers: true,
            language: ":json",
            code: JSON.stringify(data.sourceData.source.connectorAttributes, null, 4)
          },
          {},
          {}
        )}` : `${tabSet === 2 ? `${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            lineNumbers: true,
            language: ":json",
            code: JSON.stringify(data.sourceData.source, null, 4)
          },
          {},
          {}
        )}` : ``}`}`} `;
      },
      default: () => {
        return `${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "raw-source-values",
            value: 0,
            group: tabSet
          },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Source Events`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab2", value: 1, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Connector Attributes JSON`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "raw-source-values",
            value: 2,
            group: tabSet
          },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Full Source JSON`;
            }
          }
        )} `;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f644b717.js.map
