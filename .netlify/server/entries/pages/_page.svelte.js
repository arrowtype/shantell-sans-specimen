import { c as create_ssr_component, e as escape, d as add_attribute, f as spread, h as escape_attribute_value, i as escape_object, v as validate_component, b as subscribe } from "../../chunks/index.js";
import { a as animationState } from "../../chunks/stores.js";
import "../../chunks/index2.js";
const About_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.contents.svelte-1p5jz7m.svelte-1p5jz7m{min-height:80vh;display:grid;align-content:center;justify-content:center;padding:3rem 1rem;margin:0.5rem;border-radius:1.25rem;text-align:center;background:var(--altBg);color:var(--altText)}@media(max-width: 500px){.contents.svelte-1p5jz7m.svelte-1p5jz7m{margin:0.25rem}}.header.svelte-1p5jz7m.svelte-1p5jz7m{display:grid;justify-content:center}h2.svelte-1p5jz7m.svelte-1p5jz7m{text-align:center;text-transform:uppercase;max-width:55ch;font-size:calc(3rem + 3vw);line-height:1.125;margin-top:0.5em;margin-bottom:0.5em;font-weight:600;font-variation-settings:"opsz" 96, "BNCE" 25, "IRGL" 25;letter-spacing:0.05em;position:relative;animation:slowShinyText 1.5s alternate infinite ease-in-out;animation-play-state:var(--animationState)}@media(prefers-reduced-motion){h2.svelte-1p5jz7m.svelte-1p5jz7m{animation-play-state:paused !important}}@media(max-width: 1100px){.header.svelte-1p5jz7m.svelte-1p5jz7m{display:block;max-width:55rem}h2.svelte-1p5jz7m.svelte-1p5jz7m{font-size:calc(2rem + 3vw);text-align:left}}a.svelte-1p5jz7m.svelte-1p5jz7m{color:currentColor;transition:0.15s}.text.svelte-1p5jz7m a.svelte-1p5jz7m{text-decoration:underline}a.svelte-1p5jz7m.svelte-1p5jz7m:hover,a.svelte-1p5jz7m.svelte-1p5jz7m:focus{color:var(--uiAccent)}.text.svelte-1p5jz7m.svelte-1p5jz7m{font-variation-settings:"opsz" 12;margin:0 auto;font-size:1.25rem;font-weight:350;max-width:55rem;line-height:1.5;padding:2rem 0 2rem;letter-spacing:0;text-align:left}@media(max-width: 899px){.header.svelte-1p5jz7m.svelte-1p5jz7m{max-width:55rem}.text.svelte-1p5jz7m.svelte-1p5jz7m{font-size:1rem}}@media(min-width: 900px){.text.svelte-1p5jz7m.svelte-1p5jz7m{display:grid;grid-template-columns:1fr 1fr;grid-gap:4rem}}.colophon.svelte-1p5jz7m.svelte-1p5jz7m{color:var(--offWhite)}p.svelte-1p5jz7m.svelte-1p5jz7m{margin:0 0 1rem}ul.svelte-1p5jz7m.svelte-1p5jz7m{list-style:none;padding:0;margin:4rem 0rem 0rem}ul.svelte-1p5jz7m li.svelte-1p5jz7m{margin:0 0 2rem;display:flex;justify-content:center}ul.svelte-1p5jz7m li.svelte-1p5jz7m:last-of-type{margin:0}@media(min-width: 900px){ul.svelte-1p5jz7m.svelte-1p5jz7m{margin-top:2rem}ul.svelte-1p5jz7m li.svelte-1p5jz7m{margin:0.5rem 0 2rem;justify-content:start}}a.cta.svelte-1p5jz7m.svelte-1p5jz7m{font-weight:500;background:var(--background);color:var(--text);text-decoration:none}a.cta-secondary.svelte-1p5jz7m.svelte-1p5jz7m{background:transparent;color:var(--offWhite);border:2px solid var(--offWhite)}@media(prefers-color-scheme: dark){a.cta.svelte-1p5jz7m.svelte-1p5jz7m{background:var(--text);color:var(--background)}a.cta-secondary.svelte-1p5jz7m.svelte-1p5jz7m{background:transparent;color:var(--offWhite);border:2px solid var(--offWhite)}}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState: animationState2 } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState2 !== void 0)
    $$bindings.animationState(animationState2);
  $$result.css.add(css$6);
  return `<article class="${"contents svelte-1p5jz7m"}"><div class="${"header svelte-1p5jz7m"}"><h2 style="${"--animationState: " + escape(animationState2, true) + ";"}" class="${"svelte-1p5jz7m"}">A typeface for<br>creative expression</h2></div>
    <div class="${"text svelte-1p5jz7m"}"><div><p class="${"svelte-1p5jz7m"}">Shantell Sans is a marker-style font built for creative expression, typographic play, and animation.</p>
            <p class="${"svelte-1p5jz7m"}">It is available as a 5-axis variable font as well as a collection of static fonts.</p>
            <p class="${"svelte-1p5jz7m"}">It includes Latin and Cyrillic characters to support a wide array of languages throughout the Americas, Europe, Central Asia, and Vietnam.</p>
            <p class="${"svelte-1p5jz7m"}">It is free and open-source, licensed under SIL Open Font License 1.1, so you can use it in almost any way you can imagine! Read the <a href="${"https://github.com/arrowtype/shantell-sans/blob/main/OFL.txt"}" class="${"svelte-1p5jz7m"}">Shantell Sans license</a> for details.</p></div>
        <div class="${"colophon svelte-1p5jz7m"}"><p class="${"svelte-1p5jz7m"}">Design &amp; development by <a target="${"_blank"}" href="${"https://arrowtype.com"}" class="${"svelte-1p5jz7m"}">Arrow\xA0Type</a>.</p>
            <p class="${"svelte-1p5jz7m"}">Created with <a target="${"_blank"}" href="${"https://shantellmartin.art"}" class="${"svelte-1p5jz7m"}">Shantell Martin</a>, based on her artwork and felt-tip marker handwriting.</p>
            <p class="${"svelte-1p5jz7m"}">Cyrillic by <a target="${"_blank"}" href="${"https://anyadanilova.com"}" class="${"svelte-1p5jz7m"}">Anya Danilova</a>.</p>
            <p class="${"svelte-1p5jz7m"}">Commissioned for open-source release by Google Fonts.</p>
            
            
            <ul class="${"svelte-1p5jz7m"}"><li class="${"svelte-1p5jz7m"}"><a class="${"cta svelte-1p5jz7m"}" href="${"https://fonts.google.com/specimen/Shantell+Sans"}" style="${"--animationState: " + escape(animationState2, true) + ";"}">Get it on Google Fonts \u2197</a></li>
                <li class="${"svelte-1p5jz7m"}"><a class="${"cta cta-secondary svelte-1p5jz7m"}" target="${"_blank"}" href="${"https://github.com/arrowtype/shantell-sans"}">See the project on GitHub \u2197</a></li></ul></div></div>
</article>`;
});
const TypeTesterText_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: `:root{--size:15;--lineHeight:1;--wght:700;--ital:0;--irgl:0;--bnce:0;--trak:0;--italic:normal;--maxSizePercent:1;--fontFeatures:"";--textAlign:center}#type-area.svelte-nktb63.svelte-nktb63{width:100%;height:60vh;top:0;overflow-y:auto;display:grid;align-content:center;justify-content:center;color:var(--text);text-align:var(--textAlign);font-feature-settings:var(--fontFeatures);border-radius:1.25rem 1.25rem 0 0;border:2px solid var(--trackBg)}#type-area.svelte-nktb63 h2.svelte-nktb63{max-width:60ch;margin:0}.type-tester.svelte-nktb63.svelte-nktb63{font-size:calc(var(--size) * 1px);font-weight:var(--wght);font-variation-settings:"ital" var(--ital), "IRGL" var(--irgl),  "BNCE" var(--bnce), "TRAK" var(--trak);outline:none;line-height:var(--lineHeight);opacity:0;animation:svelte-nktb63-fadeIn 0.5s 0.5s forwards;margin:0.5em 0}@keyframes svelte-nktb63-fadeIn{from{opacity:0}to{opacity:1}}#type-cursor.svelte-nktb63.svelte-nktb63{display:inline-block;position:absolute;width:0}#type-cursor.svelte-nktb63.svelte-nktb63:after{content:'';display:inline-block;position:relative;height:0.9em;width:0.0375em;background:var(--accent);transform:translate(0.035em, calc(var(--lineHeight) * 0.015em));opacity:0;border-radius:999px;animation:svelte-nktb63-blink 0.4s infinite alternate}@keyframes svelte-nktb63-blink{to{opacity:1}}@media(prefers-reduced-motion){#type-cursor.svelte-nktb63.svelte-nktb63:after{animation-play-state:paused !important}}`,
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
  $$result.css.add(css$5);
  return `<div id="${"type-area"}"${add_attribute("sizepx", sizePx, 0)}${add_attribute("wght", wght, 0)}${add_attribute("ital", ital, 0)}${add_attribute("irgl", irgl, 0)}${add_attribute("bnce", bnce, 0)}${add_attribute("fontfea", fontFea, 0)}${add_attribute("lineheight", lineHeight, 0)} style="${"--wght: " + escape(wght, true) + "; --ital: " + escape(ital, true) + "; --irgl: " + escape(irgl, true) + "; --bnce: " + escape(bnce, true) + "; --trak: " + escape(trak, true) + "; --size: " + escape(sizePx, true) + "; --lineHeight: " + escape(lineHeight, true) + "; --fontFeatures: " + escape(fontFea, true) + "; --textAlign: " + escape(textAlign, true) + ";"}" class="${"svelte-nktb63"}"><h2 class="${"type-tester svelte-nktb63"}" contenteditable spellcheck="${"false"}">Try Me!<span id="${"type-cursor"}" style="${"display:" + escape(cursorDisplay, true) + ";"}" class="${"svelte-nktb63"}"></span></h2>
</div>`;
});
const Slider_svelte_svelte_type_style_lang = "";
const css$4 = {
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
  $$result.css.add(css$4);
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
const css$3 = {
  code: `section.svelte-13ueknq{width:100%;display:grid;grid-template-rows:1fr min-content;align-content:center;padding:0.5rem 0.5rem 1rem 0.5rem}#control-container.svelte-13ueknq{padding:1rem 1.25rem 0.5rem 1.25rem;border-radius:0 0 1.25rem 1.25rem;border:2px solid var(--trackBg);border-top:0px}@media(max-width: 500px){section.svelte-13ueknq{padding:1rem 0.25rem 1rem 0.25rem}}.slider-box.svelte-13ueknq{display:grid;grid-template-columns:6rem auto 1fr;grid-gap:0.5rem;align-items:center;margin-bottom:0.5rem;font-weight:600}input[type="number"].svelte-13ueknq{width:3.05rem;font-size:0.875em;font-feature-settings:"tnum";font-weight:600;text-align:right;margin:0 0.25rem 0 0.5rem;border-radius:0.375rem;font-family:'ShantellSans', serif;color:var(--textColor);border:transparent 1px solid;background:transparent;-moz-appearance:textfield}input[type="number"].svelte-13ueknq:focus{outline:none;border:var(--text) solid 1px}input.svelte-13ueknq::-webkit-outer-spin-button,input.svelte-13ueknq::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}`,
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
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

<section class="${"svelte-13ueknq"}">${validate_component(TypeTesterText, "TypeTesterText").$$render(
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

        
    <div id="${"control-container"}" class="${"svelte-13ueknq"}"><div class="${"controls"}"><div class="${"slider-box svelte-13ueknq"}"><label for="${"sizeSlider"}">Font Size</label>
                <input type="${"number"}"${add_attribute("min", sizePxMin, 0)}${add_attribute("max", sizePxMax, 0)} step="${"1"}" class="${"svelte-13ueknq"}"${add_attribute("value", sizePx, 0)}>
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

            <div class="${"slider-box svelte-13ueknq"}"><label for="${"wghtSlider"}">Weight</label>
                <input type="${"number"}"${add_attribute("min", wghtMin, 0)}${add_attribute("max", wghtMax, 0)} step="${"1"}" class="${"svelte-13ueknq"}"${add_attribute("value", wght, 0)}>
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
            <div class="${"slider-box svelte-13ueknq"}"><label for="${"wghtSlider"}">Italic</label>
                <input type="${"number"}"${add_attribute("min", italMin, 0)}${add_attribute("max", italMax, 0)} step="${"0.01"}" class="${"svelte-13ueknq"}"${add_attribute("value", ital, 0)}>
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

            <div class="${"slider-box svelte-13ueknq"}"><label for="${"irglSlider"}">Irregularity</label>
                <input type="${"number"}"${add_attribute("min", irglMin, 0)}${add_attribute("max", irglMax, 0)} step="${"1"}" class="${"svelte-13ueknq"}"${add_attribute("value", irgl, 0)}>
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

            <div class="${"slider-box svelte-13ueknq"}"><label for="${"bnceSlider"}">Bounce</label>
                <input type="${"number"}"${add_attribute("min", bnceMin, 0)}${add_attribute("max", bnceMax, 0)} step="${"1"}" class="${"svelte-13ueknq"}"${add_attribute("value", bnce, 0)}>
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

            <div class="${"slider-box svelte-13ueknq"}"><label for="${"trakSlider"}">Tracking</label>
                <input type="${"number"}"${add_attribute("min", trakMin, 0)}${add_attribute("max", trakMax, 0)} step="${"1"}" class="${"svelte-13ueknq"}"${add_attribute("value", trak, 0)}>
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
const css$2 = {
  code: '.definitions.svelte-1u4ugib.svelte-1u4ugib{display:grid;grid-template-columns:1fr;grid-gap:1rem;padding:8rem 1.5rem;margin:0 auto;min-height:90vh;align-content:space-around}@media(min-width: 600px){.definitions.svelte-1u4ugib.svelte-1u4ugib{max-width:80vw}}@media(min-width: 800px){.definitions.svelte-1u4ugib.svelte-1u4ugib{display:grid;grid-template-columns:1fr 1fr;max-width:1100px}}h2.svelte-1u4ugib.svelte-1u4ugib{font-weight:700;font-size:4rem;letter-spacing:0.05em;line-height:1em;text-align:center;animation:slowShinyText 1.5s alternate infinite ease-in-out;animation-play-state:var(--animationState);text-align:left}h2.svelte-1u4ugib br.svelte-1u4ugib{display:none}@media(min-width: 800px){h2.svelte-1u4ugib br.svelte-1u4ugib{display:inline}}em.svelte-1u4ugib.svelte-1u4ugib{font-variation-settings:"ital" 1;font-style:normal}.gray.svelte-1u4ugib.svelte-1u4ugib{color:var(--trackBg)}.section-header.svelte-1u4ugib.svelte-1u4ugib{font-size:2rem;text-transform:uppercase}.axis.svelte-1u4ugib.svelte-1u4ugib{padding:2rem 0}.axis-name.svelte-1u4ugib.svelte-1u4ugib{text-transform:uppercase;letter-spacing:0.03em;margin-bottom:0.75rem;font-size:1rem}@media(min-width: 800px){.axis-name.svelte-1u4ugib.svelte-1u4ugib{font-size:1.25rem}}.axis-diagram.svelte-1u4ugib.svelte-1u4ugib{font-size:4rem;margin:0;line-height:1}.axis-range.svelte-1u4ugib.svelte-1u4ugib{font-weight:400;margin-left:1rem;font-feature-settings:"case"}.axis-tag.svelte-1u4ugib.svelte-1u4ugib{font-family:Courier, monospace;letter-spacing:0.05em;font-weight:700;font-size:0.825em;color:var(--gray);text-transform:none;background:var(--trackBg);padding:0.0625em 0.25em 0.125em;border-radius:0.25em;margin-left:1rem}.axis.svelte-1u4ugib p.svelte-1u4ugib{line-height:1.5;margin-top:0}@media(min-width: 800px){.axis.svelte-1u4ugib p.svelte-1u4ugib{max-width:45ch}}.between.svelte-1u4ugib.svelte-1u4ugib{font-variation-settings:"wght" 300;font-feature-settings:"case"}#wght.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 300}#wght.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-weight 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#wght.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 800}#wght.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-weight 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-weight{from{font-variation-settings:"wght" 300}to{font-variation-settings:"wght" 800}}#ital.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "ital" 0}#ital.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "ital" 1}#ital.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-italic 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#ital.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-italic 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-italic{from{font-variation-settings:"wght" 550,  "ital" 0}to{font-variation-settings:"wght" 550,  "ital" 1}}#IRGL.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "IRGL" 0;animation:svelte-1u4ugib-irregular 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "IRGL" 100;animation:svelte-1u4ugib-irregular 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-irregular 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#IRGL.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-irregular 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-irregular{from{font-variation-settings:"wght" 550,  "IRGL" 0}to{font-variation-settings:"wght" 550,  "IRGL" 100}}#BNCE.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "BNCE" -100}#BNCE.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "BNCE" 100}#BNCE.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-bounce 1s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#BNCE.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-bounce 1s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-bounce{from{font-variation-settings:"wght" 550,  "BNCE" -100}to{font-variation-settings:"wght" 550,  "BNCE" 100}}#TRAK.svelte-1u4ugib .min.svelte-1u4ugib{font-variation-settings:"wght" 550, "TRAK" 0}#TRAK.svelte-1u4ugib .max.svelte-1u4ugib{font-variation-settings:"wght" 550, "TRAK" 500}#TRAK.svelte-1u4ugib .from.svelte-1u4ugib{animation:svelte-1u4ugib-tracking 3s infinite alternate ease-in-out;animation-play-state:var(--animationState)}#TRAK.svelte-1u4ugib .to.svelte-1u4ugib{animation:svelte-1u4ugib-tracking 3s infinite alternate-reverse ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-1u4ugib-tracking{from{font-variation-settings:"wght" 550,  "TRAK" 0}to{font-variation-settings:"wght" 550,  "TRAK" 300}}@media(prefers-reduced-motion){.svelte-1u4ugib .from.svelte-1u4ugib,.svelte-1u4ugib .to.svelte-1u4ugib{animation-play-state:paused !important}}',
  map: null
};
const Definitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState: animationState2 } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState2 !== void 0)
    $$bindings.animationState(animationState2);
  $$result.css.add(css$2);
  return `<section class="${"definitions svelte-1u4ugib"}" style="${"--animationState: " + escape(animationState2, true) + ";"}"><div class="${"section-header svelte-1u4ugib"}"><h2 class="${"svelte-1u4ugib"}">Variable <br class="${"svelte-1u4ugib"}">Axes</h2></div>

    <div id="${"wght"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState2 == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState2 == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Weight <span class="${"axis-range svelte-1u4ugib"}">(300 to 800)</span> <span class="${"axis-tag svelte-1u4ugib"}">wght</span></h3>
        <p class="${"svelte-1u4ugib"}">You know it and love it, and now it\u2019s variable! <em class="${"svelte-1u4ugib"}">Weight</em> adjusts the overall thickness of the strokes in letterforms. Useful for establishing typographic hierarchy and much more.</p></div>

    <div id="${"ital"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState2 == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState2 == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Italic <span class="${"axis-range svelte-1u4ugib"}">(0 to 1)</span> <span class="${"axis-tag svelte-1u4ugib"}">ital</span></h3>
        <p class="${"svelte-1u4ugib"}">Adjusts letters from upright to sloped. Glyphs keep the same overall shapes, but are redrawn to keep good curves and monolinear strokes. Useful to provide emphasis in typography.</p></div>

    <div id="${"IRGL"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState2 == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState2 == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Irregularity <span class="${"axis-range svelte-1u4ugib"}">(0 to 100)</span> <span class="${"axis-tag svelte-1u4ugib"}">IRGL</span></h3>
        <p class="${"svelte-1u4ugib"}">Adjusts glyph shapes from normalized proportions (with consistent heights and proportions for everyday typography) to irregular shaping and sizing (more like handwriting).</p></div>

    <div id="${"BNCE"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState2 == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState2 == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Bounce <span class="${"axis-range svelte-1u4ugib"}">(-100 to 100)</span> <span class="${"axis-tag svelte-1u4ugib"}">BNCE</span></h3>
        <p class="${"svelte-1u4ugib"}">Translates glyphs along their Y axis to provide a \u201Cbouncy\u201D look. Set to a default of 0, this gives a regular baseline. Animated between -100 and +100, this gives a wavy look.</p></div>

    <div id="${"TRAK"}" class="${"axis svelte-1u4ugib"}"><div class="${"axis-diagram svelte-1u4ugib"}"><span class="${["min svelte-1u4ugib", animationState2 == "running" ? "from" : ""].join(" ").trim()}">HHH</span>
            <span class="${"between gray svelte-1u4ugib"}">\u2014</span>
            <span class="${["max svelte-1u4ugib", animationState2 == "running" ? "to" : ""].join(" ").trim()}">HHH</span></div>
        <h3 class="${"axis-name svelte-1u4ugib"}">Tracking <span class="${"axis-range svelte-1u4ugib"}">(0 to 500)</span> <span class="${"axis-tag svelte-1u4ugib"}">TRAK</span></h3>
        <p class="${"svelte-1u4ugib"}">Adds extra spacing between letters (AKA \u201Ctracking\u201D). Useful for animating letter spacing, or for adding tracking in software which doesn\u2019t provide built-in support for it.</p></div>
    
</section>`;
});
const CharSet_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'section.svelte-13hggjt.svelte-13hggjt{background:var(--altBg);color:var(--altText);border-radius:1.25rem;margin:0 0.5rem;font-size:3rem;line-height:2;text-align:center;display:block}h2.svelte-13hggjt.svelte-13hggjt{text-align:center;text-transform:uppercase;font-size:2rem;letter-spacing:0.05em;font-variation-settings:"IRGL" 100;padding-top:3rem}@keyframes svelte-13hggjt-trackInOut{0%{font-variation-settings:"TRAK" 50, "BNCE" 0}25%{font-variation-settings:"TRAK" 250, "BNCE" 100}50%{font-variation-settings:"TRAK" 50, "BNCE" 0}75%{font-variation-settings:"TRAK" 250, "BNCE" -100}100%{font-variation-settings:"TRAK" 50, "BNCE" 0}}#grid.svelte-13hggjt.svelte-13hggjt{padding:0ch 1ch 1.25ch;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fit, minmax(3ch, 1fr) )}#grid.svelte-13hggjt span.svelte-13hggjt,#grid.svelte-13hggjt span.down.svelte-13hggjt{text-align:center}@media(pointer:fine){#grid.svelte-13hggjt:hover span.svelte-13hggjt{animation:svelte-13hggjt-slowShinyText 1s alternate infinite ease-in-out;animation-play-state:var(--animationState)}#grid.svelte-13hggjt:hover span.down.svelte-13hggjt{animation:svelte-13hggjt-slowShinyText 1s reverse alternate infinite ease-in-out;animation-play-state:var(--animationState)}@keyframes svelte-13hggjt-slowShinyText{from{font-variation-settings:"BNCE" -100}to{font-variation-settings:"BNCE" 100}}}@media(prefers-reduced-motion){#grid.svelte-13hggjt:hover span.svelte-13hggjt,#grid.svelte-13hggjt:hover span.down.svelte-13hggjt{animation:none}}@media(max-width: 500px){section.svelte-13hggjt.svelte-13hggjt{margin:0 0.25rem}h2.svelte-13hggjt.svelte-13hggjt{margin:0;padding-top:1.5rem;font-size:9vw}#grid.svelte-13hggjt.svelte-13hggjt{grid-template-columns:repeat(auto-fit, minmax(2ch, 1fr));padding:0.625ch .5ch;margin:0 0.25rem}section.svelte-13hggjt.svelte-13hggjt{font-size:1.5rem}}',
  map: null
};
const CharSet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animationState: animationState2 } = $$props;
  if ($$props.animationState === void 0 && $$bindings.animationState && animationState2 !== void 0)
    $$bindings.animationState(animationState2);
  $$result.css.add(css$1);
  return `<section class="${"charset svelte-13hggjt"}"><h2 class="${"svelte-13hggjt"}">Characters</h2>
    
    
    <div class="${"grid svelte-13hggjt"}" id="${"grid"}" style="${"--animationState: " + escape(animationState2, true) + ";"}"><div><span class="${"down svelte-13hggjt"}">A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0100
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0102
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0104
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01CD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0200
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0202
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0106
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0108
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0112
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0114
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0116
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0118
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0204
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0206
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">G
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0120
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0122
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01E6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">H
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0124
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">I
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xCF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0128
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0130
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0208
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">J
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0134
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">K
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0136
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">L
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0139
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">M
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">N
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0143
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0145
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0147
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">O
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0150
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01A0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01EA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u022A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u022C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0230
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">P
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">Q
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">R
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0154
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0156
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0158
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0210
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0212
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">S
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0160
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0218
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">T
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0162
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0164
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u021A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">U
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0168
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0170
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0172
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01AF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01D3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0214
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0216
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EEA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EEC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EEE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">V
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">W
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0174
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E80
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E82
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E84
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">X
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">Y
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0176
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0178
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0232
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">Z
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0179
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u017B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u017D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xC6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0110
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0126
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0132
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0141
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0152
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0166
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u018F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01CA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E9E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u03A9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0402
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0404
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0405
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0406
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0407
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0408
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0409
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0410
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0411
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0412
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0413
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0403
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0414
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0415
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0400
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0401
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0416
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04C1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04DC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0417
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04DE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0418
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u041F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0420
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0421
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0422
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0423
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u040E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04EE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0424
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0425
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0426
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0427
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0428
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0429
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u042F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0462
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u046A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0472
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0474
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0490
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0492
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0494
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0496
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0498
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u049A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u049C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04AA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04AE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04BA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04C0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04CB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u051A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u051C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">a
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0101
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0103
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0105
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01CE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0201
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0203
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EA9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EAF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">b
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">c
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0107
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0109
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">d
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u010F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">e
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xEA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xEB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0113
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0115
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0117
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0119
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0205
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0207
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EB9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EBF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">f
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">g
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u011F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0121
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0123
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01E7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">h
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0125
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">i
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xEC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xED
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xEE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xEF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0129
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u012F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0209
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EC9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">j
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0135
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">k
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0137
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">l
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u013E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">m
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">n
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0144
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0146
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0148
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">o
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0151
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01A1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01EB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u020F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u022B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u022D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0231
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ECF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1ED9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EDF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">p
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">q
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">r
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0155
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0157
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0159
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0211
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0213
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">s
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u015F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0161
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0219
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">t
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0163
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0165
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u021B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">u
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0169
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u016F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0171
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0173
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01B0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01D4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0215
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0217
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EE9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EEB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EED
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EEF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">v
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">w
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0175
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E81
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E83
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1E85
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">x
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">y
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0177
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0233
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u1EF9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">z
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u017A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u017C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u017E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xDF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xE6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01FF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xFE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0111
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0127
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0131
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0133
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0138
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0140
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0142
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u014B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0153
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0167
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01CC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0259
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u03C0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0430
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0431
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0432
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0433
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0453
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0434
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0435
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0450
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0451
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0436
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04C2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04DD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0437
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04DF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0438
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0439
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u043F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0440
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0441
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0442
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0443
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04EF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0444
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0445
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0446
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0447
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0448
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0449
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u044F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0452
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0454
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0455
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0456
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0457
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0458
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0459
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u045F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0463
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u046B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0473
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0475
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0491
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0493
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0495
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0497
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0499
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u049B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u049D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04A5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04AB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04B9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04BB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04CC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04CF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04D9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04E9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u04F7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u051B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u051D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01C8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u01CB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02B9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02BA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02BC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xAA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0300
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0301
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0302
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0303
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0304
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0306
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0307
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0308
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0309
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u030A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u030B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u030C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u030F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0311
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0312
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u031B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0323
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0324
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0326
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0327
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0328
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u032E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0331
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2153
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2154
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u215B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u215C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u215D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u215E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">_
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">-
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2010
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2013
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2014
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">(
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">)
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">[
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">]
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">{
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">}
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u27E8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u27E9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\\
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">#
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">%
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2030
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">&#39;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">&quot;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2018
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2019
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u201C
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u201D
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u201A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u201E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2039
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u203A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xAB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">*
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2020
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2021
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">.
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">,
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">:
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2026
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">!
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">?
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xBF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">/
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\\
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2044
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">|
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">@
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">&amp;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2113
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2116
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2022
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2032
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2033
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">+
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2212
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xF7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xD7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">=
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">&lt;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">&gt;
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2264
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2265
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2248
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2260
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xAC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2052
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2202
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2206
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u220F
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2211
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2215
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2219
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u221A
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u221E
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u222B
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">$
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA3
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20A1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20A4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20A6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20A9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20AB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20AC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u0192
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20AD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20AE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B1
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B2
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B5
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20B9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20BA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20BC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u20BD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">^
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">~
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB4
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\`
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02DD
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02C6
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02C7
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02D8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02DC
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xAF
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02D9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02DA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB8
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u02DB
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xA9
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xAE
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2122
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\xB0
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u25CA
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2661
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2665
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2713
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2080
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2081
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2082
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2083
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2084
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2085
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2086
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2087
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2088
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2089
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2070
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2074
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2075
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2076
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2077
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2078
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2079
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2190
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2191
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2192
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2193
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2196
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2197
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2198
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">\u2199
                </span></div>
            <div><span class="${"down svelte-13hggjt"}">@
                </span></div>
    </div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-tk4sei{width:100%;height:90%}#wall.svelte-tk4sei{cursor:crosshair;min-height:80vh;overflow:hidden;display:grid;justify-content:center;align-content:center}.mouse.svelte-tk4sei{display:none}@media(pointer:fine){.mouse.svelte-tk4sei{display:block}.touch.svelte-tk4sei{display:none}}.hint.svelte-tk4sei{text-transform:uppercase;font-size:2rem;font-feature-settings:"case";letter-spacing:0.2em;text-align:center;animation:wobble .875s ease-in-out alternate infinite;animation-play-state:var(--animationState);pointer-events:none}@media(prefers-reduced-motion){.hint.svelte-tk4sei{animation-play-state:paused}}@media(max-width: 500px){}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $animationState, $$unsubscribe_animationState;
  $$unsubscribe_animationState = subscribe(animationState, (value) => $animationState = value);
  let wall;
  $$result.css.add(css);
  $$unsubscribe_animationState();
  return `${$$result.head += `${$$result.title = `<title>Shantell Sans \u2192 Arrow Type</title>`, ""}<meta name="${"description"}" content="${"A font for artist Shantell Martin"}" data-svelte="svelte-1lv2o5g">`, ""}


<main style="${"--animationState: " + escape($animationState, true) + ";"}" class="${"svelte-tk4sei"}"><div id="${"wall"}" style="${"--animationState: " + escape($animationState, true) + ";"}" class="${"svelte-tk4sei"}"${add_attribute("this", wall, 0)}><span class="${"hint mouse svelte-tk4sei"}" style="${"--animationState: " + escape($animationState, true) + ";"}">Click anywhere</span>
		<span class="${"hint touch svelte-tk4sei"}" style="${"--animationState: " + escape($animationState, true) + ";"}">Tap anywhere</span></div>

	${validate_component(About, "About").$$render($$result, { animationState: $animationState }, {}, {})}
	${validate_component(TypeTester, "TypeTester").$$render($$result, {}, {}, {})}
	${validate_component(Definitions, "Definitions").$$render($$result, { animationState: $animationState }, {}, {})}
	${validate_component(CharSet, "CharSet").$$render($$result, { animationState: $animationState }, {}, {})}
</main>`;
});
export {
  Page as default
};
