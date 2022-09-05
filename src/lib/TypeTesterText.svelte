<script>
    let cursorDisplay = 'inline-block';

    export let fontFea = ''

    function removeCursor() {
      cursorDisplay = 'none'
    }

    // let windowWidth = 500;
    // let windowHeight = 500;

    export let sizePx = 200;
    export let wght = 400;
    export let ital = 0;
    export let irgl = 0;
    export let bnce = 0;
    export let trak = 0;
    // export let italic = "normal";
    export let lineHeight = 1;
    export let textAlign = "center";
</script>



<div id="type-area" {sizePx} {wght} {ital} {irgl} {bnce} {fontFea} {lineHeight} style="--wght: {wght}; --ital: {ital}; --irgl: {irgl};  --bnce: {bnce}; --trak: {trak};  --size: {sizePx}; --lineHeight: {lineHeight}; --fontFeatures: {fontFea}; --textAlign: {textAlign};">
  <h2 class="type-tester" contenteditable spellcheck="false" on:focus={removeCursor}>Try Me!<span id="type-cursor" style="display:{cursorDisplay};"></span></h2>
</div>


<style>
    :root {
        --size: 15;
        --lineHeight: 1;
        --wght: 700;
        --ital: 0;
        --irgl: 0;
        --bnce: 0;
        --trak: 0;
        --italic: normal;
        --maxSizePercent: 1;
        --fontFeatures: "";
        --textAlign: center;
    }
    #type-area {
      width: 100%;
      height: 60vh;
      top: 0;
      overflow-y: auto;
      display: grid;
      align-content: center;
      justify-content: center;
      color: var(--text);
      text-align: var(--textAlign);
      font-feature-settings: var(--fontFeatures);
      border-radius: 1rem 1rem 0 0;
      border: 2px solid var(--trackBg);
    }
/* 
    @media (max-width: 1100px) {
      #type-area {
        padding: 5rem 1rem;
      }
    } */

    /* #type-area:active, #type-area:focus {
      border: 2px solid var(--text);
    } */

    #type-area h2 {
      max-width: 60ch;
      margin: 0;
    }

    .type-tester {
        font-size: calc(var(--size) * 1px);
        font-weight: var(--wght);
        /* font-style: var(--italic); */
        font-variation-settings:  "ital" var(--ital), "IRGL" var(--irgl),  "BNCE" var(--bnce), "TRAK" var(--trak);
        outline: none;
        line-height: var(--lineHeight);
        opacity: 0;
        animation: fadeIn 0.5s 0.5s forwards;
        margin: 0.5em 0;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }
    #type-cursor {
      display: inline-block;
      position: absolute;
      width: 0;
    }
    /* has to be a pseudo-element, or placement shifts with line-height */
    #type-cursor:after {
      content: '';
      display: inline-block;
      position: relative;
      height: 0.9em;
      width: 0.0375em;
      background: var(--accent);
      transform: translate(0.035em, calc(var(--lineHeight) * 0.015em));
      opacity: 0;
      border-radius: 999px;
      animation: blink 0.4s infinite alternate;
    }
    @keyframes blink {
      to {
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion) {
        #type-cursor:after {
            animation-play-state: paused !important;
        }
    }

    

</style>