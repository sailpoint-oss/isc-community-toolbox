import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, l as add_styles, b as subscribe, o as each, p as compute_slots, s as setContext, q as compute_rest_props, i as getContext, g as spread, r as escape_attribute_value, h as escape_object } from './ssr-3eccf1b3.js';
import { r as reports } from './reports-881f004a.js';
import { p as page } from './stores2-39445ea0.js';
import './ProgressBar.svelte_svelte_type_style_lang-7a3862c3.js';
import { L as LightSwitch } from './LightSwitch-68264f9f.js';
import './index2-f081c4d4.js';

const cBase$2 = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$2} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBase$1 = "grid grid-rows-[auto_1fr_auto] overflow-y-auto";
const cRegionLead = "box-border";
const cRegionDefault = "box-border";
const cRegionTrail = "box-border";
const AppRail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { width = "w-20" } = $$props;
  let { height = "h-full" } = $$props;
  let { gap = "gap-0" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { aspectRatio = "aspect-square" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("spacing", spacing);
  setContext("aspectRatio", aspectRatio);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classesBase = `${cBase$1} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ""}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return ` <div class="${"app-rail " + escape(classesBase, true)}" data-testid="app-rail"> <div class="${"app-bar-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>  <div class="${"app-bar-default " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  <div class="${"app-bar-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div></div>`;
});
const cBase = "unstyled";
const cWrapper = "w-full flex flex-col justify-center items-stretch text-center space-y-1";
const cLabel = "font-bold text-xs";
const AppRailAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, ["selected", "regionLead", "regionLabel", "hover", "active", "spacing", "aspectRatio"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { regionLead = "flex justify-center items-center" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classActive = selected ? active : "";
  classesBase = `${cBase} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper} ${aspectRatio} ${hover} ${spacing} ${classActive}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  return `<a${spread(
    [
      {
        class: "app-rail-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      { "data-testid": "app-rail-anchor" }
    ],
    {}
  )}><div class="${"app-rail-wrapper " + escape(classesWrapper, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const navigation = [
  {
    name: "Main",
    content: [
      {
        url: "/home",
        name: "Home",
        description: "Home page for the application."
      },
      {
        url: "/home/sources",
        name: "Sources",
        description: "a list of Sources in IdentityNow."
      }
    ]
  },
  {
    name: "Reports",
    content: [...reports]
  }
];
const LeftSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="bg-surface-50-900-token h-full">${validate_component(AppRail, "AppRail").$$render(
    $$result,
    {
      width: "w-36",
      active: "bg-primary-active-token !text-white",
      aspectRatio: "aspect-video"
    },
    {},
    {
      default: () => {
        return `${each(navigation, (section) => {
          return `<p class="py-2 px-1 text-center bg-primary-100-800-token">${escape(section.name)}</p> <hr class="!border-t-2"> ${each(section.content, (link) => {
            return `${validate_component(AppRailAnchor, "AppRailAnchor").$$render(
              $$result,
              {
                href: link.url,
                "data-sveltekit-preload-data": "hover",
                selected: $page.url.pathname === link.url
              },
              {},
              {
                default: () => {
                  return `<p class="text-center px-4">${escape(link.name)}</p> `;
                }
              }
            )}`;
          })}`;
        })}`;
      }
    }
  )}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    sidebarLeft: () => {
      return `${validate_component(LeftSidebar, "LeftSidebar").$$render($$result, {}, {}, {})} `;
    },
    header: () => {
      return `${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {
        trail: () => {
          return `${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})} <a href="/" class="btn variant-filled-primary !text-white text-lg" data-svelte-h="svelte-1h5xvl4">Logout</a> `;
        },
        lead: () => {
          return `<img class="h-8 w-8" src="/logo.ico" alt="SailPoint TetraSail"> `;
        },
        default: () => {
          return `<p class="text-xl" data-svelte-h="svelte-16xy8i3">IdentityNow Health Check</p>`;
        }
      })} `;
    },
    default: () => {
      return `   <div class="h-full">${slots.default ? slots.default({}) : ``}</div>   `;
    }
  })}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-da25be14.js.map
