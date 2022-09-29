import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { a as animationState } from "../../chunks/stores.js";
import "../../chunks/index2.js";
const PlayPause_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#pauseIcon.svelte-uw14di,#playIcon.svelte-uw14di{font-size:1.4em;line-height:1rem;position:relative;font-weight:800}#pauseText.svelte-uw14di,#playText.svelte-uw14di{animation:wobbleBounce .625s ease-in-out alternate infinite;animation-play-state:var(--animationState)}",
  map: null
};
const PlayPause = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $animationState, $$unsubscribe_animationState;
  $$unsubscribe_animationState = subscribe(animationState, (value) => $animationState = value);
  $$result.css.add(css$2);
  $$unsubscribe_animationState();
  return `${$animationState ? `<button>${$animationState === "running" ? `<span id="${"pauseIcon"}" class="${"svelte-uw14di"}">\u23F8</span>
        <span id="${"pauseText"}" class="${"hide-sm svelte-uw14di"}">\xA0Pause</span>` : `<span id="${"playIcon"}" class="${"svelte-uw14di"}">\u25B6</span>
        <span id="${"playText"}" class="${"hide-sm svelte-uw14di"}" style="${"--animationState: " + escape($animationState, true) + ";"}">\xA0Play</span>`}</button>` : ``}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-l4dqxt.svelte-l4dqxt{padding:1rem 1rem 6rem;margin-top:1rem;background:var(--modalBg)}footer.svelte-l4dqxt p.svelte-l4dqxt{text-align:center}a.svelte-l4dqxt.svelte-l4dqxt{color:currentColor}a.svelte-l4dqxt.svelte-l4dqxt:hover{color:var(--uiAccent)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-l4dqxt"}"><p class="${"svelte-l4dqxt"}">Website made by <a target="${"_blank"}" href="${"https://arrowtype.com"}" class="${"svelte-l4dqxt"}">Arrow Type</a>.</p>
    <p class="${"svelte-l4dqxt"}">\u201CMay you...\u201D words by <a target="${"_blank"}" href="${"https://shantellmartin.art"}" class="${"svelte-l4dqxt"}">Shantell Martin</a>.</p>
    <p class="${"svelte-l4dqxt"}">------------</p>
    <p class="${"svelte-l4dqxt"}"><a target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans"}" class="${"svelte-l4dqxt"}">Shantell Sans on GitHub</a></p>
    <p class="${"svelte-l4dqxt"}"><a target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans-specimen"}" class="${"svelte-l4dqxt"}">View this website\u2019s source</a></p>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#header-container.svelte-148xxfe.svelte-148xxfe{width:100vw;overflow-x:scroll;display:block;position:fixed;padding:1rem;z-index:999;height:4.5rem;-ms-overflow-style:none;scrollbar-height:none}#header-container.svelte-148xxfe.svelte-148xxfe::-webkit-scrollbar{display:none}header.svelte-148xxfe.svelte-148xxfe{display:grid;grid-template-columns:max-content max-content;justify-content:space-between;gap:0.5rem;width:100%;box-sizing:content-box;padding-right:1rem}header.svelte-148xxfe>div.svelte-148xxfe{display:grid;grid-template-columns:max-content max-content;gap:0.5rem}@media(max-width: 760px){#cta.svelte-148xxfe.svelte-148xxfe{margin-right:1rem}}#cta.svelte-148xxfe.svelte-148xxfe{justify-self:end}div.svelte-148xxfe.svelte-148xxfe{width:100%;height:100%;overflow:hidden;display:grid;justify-content:center;align-content:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"header-container"}" class="${"svelte-148xxfe"}"><header class="${"svelte-148xxfe"}"><div class="${"svelte-148xxfe"}"><a href="${"/"}" class="${"button"}">Shantell Sans</a>
			${validate_component(PlayPause, "PlayPause").$$render($$result, {}, {}, {})}</div>
		<div class="${"svelte-148xxfe"}"><a class="${"button"}" href="${"process"}"><span class="${"hide-sm"}">Design\xA0</span>Process</a>
			<a id="${"cta"}" href="${"https://fonts.google.com/specimen/Shantell+Sans"}" class="${"svelte-148xxfe"}"><span class="${"hide-sm"}">Get it\xA0</span>on Google Fonts\xA0\u2197</a>
			</div></header></div>
  
${slots.default ? slots.default({}) : ``}


${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
