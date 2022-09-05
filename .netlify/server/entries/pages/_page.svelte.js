import { c as create_ssr_component, e as escape, d as add_attribute, f as spread, h as escape_attribute_value, i as escape_object, v as validate_component } from "../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.contents.svelte-1xcks07.svelte-1xcks07{min-height:80vh;display:grid;align-content:center;justify-content:center;padding:3rem 1rem;margin:0.5rem;border-radius:1rem;text-align:center;background:var(--altBg);color:var(--altText)}@media(max-width: 500px){.contents.svelte-1xcks07.svelte-1xcks07{margin:0.25rem}}.header.svelte-1xcks07.svelte-1xcks07{display:grid;justify-content:center}h2.svelte-1xcks07.svelte-1xcks07{text-align:center;text-transform:uppercase;max-width:55ch;font-size:calc(3rem + 3vw);line-height:1.125;margin-top:0.5em;margin-bottom:0.5em;font-weight:600;font-variation-settings:"opsz" 96, "BNCE" 25, "IRGL" 25;letter-spacing:0.05em;position:relative;animation:slowShinyText 1.5s alternate infinite ease-in-out;animation-play-state:var(--animationState)}@media(prefers-reduced-motion){h2.svelte-1xcks07.svelte-1xcks07{animation-play-state:paused !important}}@media(max-width: 1100px){.header.svelte-1xcks07.svelte-1xcks07{display:block;max-width:55rem}h2.svelte-1xcks07.svelte-1xcks07{font-size:calc(2rem + 3vw);text-align:left}}a.svelte-1xcks07.svelte-1xcks07{color:currentColor;transition:0.15s}.text.svelte-1xcks07 a.svelte-1xcks07{text-decoration:underline}a.svelte-1xcks07.svelte-1xcks07:hover,a.svelte-1xcks07.svelte-1xcks07:focus{color:var(--uiAccent)}.text.svelte-1xcks07.svelte-1xcks07{font-variation-settings:"opsz" 12;margin:0 auto;font-size:1.25rem;font-weight:350;max-width:55rem;line-height:1.5;padding:2rem 0 2rem;letter-spacing:0;text-align:left}@media(max-width: 899px){.header.svelte-1xcks07.svelte-1xcks07{max-width:55rem}.text.svelte-1xcks07.svelte-1xcks07{font-size:1rem}}@media(min-width: 900px){.text.svelte-1xcks07.svelte-1xcks07{display:grid;grid-template-columns:1fr 1fr;grid-gap:4rem}}.colophon.svelte-1xcks07.svelte-1xcks07{color:hsl(0,0%,75%)}p.svelte-1xcks07.svelte-1xcks07{margin:0 0 1rem}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState !== void 0)
    $$bindings.animationState(animationState);
  $$result.css.add(css$7);
  return `<article class="${"contents svelte-1xcks07"}"><div class="${"header svelte-1xcks07"}"><h2 style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1xcks07"}">A typeface for<br>creative expression</h2></div>
    <div class="${"text svelte-1xcks07"}"><div><p class="${"svelte-1xcks07"}">Shantell Sans is a marker-style font built for creative expression, typographic play, and animation.</p>
            <p class="${"svelte-1xcks07"}">It is available as a 5-axis variable font as well as a collection of static fonts.</p>
            <p class="${"svelte-1xcks07"}">It includes Latin and Cyrillic characters to support a wide array of languages throughout the Americas, Europe, Central Asia, and Vietnam.</p>
            <p class="${"svelte-1xcks07"}">It is free and open-source, licensed under SIL Open Font License 1.1, so you can use it in almost any way you can imagine! Read the <a href="${"https://github.com/arrowtype/shantell-sans/blob/main/OFL.txt"}" class="${"svelte-1xcks07"}">Shantell Sans license</a> for details.</p></div>
        <div class="${"colophon svelte-1xcks07"}"><p class="${"svelte-1xcks07"}">Created with <a target="${"_blank"}" href="${"https://shantellmartin.art"}" class="${"svelte-1xcks07"}">Shantell Martin</a>, based on her artwork and felt-tip marker handwriting.</p>
            <p class="${"svelte-1xcks07"}">Designed &amp; developed by <a target="${"_blank"}" href="${"https://arrowtype.com"}" class="${"svelte-1xcks07"}">Arrow\xA0Type</a>. Cyrillic by <a target="${"_blank"}" href="${"https://anyadanilova.com"}" class="${"svelte-1xcks07"}">Anya Danilova</a>.</p>
            <p class="${"svelte-1xcks07"}">Commissioned for open-source release by Google Fonts.</p>
            
            
            <p class="${"svelte-1xcks07"}">\u2192 <a id="${"cta"}" href="${"https://fonts.google.com/specimen/Shantell+Sans"}" style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1xcks07"}"><span class="${"hide-sm"}">Get it </span>on Google Fonts</a></p>
            <p class="${"svelte-1xcks07"}">\u2192 <a target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans"}" class="${"svelte-1xcks07"}">See the project on GitHub</a></p></div></div>
</article>`;
});
const TypeTesterText_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: `:root{--size:15;--lineHeight:1;--wght:700;--ital:0;--irgl:0;--bnce:0;--trak:0;--italic:normal;--maxSizePercent:1;--fontFeatures:"";--textAlign:center}#type-area.svelte-199s8vh.svelte-199s8vh{width:100%;height:60vh;top:0;overflow-y:auto;display:grid;align-content:center;justify-content:center;color:var(--text);text-align:var(--textAlign);font-feature-settings:var(--fontFeatures);border-radius:1rem 1rem 0 0;border:2px solid var(--trackBg)}#type-area.svelte-199s8vh h2.svelte-199s8vh{max-width:60ch;margin:0}.type-tester.svelte-199s8vh.svelte-199s8vh{font-size:calc(var(--size) * 1px);font-weight:var(--wght);font-variation-settings:"ital" var(--ital), "IRGL" var(--irgl),  "BNCE" var(--bnce), "TRAK" var(--trak);outline:none;line-height:var(--lineHeight);opacity:0;animation:svelte-199s8vh-fadeIn 0.5s 0.5s forwards;margin:0.5em 0}@keyframes svelte-199s8vh-fadeIn{from{opacity:0}to{opacity:1}}#type-cursor.svelte-199s8vh.svelte-199s8vh{display:inline-block;position:absolute;width:0}#type-cursor.svelte-199s8vh.svelte-199s8vh:after{content:'';display:inline-block;position:relative;height:0.9em;width:0.0375em;background:var(--accent);transform:translate(0.035em, calc(var(--lineHeight) * 0.015em));opacity:0;border-radius:999px;animation:svelte-199s8vh-blink 0.4s infinite alternate}@keyframes svelte-199s8vh-blink{to{opacity:1}}@media(prefers-reduced-motion){#type-cursor.svelte-199s8vh.svelte-199s8vh:after{animation-play-state:paused !important}}`,
  map: null
};
const TypeTesterText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursorDisplay = "inline-block";
  let { fontFea = "" } = $$props;
  let { sizePx = 200 } = $$props;
  let { wght = 400 } = $$props;
  let { ital = 0 } = $$props;
  let { irgl = 0 } = $$props;
  let { bnce = 0 } = $$props;
  let { trak = 0 } = $$props;
  let { lineHeight = 1 } = $$props;
  let { textAlign = "center" } = $$props;
  if ($$props.fontFea === void 0 && $$bindings.fontFea && fontFea !== void 0)
    $$bindings.fontFea(fontFea);
  if ($$props.sizePx === void 0 && $$bindings.sizePx && sizePx !== void 0)
    $$bindings.sizePx(sizePx);
  if ($$props.wght === void 0 && $$bindings.wght && wght !== void 0)
    $$bindings.wght(wght);
  if ($$props.ital === void 0 && $$bindings.ital && ital !== void 0)
    $$bindings.ital(ital);
  if ($$props.irgl === void 0 && $$bindings.irgl && irgl !== void 0)
    $$bindings.irgl(irgl);
  if ($$props.bnce === void 0 && $$bindings.bnce && bnce !== void 0)
    $$bindings.bnce(bnce);
  if ($$props.trak === void 0 && $$bindings.trak && trak !== void 0)
    $$bindings.trak(trak);
  if ($$props.lineHeight === void 0 && $$bindings.lineHeight && lineHeight !== void 0)
    $$bindings.lineHeight(lineHeight);
  if ($$props.textAlign === void 0 && $$bindings.textAlign && textAlign !== void 0)
    $$bindings.textAlign(textAlign);
  $$result.css.add(css$6);
  return `<div id="${"type-area"}"${add_attribute("sizepx", sizePx, 0)}${add_attribute("wght", wght, 0)}${add_attribute("ital", ital, 0)}${add_attribute("irgl", irgl, 0)}${add_attribute("bnce", bnce, 0)}${add_attribute("fontfea", fontFea, 0)}${add_attribute("lineheight", lineHeight, 0)} style="${"--wght: " + escape(wght, true) + "; --ital: " + escape(ital, true) + "; --irgl: " + escape(irgl, true) + "; --bnce: " + escape(bnce, true) + "; --trak: " + escape(trak, true) + "; --size: " + escape(sizePx, true) + "; --lineHeight: " + escape(lineHeight, true) + "; --fontFeatures: " + escape(fontFea, true) + "; --textAlign: " + escape(textAlign, true) + ";"}" class="${"svelte-199s8vh"}"><h2 class="${"type-tester svelte-199s8vh"}" contenteditable spellcheck="${"false"}">Try Me!<span id="${"type-cursor"}" style="${"display:" + escape(cursorDisplay, true) + ";"}" class="${"svelte-199s8vh"}"></span></h2>
</div>`;
});
const Slider_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'input.svelte-cg9xbb{margin:0}:root{--trackHeight:2px;--thumbHeight:12px;--thumbTouchHeight:32px;--sliderComponentBg:#f4f4f4}.slider-container.svelte-cg9xbb{display:grid}input[type="range"].svelte-cg9xbb{width:100%;-webkit-appearance:none;margin:calc(1em - var(--thumbTouchHeight) / 2);margin-left:calc(-1 * var(--thumbTouchHeight) / 2);margin-right:calc(-1 * var(--thumbTouchHeight) / 2);width:calc(100% + var(--thumbTouchHeight));background:transparent;border:none}input[type="range"].svelte-cg9xbb:focus{outline:none;color:transparent;text-shadow:0 0 0 #000}input[type="range"].svelte-cg9xbb::-webkit-slider-runnable-track{width:100%;height:var(--trackHeight);cursor:pointer;background:transparent;background-image:linear-gradient(\n        to right,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) 50%,\n        transparent 50%\n      ),\n      linear-gradient(\n        to left,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) 50%,\n        transparent 50%\n      );border-radius:1px}input[type="range"].svelte-cg9xbb:focus::-webkit-slider-runnable-track{outline:none;background-image:linear-gradient(\n        to right,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--text) calc(var(--thumbTouchHeight) / 2),\n        var(--text) 50%,\n        transparent 50%\n      ),\n      linear-gradient(\n        to left,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--text) calc(var(--thumbTouchHeight) / 2),\n        var(--text) 50%,\n        transparent 50%\n      )}input[type="range"].svelte-cg9xbb::-webkit-slider-thumb{height:var(--thumbTouchHeight);width:var(--thumbTouchHeight);border-radius:var(--thumbTouchHeight);border:none;cursor:pointer;-webkit-appearance:none;margin-top:calc(\n      -1 * (var(--thumbTouchHeight) / 2) + (var(--trackHeight) / 2)\n    );background:none;background-image:radial-gradient(\n      var(--accent) calc(var(--thumbHeight) / 2 - 0.25px),\n      transparent calc(var(--thumbHeight) / 2 + 0.25px),\n      transparent\n    );box-shadow:none}input[type="range"].svelte-cg9xbb::-moz-range-track{width:100%;height:var(--trackHeight);border-radius:1px;cursor:pointer;background-color:transparent;background-image:linear-gradient(\n        to right,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) 50%,\n        transparent 50%\n      ),\n      linear-gradient(\n        to left,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) calc(var(--thumbTouchHeight) / 2),\n        var(--trackBg) 50%,\n        transparent 50%\n      )}input[type="range"].svelte-cg9xbb:focus::-moz-range-track{background-image:linear-gradient(\n        to right,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--text) calc(var(--thumbTouchHeight) / 2),\n        var(--text) 50%,\n        transparent 50%\n      ),\n      linear-gradient(\n        to left,\n        transparent,\n        transparent calc(var(--thumbTouchHeight) / 2),\n        var(--text) calc(var(--thumbTouchHeight) / 2),\n        var(--text) 50%,\n        transparent 50%\n      )}input[type="range"].svelte-cg9xbb::-moz-focus-outer{border:0}input[type="range"].svelte-cg9xbb::-moz-range-thumb{height:var(--thumbTouchHeight);width:var(--thumbTouchHeight);border:none;border-radius:var(--thumbTouchHeight);background:none;background-image:radial-gradient(\n      var(--accent) calc(var(--thumbHeight) / 2 - 0.25px),\n      transparent calc(var(--thumbHeight) / 2 + 0.25px),\n      transparent\n    );cursor:pointer}input[type="range"].svelte-cg9xbb::-ms-track{width:calc(100% - var(--thumbTouchHeight));margin-left:calc(var(--thumbTouchHeight) / 2);height:var(--trackHeight);cursor:pointer}input[type="range"].svelte-cg9xbb::-ms-fill-lower{background-color:#777}input[type="range"].svelte-cg9xbb::-ms-fill-upper{background:#777}input[type="range"].svelte-cg9xbb::-ms-thumb{width:var(--thumbHeight);margin-left:calc(var(--thumbTouchHeight) / 2);margin-right:calc(var(--thumbTouchHeight) / 2);border-radius:999px;background-color:#222;cursor:pointer}input[type="range"].svelte-cg9xbb:focus::-ms-fill-lower{background:blue}input[type="range"].svelte-cg9xbb:focus::-ms-fill-upper{background:blue}',
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 5 } = $$props;
  let { min = 0 } = $$props;
  let { max = 10 } = $$props;
  let { step = 1 } = $$props;
  let { moreProps = {} } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.moreProps === void 0 && $$bindings.moreProps && moreProps !== void 0)
    $$bindings.moreProps(moreProps);
  $$result.css.add(css$5);
  return `<div class="${"slider-container svelte-cg9xbb"}"><input${spread(
    [
      { id: "slider" },
      { type: "range" },
      { min: escape_attribute_value(min) },
      { max: escape_attribute_value(max) },
      { step: escape_attribute_value(step) },
      escape_object(moreProps)
    ],
    { classes: "svelte-cg9xbb" }
  )}${add_attribute("value", value, 0)}>
</div>`;
});
const TypeTester_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: `section.svelte-pmvvo0{width:100%;display:grid;grid-template-rows:1fr min-content;align-content:center;padding:0.5rem 0.5rem 1rem 0.5rem}#control-container.svelte-pmvvo0{padding:1rem 1.25rem 0.5rem 1.25rem;border-radius:0 0 1rem 1rem;border:2px solid var(--trackBg);border-top:0px}@media(max-width: 500px){section.svelte-pmvvo0{padding:1rem 0.25rem 1rem 0.25rem}}.slider-box.svelte-pmvvo0{display:grid;grid-template-columns:6rem auto 1fr;grid-gap:0.5rem;align-items:center;margin-bottom:0.5rem;font-weight:600}input[type="number"].svelte-pmvvo0{width:3.05rem;font-size:0.875em;font-feature-settings:"tnum";font-weight:600;text-align:right;margin:0 0.25rem 0 0.5rem;border-radius:0.375rem;font-family:'ShantellSans', serif;color:var(--textColor);border:transparent 1px solid;background:transparent;-moz-appearance:textfield}input[type="number"].svelte-pmvvo0:focus{outline:none;border:var(--text) solid 1px}input.svelte-pmvvo0::-webkit-outer-spin-button,input.svelte-pmvvo0::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}`,
  map: null
};
const TypeTester = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { initialSizeVmin = "15" } = $$props;
  let { sizePx = 200 } = $$props;
  let { sizePxMin = 4 } = $$props;
  let { sizePxMax = 250 } = $$props;
  let { maxVmin = 32 } = $$props;
  let { minLineHeight = 0.825 } = $$props;
  let { maxLineHeight = 1.375 } = $$props;
  let { lineHeightSizeScalingCapPx = 72 } = $$props;
  let { lineHeight = 1 } = $$props;
  let { wght = 700 } = $$props;
  let { ital = 0 } = $$props;
  let { irgl = 0 } = $$props;
  let { bnce = 0 } = $$props;
  let { trak = 0 } = $$props;
  let { wghtMin = 300 } = $$props;
  let { wghtMax = 800 } = $$props;
  let { italMin = 0 } = $$props;
  let { italMax = 1 } = $$props;
  let { irglMin = 0 } = $$props;
  let { irglMax = 100 } = $$props;
  let { bnceMin = -100 } = $$props;
  let { bnceMax = 100 } = $$props;
  let { trakMin = 0 } = $$props;
  let { trakMax = 250 } = $$props;
  let fontFeatures = "";
  if ($$props.initialSizeVmin === void 0 && $$bindings.initialSizeVmin && initialSizeVmin !== void 0)
    $$bindings.initialSizeVmin(initialSizeVmin);
  if ($$props.sizePx === void 0 && $$bindings.sizePx && sizePx !== void 0)
    $$bindings.sizePx(sizePx);
  if ($$props.sizePxMin === void 0 && $$bindings.sizePxMin && sizePxMin !== void 0)
    $$bindings.sizePxMin(sizePxMin);
  if ($$props.sizePxMax === void 0 && $$bindings.sizePxMax && sizePxMax !== void 0)
    $$bindings.sizePxMax(sizePxMax);
  if ($$props.maxVmin === void 0 && $$bindings.maxVmin && maxVmin !== void 0)
    $$bindings.maxVmin(maxVmin);
  if ($$props.minLineHeight === void 0 && $$bindings.minLineHeight && minLineHeight !== void 0)
    $$bindings.minLineHeight(minLineHeight);
  if ($$props.maxLineHeight === void 0 && $$bindings.maxLineHeight && maxLineHeight !== void 0)
    $$bindings.maxLineHeight(maxLineHeight);
  if ($$props.lineHeightSizeScalingCapPx === void 0 && $$bindings.lineHeightSizeScalingCapPx && lineHeightSizeScalingCapPx !== void 0)
    $$bindings.lineHeightSizeScalingCapPx(lineHeightSizeScalingCapPx);
  if ($$props.lineHeight === void 0 && $$bindings.lineHeight && lineHeight !== void 0)
    $$bindings.lineHeight(lineHeight);
  if ($$props.wght === void 0 && $$bindings.wght && wght !== void 0)
    $$bindings.wght(wght);
  if ($$props.ital === void 0 && $$bindings.ital && ital !== void 0)
    $$bindings.ital(ital);
  if ($$props.irgl === void 0 && $$bindings.irgl && irgl !== void 0)
    $$bindings.irgl(irgl);
  if ($$props.bnce === void 0 && $$bindings.bnce && bnce !== void 0)
    $$bindings.bnce(bnce);
  if ($$props.trak === void 0 && $$bindings.trak && trak !== void 0)
    $$bindings.trak(trak);
  if ($$props.wghtMin === void 0 && $$bindings.wghtMin && wghtMin !== void 0)
    $$bindings.wghtMin(wghtMin);
  if ($$props.wghtMax === void 0 && $$bindings.wghtMax && wghtMax !== void 0)
    $$bindings.wghtMax(wghtMax);
  if ($$props.italMin === void 0 && $$bindings.italMin && italMin !== void 0)
    $$bindings.italMin(italMin);
  if ($$props.italMax === void 0 && $$bindings.italMax && italMax !== void 0)
    $$bindings.italMax(italMax);
  if ($$props.irglMin === void 0 && $$bindings.irglMin && irglMin !== void 0)
    $$bindings.irglMin(irglMin);
  if ($$props.irglMax === void 0 && $$bindings.irglMax && irglMax !== void 0)
    $$bindings.irglMax(irglMax);
  if ($$props.bnceMin === void 0 && $$bindings.bnceMin && bnceMin !== void 0)
    $$bindings.bnceMin(bnceMin);
  if ($$props.bnceMax === void 0 && $$bindings.bnceMax && bnceMax !== void 0)
    $$bindings.bnceMax(bnceMax);
  if ($$props.trakMin === void 0 && $$bindings.trakMin && trakMin !== void 0)
    $$bindings.trakMin(trakMin);
  if ($$props.trakMax === void 0 && $$bindings.trakMax && trakMax !== void 0)
    $$bindings.trakMax(trakMax);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

