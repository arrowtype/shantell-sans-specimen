import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../chunks/index.js";
import { a as animationState } from "../../../chunks/stores.js";
import "../../../chunks/index2.js";
const ProcessArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"markdown-body"}"><h1>The Story of<br>Shantell Sans</h1>
<p><em>Shantell Sans mixes variable axes for Weight, Italic, Irregularity, and Bounce to deliver a wide array of font styles, from friendly, readable, everyday typographic workhorses to striking, high-energy, experimental styles meant especially for animation.</em></p>
<h2>Prologue</h2>
<h4>By Susanna Zaraysky, Editor, Google Fonts Blog</h4>
<p>In school, British visual artist <a href="${"https://shantellmartin.art/"}">Shantell Martin </a>was scared of spelling tests but she felt how words could be art and emotional relief. A discovery in her early 20s opened her eyes to why reading and writing were so difficult for her and motivated her to create the Shantell Sans typeface to inspire others to have fun with writing and words. She teamed up with Stephen Nixon of <a href="${"https://www.arrowtype.com/"}">Arrow Type</a> to create Shantell Sans.</p>
<h2>Why make a new font?</h2>
<h4>By Shantell Martin, Artist</h4>
<p><img src="${"assets/shantell-martin-by-Michelle-Mosqueda1.jpg"}" alt="${"Woman holding a black marker drawing on a white canvas"}" title="${"Shantell Martin, Photo credit Michelle Mosqueda"}">
<em>Shantell Martin, Photo credit Michelle Mosqueda</em></p>
<p>My first relationship with words was back in elementary school. We did spelling tests every week. Since I never passed them, I had to sit in detention.</p>
<p>Despite being scared of the test, I loved words. I wrote and drew a lot. I knew that words helped me to express my feelings and feel better. Since I was writing for myself, I didn\u2019t have to care about spelling.</p>
<p>When I was 20 or 21, I found out that I was dyslexic when I started my art degree at <a href="${"https://www.arts.ac.uk/colleges/central-saint-martins"}">Central Saint Martins</a> in London. I was in an environment where it felt like the majority of people were dyslexic.  I was instantly part of a cool group of creative people. However, I was angry about the amount of teachers who had never spotted my reading challenges. Instead of supporting me to learn to read and write, they punished me.</p>
<p>Creating my own font was a way to empower people to read and write, despite their reading challenges. A few years ago, I thought, \u201CWell, what if I could create my own font?\u201D What if I take my words, or my handwriting or the letters that I\u2019ve created, and make a font that is fun and playful, but also professional and usable. I wanted to make a font that feels accessible and open to remind people, including myself, that words are drawings and that words can exist on our own terms. I was inspired by Comic Sans because since I was a kid, I have liked how playful and easy it was to read, especially for me as a dyslexic.</p>
<p>I think we have an emotional response to fonts. A font might feel easier to read, or it feels more welcoming. Or it feels like something I want to look at or pick up. I definitely like fonts that have a little bit more space, because they feel more approachable. If you have a really tiny, fancy font, I don\u2019t want to touch it. It feels like there are some hurdles there. The usage of a font can make that font take on a certain personality. If you\u2019re very dyslexic, you\u2019re not going to pick up a book printed in a tiny font with words very close together. It feels intimidating. Or if the font is very plain and boring,  it doesn\u2019t capture your attention enough to want to spend time with it.</p>
<p>Stephen Nixon sent me a template, with lines on it for me to handwrite all of the Latin alphabet, numbers, and symbols. He used my handwriting to create a digital font.</p>
<h3>Giving the font away</h3>
<p>I made the choice to release it under an open font <a href="${"https://fonts.google.com/knowledge/glossary/licensing"}">license</a>, which means that I\u2019m not charging anyone for it. It\u2019s my gift to the world.</p>
<h2>To be continued\u2026</h2>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-10hn9br{display:block;margin:0;width:100%;min-height:100vh;padding:0 1rem}article.svelte-10hn9br{margin-left:auto;margin-right:auto;padding-top:4rem;padding-bottom:12rem;max-width:800px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $animationState, $$unsubscribe_animationState;
  $$unsubscribe_animationState = subscribe(animationState, (value) => $animationState = value);
  $$result.css.add(css);
  $$unsubscribe_animationState();
  return `${$$result.head += `${$$result.title = `<title>Shantell Sans \u2192 Arrow Type</title>`, ""}<meta name="${"description"}" content="${"A font for artist Shantell Martin"}" data-svelte="svelte-1lv2o5g">`, ""}

<main class="${"svelte-10hn9br"}"><article style="${"--animationState: " + escape($animationState, true) + ";"}" class="${"svelte-10hn9br"}">${validate_component(ProcessArticle, "ProcessArticle").$$render($$result, {}, {}, {})}</article>
</main>`;
});
export {
  Page as default
};