<section class="${"svelte-pmvvo0"}">${validate_component(TypeTesterText, "TypeTesterText").$$render(
      $$result,
      {
        sizePx,
        wght,
        ital,
        irgl,
        bnce,
        trak,
        fontFea: fontFeatures,
        lineHeight
      },
      {},
      {}
    )}

        
    <div id="${"control-container"}" class="${"svelte-pmvvo0"}"><div class="${"controls"}"><div class="${"slider-box svelte-pmvvo0"}"><label for="${"sizeSlider"}">Font Size</label>
                <input type="${"number"}"${add_attribute("min", sizePxMin, 0)}${add_attribute("max", sizePxMax, 0)} step="${"1"}" class="${"svelte-pmvvo0"}"${add_attribute("value", sizePx, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "sizeSlider",
        label: "size",
        type: "range",
        min: sizePxMin,
        max: sizePxMax,
        step: 1,
        value: sizePx
      },
      {
        value: ($$value) => {
          sizePx = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div class="${"slider-box svelte-pmvvo0"}"><label for="${"wghtSlider"}">Weight</label>
                <input type="${"number"}"${add_attribute("min", wghtMin, 0)}${add_attribute("max", wghtMax, 0)} step="${"1"}" class="${"svelte-pmvvo0"}"${add_attribute("value", wght, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "wghtSlider",
        label: "wght",
        type: "range",
        min: wghtMin,
        max: wghtMax,
        step: 1,
        value: wght
      },
      {
        value: ($$value) => {
          wght = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
            <div class="${"slider-box svelte-pmvvo0"}"><label for="${"wghtSlider"}">Italic</label>
                <input type="${"number"}"${add_attribute("min", italMin, 0)}${add_attribute("max", italMax, 0)} step="${"0.01"}" class="${"svelte-pmvvo0"}"${add_attribute("value", ital, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "italSlider",
        label: "ital",
        type: "range",
        min: italMin,
        max: italMax,
        step: 0.01,
        value: ital
      },
      {
        value: ($$value) => {
          ital = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div class="${"slider-box svelte-pmvvo0"}"><label for="${"irglSlider"}">Irregularity</label>
                <input type="${"number"}"${add_attribute("min", irglMin, 0)}${add_attribute("max", irglMax, 0)} step="${"1"}" class="${"svelte-pmvvo0"}"${add_attribute("value", irgl, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "irglSlider",
        label: "irgl",
        type: "range",
        min: irglMin,
        max: irglMax,
        step: 1,
        value: irgl
      },
      {
        value: ($$value) => {
          irgl = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div class="${"slider-box svelte-pmvvo0"}"><label for="${"bnceSlider"}">Bounce</label>
                <input type="${"number"}"${add_attribute("min", bnceMin, 0)}${add_attribute("max", bnceMax, 0)} step="${"1"}" class="${"svelte-pmvvo0"}"${add_attribute("value", bnce, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "bnceSlider",
        label: "bnce",
        type: "range",
        min: bnceMin,
        max: bnceMax,
        step: 1,
        value: bnce
      },
      {
        value: ($$value) => {
          bnce = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div class="${"slider-box svelte-pmvvo0"}"><label for="${"trakSlider"}">Tracking</label>
                <input type="${"number"}"${add_attribute("min", trakMin, 0)}${add_attribute("max", trakMax, 0)} step="${"1"}" class="${"svelte-pmvvo0"}"${add_attribute("value", trak, 0)}>
                ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        id: "trakSlider",
        label: "trak",
        type: "range",
        min: trakMin,
        max: trakMax,
        step: 1,
        value: trak
      },
      {
        value: ($$value) => {
          trak = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            </div></div>

    
    



    
</section>`;
  } while (!$$settled);
  return $$rendered;
});
const Definitions_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.definitions.svelte-1u4ugib.svelte-1u4ugib{display:grid;grid-template-columns:1fr;grid-gap:1rem;padding:8rem 1.5rem;margin:0 auto;min-height:90vh;align-content:space-around}@media(min-width: 600px){.definitions.svelte-1u4ugib.svelte-1u4ugib{max-width:80vw}}@media(min-width: 800px){.definitions.svelte-1u4ugib.svelte-1u4ugib{display:grid;grid-template-columns:1fr 1fr;max-width:1100px}}h2.svelte-1u4ugib.svelte-1u4ugib{font-weight:700;font-size:4rem;letter-spacing:0.05em;line-height:1em;text-align:center;animation:slowShinyText 1.5s alternate infinite ease-in-out;animation-play-state:var(--animationState);text-align:left}h2.svelte-1u4ugib br.svelte-1u4ugib{display:none}@media(min-width: 800px){h2.svelte-1u4ugib br.svelte-1u4ugib{display:inline}}em.svelte-1u4ugib.svelte-1u4ugib{font-variation-settings:"ital" 1;font-style:normal}.gray.svelte-1u4ugib.svelte-1u4ugib{color:var(--trackBg)}.section-header.svelte-1u4ugib.svelte-1u4ugib{font-size:2rem;text-transform:uppercase}.axis.svelte-1u4ugib.svelte-1u4ugib{padding:2rem 0}.axis-name.svelte-1u4ugib.svelte-1u4ugib{text-transform:uppercase;letter-spacing:0.03em;margin-bottom:0.75rem;font-size:1rem}@media(min-width: 800px){.axis-name.svelte-1u4ugib.svelte-1u4ugib{font-size:1.25rem}}.axis-diagram.svelte-1u4ugib.svelte-1u4ugib{font-size:4rem;margin:0;line-height:1}.axis-range.svelte-1u4ugib.svelte-1u4ugib{font-weight:400;margin-left:1rem;font-feature-settings:"case"}.axis-tag.svelte-1u4ugib.svelte-1u4ugib{font-family:Courier, monospace;letter-spacing:0.05em;font-weight:700;font-size:0.825em;color:var(--gray);text-transform:none;background:var(--trackBg);padding:0.0625em 0.25em 0.125em;border-radius:0.25em;margin-left:1rem}.axis.svelte-1u4ugib p.svelte-1u4ugib{line-height:1.5;margin-top:0}@media(min-width: 800px){.axis.svelte-1u4ugib p.svelte-1u4ugib{max-width:45ch}}.between.svelte-1u4ugib.svelte-1u4ugib{font-variation-settings:"wght" 300;font-feature-settings:"case"}#wght.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 300}#wght.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-weight 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#wght.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 800}#wght.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-weight 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-weight{from{font-variation-settings:"wght" 300}to{font-variation-settings:"wght" 800}}#ital.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "ital" 0}#ital.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "ital" 1}#ital.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-italic 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#ital.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-italic 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-italic{from{font-variation-settings:"wght" 550,  "ital" 0}to{font-variation-settings:"wght" 550,  "ital" 1}}#IRGL.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "IRGL" 0;animation:svelte-1u4ugib-irregular 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "IRGL" 100;animation:svelte-1u4ugib-irregular 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-irregular 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-irregular 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-irregular{from{font-variation-settings:"wght" 550,  "IRGL" 0}to{font-variation-settings:"wght" 550,  "IRGL" 100}}#BNCE.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "BNCE" -100}#BNCE.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "BNCE" 100}#BNCE.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-bounce 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#BNCE.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-bounce 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-bounce{from{font-variation-settings:"wght" 550,  "BNCE" -100}to{font-variation-settings:"wght" 550,  "BNCE" 100}}#TRAK.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "TRAK" 0}#TRAK.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "TRAK" 500}#TRAK.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-tracking 3s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#TRAK.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-tracking 3s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-tracking{from{font-variation-settings:"wght" 550,  "TRAK" 0}to{font-variation-settings:"wght" 550,  "TRAK" 300}}@media(prefers-reduced-motion){.svelte-1u4ugib .from.svelte-1u4ugib,.svelte-1u4ugib .to.svelte-1u4ugib{animation-play-state:paused !important}}',
  map: null
};
const Definitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState !== void 0)
    $$bindings.animationState(animationState);
  $$result.css.add(css$3);
  return `<section class="${"definitions svelte-1u4ugib"}" style="${"--animationState: " + escape(animationState, true) + ";"}"><div class="${"section-header svelte-1u4ugib"}"><h2 class="${"svelte-1u4ugib"}">Variable <br class="${"svelte-1u4ugib"}">Axes</h2></div>

    <div id="${"wght"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Weight <span class="${"axis-range svelte-1u4ugib"}">(300 to 800)</span> <span class="${"axis-tag svelte-1u4ugib"}">wght</span></h3>
        <p class="${"svelte-1u4ugib"}">You know it and love it, and now it\u2019s variable! <em class="${"svelte-1u4ugib"}">Weight</em> adjusts the overall thickness of the strokes in letterforms. Useful for establishing typographic hierarchy and much more.</p></div>

    <div id="${"ital"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Italic <span class="${"axis-range svelte-1u4ugib"}">(0 to 1)</span> <span class="${"axis-tag svelte-1u4ugib"}">ital</span></h3>
        <p class="${"svelte-1u4ugib"}">Adjusts letters from upright to sloped. Glyphs keep the same overall shapes, but are redrawn to keep good curves and monolinear strokes. Useful to provide emphasis in typography.</p></div>

    <div id="${"IRGL"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Irregularity <span class="${"axis-range svelte-1u4ugib"}">(0 to 100)</span> <span class="${"axis-tag svelte-1u4ugib"}">IRGL</span></h3>
        <p class="${"svelte-1u4ugib"}">Adjusts glyph shapes from normalized proportions (with consistent heights and proportions for everyday typography) to irregular shaping and sizing (more like handwriting).</p></div>

    <div id="${"BNCE"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Bounce <span class="${"axis-range svelte-1u4ugib"}">(-100 to 100)</span> <span class="${"axis-tag svelte-1u4ugib"}">BNCE</span></h3>
        <p class="${"svelte-1u4ugib"}">Translates glyphs along their Y axis to provide a \u201Cbouncy\u201D look. Set to a default of 0, this gives a regular baseline. Animated between -100 and +100, this gives a wavy look.</p></div>

    <div id="${"TRAK"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Tracking <span class="${"axis-range svelte-1u4ugib"}">(0 to 500)</span> <span class="${"axis-tag svelte-1u4ugib"}">TRAK</span></h3>
        <p class="${"svelte-1u4ugib"}">Adds extra spacing between letters (AKA \u201Ctracking\u201D). Useful for animating letter spacing, or for adding tracking in software which doesn\u2019t provide built-in support for it.</p></div>
    
</section>`;
});
const CharSet_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'section.svelte-1n15qw2.svelte-1n15qw2{background:var(--altBg);color:var(--altText);border-radius:1rem;margin:0 0.5rem;font-size:3rem;line-height:2;text-align:center;display:block}h2.svelte-1n15qw2.svelte-1n15qw2{text-align:center;text-transform:uppercase;font-size:2rem;letter-spacing:0.05em;font-variation-settings:"IRGL" 100;padding-top:3rem}@keyframes svelte-1n15qw2-trackInOut{0%{font-variation-settings:"TRAK" 50, "BNCE" 0}25%{font-variation-settings:"TRAK" 250, "BNCE" 100}50%{font-variation-settings:"TRAK" 50, "BNCE" 0}75%{font-variation-settings:"TRAK" 250, "BNCE" -100}100%{font-variation-settings:"TRAK" 50, "BNCE" 0}}#grid.svelte-1n15qw2.svelte-1n15qw2{padding:0ch 1ch 1.25ch;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fit, minmax(3ch, 1fr) )}#grid.svelte-1n15qw2 span.svelte-1n15qw2,#grid.svelte-1n15qw2 span.down.svelte-1n15qw2{text-align:center}@media(pointer:fine){#grid.svelte-1n15qw2:hover span.svelte-1n15qw2{animation:svelte-1n15qw2-slowShinyText 1s alternate infinite ease-in-out;animation-play-state:var(--animationState)}#grid.svelte-1n15qw2:hover span.down.svelte-1n15qw2{animation:svelte-1n15qw2-slowShinyText 1s reverse alternate infinite ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1n15qw2-slowShinyText{from{font-variation-settings:"BNCE" -100}to{font-variation-settings:"BNCE" 100}}}@media(prefers-reduced-motion){#grid.svelte-1n15qw2:hover span.svelte-1n15qw2,#grid.svelte-1n15qw2:hover span.down.svelte-1n15qw2{animation:none}}@media(max-width: 500px){section.svelte-1n15qw2.svelte-1n15qw2{margin:0 0.25rem}h2.svelte-1n15qw2.svelte-1n15qw2{margin:0;padding-top:1.5rem;font-size:9vw}#grid.svelte-1n15qw2.svelte-1n15qw2{grid-template-columns:repeat(auto-fit, minmax(2ch, 1fr));padding:0.625ch .5ch;margin:0 0.25rem}section.svelte-1n15qw2.svelte-1n15qw2{font-size:1.5rem}}',
  map: null
};
const CharSet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState !== void 0)
    $$bindings.animationState(animationState);
  $$result.css.add(css$2);
  return `<section class="${"charset svelte-1n15qw2"}"><h2 class="${"svelte-1n15qw2"}">Characters</h2>
    
    
    <div class="${"grid svelte-1n15qw2"}" id="${"grid"}" style="${"--animationState: " + escape(animationState, true) + ";"}"><div><span class="${"down svelte-1n15qw2"}">A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0100
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0102
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0104
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01CD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0200
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0202
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0106
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0108
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0112
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0114
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0116
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0118
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0204
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0206
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">G
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0120
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0122
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01E6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">H
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0124
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">I
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xCF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0128
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0130
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0208
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">J
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0134
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">K
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0136
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">L
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0139
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">M
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">N
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0143
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0145
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0147
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">O
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0150
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01A0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01EA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u022A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u022C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0230
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">P
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">Q
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">R
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0154
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0156
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0158
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0210
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0212
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">S
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0160
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0218
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">T
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0162
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0164
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u021A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">U
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0168
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0170
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0172
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01AF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01D3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0214
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0216
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EEA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EEC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EEE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">V
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">W
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0174
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E80
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E82
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E84
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">X
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">Y
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0176
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0178
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0232
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">Z
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0179
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u017B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u017D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xC6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0110
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0126
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0132
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0141
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0152
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0166
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u018F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01CA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E9E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u03A9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0402
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0404
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0405
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0406
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0407
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0408
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0409
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0410
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0411
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0412
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0413
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0403
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0414
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0415
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0400
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0401
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0416
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04C1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04DC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0417
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04DE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0418
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u041F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0420
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0421
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0422
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0423
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u040E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04EE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0424
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0425
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0426
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0427
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0428
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0429
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u042F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0462
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u046A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0472
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0474
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0490
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0492
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0494
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0496
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0498
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u049A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u049C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04AA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04AE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04BA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04C0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04CB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u051A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u051C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">a
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0101
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0103
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0105
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01CE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0201
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0203
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EA9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EAF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">b
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">c
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0107
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0109
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">d
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u010F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">e
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xEA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xEB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0113
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0115
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0117
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0119
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0205
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0207
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EB9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EBF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">f
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">g
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u011F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0121
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0123
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01E7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">h
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0125
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">i
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xEC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xED
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xEE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xEF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0129
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u012F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0209
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EC9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">j
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0135
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">k
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0137
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">l
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u013E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">m
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">n
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0144
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0146
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0148
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">o
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0151
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01A1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01EB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u020F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u022B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u022D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0231
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ECF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1ED9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EDF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">p
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">q
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">r
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0155
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0157
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0159
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0211
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0213
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">s
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u015F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0161
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0219
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">t
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0163
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0165
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u021B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">u
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0169
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u016F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0171
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0173
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01B0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01D4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0215
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0217
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EE9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EEB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EED
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EEF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">v
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">w
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0175
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E81
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E83
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1E85
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">x
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">y
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0177
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0233
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u1EF9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">z
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u017A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u017C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u017E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xDF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xE6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01FF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xFE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0111
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0127
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0131
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0133
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0138
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0140
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0142
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u014B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0153
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0167
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01CC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0259
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u03C0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0430
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0431
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0432
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0433
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0453
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0434
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0435
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0450
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0451
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0436
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04C2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04DD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0437
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04DF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0438
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0439
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u043F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0440
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0441
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0442
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0443
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04EF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0444
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0445
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0446
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0447
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0448
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0449
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u044F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0452
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0454
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0455
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0456
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0457
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0458
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0459
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u045F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0463
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u046B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0473
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0475
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0491
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0493
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0495
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0497
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0499
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u049B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u049D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04A5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04AB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04B9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04BB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04CC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04CF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04D9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04E9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u04F7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u051B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u051D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01C8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u01CB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02B9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02BA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02BC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xAA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0300
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0301
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0302
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0303
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0304
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0306
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0307
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0308
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0309
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u030A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u030B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u030C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u030F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0311
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0312
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u031B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0323
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0324
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0326
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0327
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0328
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u032E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0331
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2153
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2154
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u215B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u215C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u215D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u215E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">_
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">-
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2010
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2013
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2014
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">(
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">)
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">[
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">]
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">{
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">}
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u27E8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u27E9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\\
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">#
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">%
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2030
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">&#39;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">&quot;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2018
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2019
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u201C
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u201D
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u201A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u201E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2039
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u203A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xAB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">*
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2020
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2021
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">.
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">,
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">:
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2026
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">!
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">?
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xBF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">/
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\\
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2044
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">|
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">@
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">&amp;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2113
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2116
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2022
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2032
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2033
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">+
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2212
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xF7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xD7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">=
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">&lt;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">&gt;
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2264
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2265
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2248
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2260
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xAC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2052
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2202
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2206
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u220F
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2211
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2215
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2219
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u221A
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u221E
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u222B
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">$
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA3
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20A1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20A4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20A6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20A9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20AB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20AC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u0192
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20AD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20AE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B1
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B2
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B5
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20B9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20BA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20BC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u20BD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">^
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">~
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB4
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\`
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02DD
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02C6
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02C7
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02D8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02DC
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xAF
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02D9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02DA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB8
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u02DB
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xA9
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xAE
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2122
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\xB0
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u25CA
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2661
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2665
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2713
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2080
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2081
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2082
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2083
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2084
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2085
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2086
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2087
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2088
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2089
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2070
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2074
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2075
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2076
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2077
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2078
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2079
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2190
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2191
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2192
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2193
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2196
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2197
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2198
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">\u2199
                </span></div>
            <div><span class="${"down svelte-1n15qw2"}">@
                </span></div>
    </div></section>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-v1bffq.svelte-v1bffq{padding:1rem 1rem 6rem;margin-top:3rem}footer.svelte-v1bffq p.svelte-v1bffq{text-align:center}a.svelte-v1bffq.svelte-v1bffq{color:currentColor}a.svelte-v1bffq.svelte-v1bffq:hover{color:var(--uiAccent)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-v1bffq"}"><p class="${"svelte-v1bffq"}">Website made by <a target="${"_blank"}" href="${"https://arrowtype.com"}" class="${"svelte-v1bffq"}">Arrow Type</a>.</p>
    <p class="${"svelte-v1bffq"}">\u201CMay you...\u201D words by <a target="${"_blank"}" href="${"https://shantellmartin.art"}" class="${"svelte-v1bffq"}">Shantell Martin</a>.</p>
    <p class="${"svelte-v1bffq"}">------------</p>
    <p class="${"svelte-v1bffq"}"><a target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans"}" class="${"svelte-v1bffq"}">Shantell Sans on GitHub</a></p>
    <p class="${"svelte-v1bffq"}"><a target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans-specimen"}" class="${"svelte-v1bffq"}">View this website\u2019s source</a></p>
</footer>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1pjrgsv.svelte-1pjrgsv{width:100%;height:90%}#wall.svelte-1pjrgsv.svelte-1pjrgsv{cursor:crosshair;min-height:80vh}.mouse.svelte-1pjrgsv.svelte-1pjrgsv{display:none}@media(pointer:fine){.mouse.svelte-1pjrgsv.svelte-1pjrgsv{display:block}.touch.svelte-1pjrgsv.svelte-1pjrgsv{display:none}}header.svelte-1pjrgsv.svelte-1pjrgsv{display:grid;grid-template-columns:auto auto 1fr auto auto;justify-content:start;gap:0.25rem;position:fixed;width:100%;padding:1rem;pointer-events:none;z-index:999}@media(max-width: 500px){header.svelte-1pjrgsv.svelte-1pjrgsv{padding:0.5rem}}.playPauseToggle.svelte-1pjrgsv.svelte-1pjrgsv{pointer-events:auto;cursor:pointer;font-size:1rem;display:flex;justify-content:start;gap:0.25rem;width:2.4em;overflow-x:hidden;transition:0.25s width}.playPauseToggle.paused.svelte-1pjrgsv.svelte-1pjrgsv:hover{width:5.5em}.playPauseToggle.running.svelte-1pjrgsv.svelte-1pjrgsv:hover{width:6.4em}.playPauseToggle.svelte-1pjrgsv #pauseText.svelte-1pjrgsv,.playPauseToggle.svelte-1pjrgsv #playText.svelte-1pjrgsv{opacity:0%;transition:0.25s opacity;padding-left:0.25rem}.playPauseToggle.svelte-1pjrgsv:hover #pauseText.svelte-1pjrgsv,.playPauseToggle.svelte-1pjrgsv:hover #playText.svelte-1pjrgsv{opacity:100%;transform:scaleX(100%);width:auto}@media(max-width: 500px){.playPauseToggle.svelte-1pjrgsv.svelte-1pjrgsv:hover{width:2.4em !important}#pauseText.svelte-1pjrgsv.svelte-1pjrgsv,#playText.svelte-1pjrgsv.svelte-1pjrgsv{display:none}}#cta.svelte-1pjrgsv.svelte-1pjrgsv{justify-self:end}header.svelte-1pjrgsv button.svelte-1pjrgsv,header.svelte-1pjrgsv .button.svelte-1pjrgsv,header.svelte-1pjrgsv h1.svelte-1pjrgsv,#cta.svelte-1pjrgsv.svelte-1pjrgsv{border:none;background:var(--trackBg);color:var(--text);padding:0.25rem 0.75rem;border-radius:999px;font-weight:600;letter-spacing:0.03em;display:inline;margin:0;transition:0.25s background, 0.25s color;border:transparent solid 2px;font-variation-settings:"BNCE" 25, "IRGL" 75}header.svelte-1pjrgsv .button.svelte-1pjrgsv:hover,header.svelte-1pjrgsv button.svelte-1pjrgsv:hover,#cta.svelte-1pjrgsv.svelte-1pjrgsv:hover{border:var(--text) solid 2px}h1.svelte-1pjrgsv.svelte-1pjrgsv{font-size:1rem;font-feature-settings:"case";font-weight:600;margin:0;text-transform:uppercase;animation:svelte-1pjrgsv-shinyText 1.5s linear infinite;animation-play-state:var(--animationState)}div.svelte-1pjrgsv.svelte-1pjrgsv{width:100%;height:100%;overflow:hidden;display:grid;justify-content:center;align-content:center}header.svelte-1pjrgsv .button.svelte-1pjrgsv,#cta.svelte-1pjrgsv.svelte-1pjrgsv{font-size:0.825;font-weight:550;border:2px solid transparent;cursor:pointer;font-size:1rem;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;pointer-events:auto}a.svelte-1pjrgsv.svelte-1pjrgsv:hover,header.svelte-1pjrgsv button:hover span.svelte-1pjrgsv{animation:svelte-1pjrgsv-shinyText 0.75s linear infinite;animation-play-state:var(--animationState)}@media(max-width: 500px){header.svelte-1pjrgsv button span.svelte-1pjrgsv,header.svelte-1pjrgsv h1.svelte-1pjrgsv,#cta.svelte-1pjrgsv.svelte-1pjrgsv{font-size:0.75rem;line-height:1}}.hint.svelte-1pjrgsv.svelte-1pjrgsv{text-transform:uppercase;font-size:2rem;font-feature-settings:"case";letter-spacing:0.2em;text-align:center;animation:svelte-1pjrgsv-wobble .875s ease-in-out alternate infinite;animation-play-state:var(--animationState);pointer-events:none}@media(prefers-reduced-motion){h1.svelte-1pjrgsv.svelte-1pjrgsv,.hint.svelte-1pjrgsv.svelte-1pjrgsv,a.svelte-1pjrgsv.svelte-1pjrgsv:hover,header.svelte-1pjrgsv button:hover span.svelte-1pjrgsv{animation-play-state:paused}button.playPauseToggle.svelte-1pjrgsv.svelte-1pjrgsv{opacity:0}}@keyframes svelte-1pjrgsv-wobble{0%{font-variation-settings:"BNCE" -100, "IRGL" 25}100%{font-variation-settings:"BNCE" 100, "IRGL" 25}}@keyframes svelte-1pjrgsv-shinyText{0%{font-variation-settings:"BNCE" 0, "IRGL" 75}25%{font-variation-settings:"BNCE" -75, "IRGL" 75}50%{font-variation-settings:"BNCE" 0, "IRGL" 75}75%{font-variation-settings:"BNCE" 75, "IRGL" 75}100%{font-variation-settings:"BNCE" 0, "IRGL" 75}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wall;
  let { animationState = "running" } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState !== void 0)
    $$bindings.animationState(animationState);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Shantell Sans \u2192 Arrow Type</title>`, ""}<meta name="${"description"}" content="${"A font for artist Shantell Martin"}" data-svelte="svelte-1lv2o5g">`, ""}

<main class="${"svelte-1pjrgsv"}"><header class="${"svelte-1pjrgsv"}"><h1 style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1pjrgsv"}">Shantell Sans</h1>
			<button class="${"playPauseToggle " + escape(animationState, true) + " svelte-1pjrgsv"}">${animationState === "running" ? `<span id="${"pauseIcon"}" class="${"svelte-1pjrgsv"}">\u23F8</span>
					<span id="${"pauseText"}" class="${"svelte-1pjrgsv"}">Pause</span>` : `<span id="${"playIcon"}" class="${"svelte-1pjrgsv"}">\u25B6</span>
					<span id="${"playText"}" style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1pjrgsv"}">Play</span>`}</button>
            <div class="${"spacer svelte-1pjrgsv"}"></div>
            <a class="${"button svelte-1pjrgsv"}" href="${"process"}">Design Process</a>
			<a id="${"cta"}" href="${"https://fonts.google.com/specimen/Shantell+Sans"}" style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1pjrgsv"}"><span class="${"hide-sm svelte-1pjrgsv"}">Get it </span>on Google Fonts\xA0\u2197</a>
			</header>
	<div id="${"wall"}" style="${"--animationState: " + escape(animationState, true) + ";"}" class="${"svelte-1pjrgsv"}"${add_attribute("this", wall, 0)}><span class="${"hint mouse svelte-1pjrgsv"}" style="${"--animationState: " + escape(animationState, true) + ";"}">Click anywhere</span>
		<span class="${"hint touch svelte-1pjrgsv"}" style="${"--animationState: " + escape(animationState, true) + ";"}">Tap anywhere</span></div>

	${validate_component(About, "About").$$render($$result, { animationState }, {}, {})}
	${validate_component(TypeTester, "TypeTester").$$render($$result, {}, {}, {})}
	${validate_component(Definitions, "Definitions").$$render($$result, { animationState }, {}, {})}
	${validate_component(CharSet, "CharSet").$$render($$result, { animationState }, {}, {})}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
