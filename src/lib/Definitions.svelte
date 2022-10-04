<script>
    export let animationState;
</script>

<section class="definitions" style="--animationState: {animationState};">

    <div class="section-header">
        <h2>Variable <br/>Axes</h2>
    </div>

    <div id="wght" class="axis">
        <div class="axis-diagram" >
            <span class="min" class:from={animationState=="running"}>HHH</span>
            <span class="between gray">•</span>
            <span class="max" class:to={animationState=="running"}>HHH</span>
        </div>
        <h3 class="axis-name">Weight <span class="axis-range">(300 to 800)</span> <span class="axis-tag">wght</span></h3>
        <p>You know it and love it, and now it’s variable! <em>Weight</em> adjusts the overall thickness of the strokes in letterforms. Useful for establishing typographic hierarchy and much more.</p>
    </div>

    <div id="ital" class="axis">
        <div class="axis-diagram">
            <span class="min" class:from={animationState=="running"}>HHH</span>
            <span class="between gray">•</span>
            <span class="max" class:to={animationState=="running"}>HHH</span>
        </div>
        <h3 class="axis-name">Italic <span class="axis-range">(0 to 1)</span> <span class="axis-tag">ital</span></h3>
        <p>Adjusts letters from upright to sloped. Glyphs keep the same overall shapes, but are redrawn to keep good curves and monolinear strokes. Useful to provide emphasis in typography.</p>
    </div>

    <div id="IRGL" class="axis">
        <div class="axis-diagram">
            <span class="min" class:from={animationState=="running"}>HHH</span>
            <span class="between gray">•</span>
            <span class="max" class:to={animationState=="running"}>HHH</span>
        </div>
        <h3 class="axis-name">Irregularity <span class="axis-range">(0 to 100)</span> <span class="axis-tag">IRGL</span></h3>
        <p>Adjusts glyph shapes from normalized proportions (with consistent heights and proportions for everyday typography) to irregular shaping and sizing (more like handwriting).</p>
    </div>

    <div id="BNCE" class="axis">
        <div class="axis-diagram">
            <span class="min" class:from={animationState=="running"}>HHH</span>
            <span class="between gray">•</span>
            <span class="max" class:to={animationState=="running"}>HHH</span>
        </div>
        <h3 class="axis-name">Bounce <span class="axis-range">(-100 to 100)</span> <span class="axis-tag">BNCE</span></h3>
        <p>Translates glyphs along their Y axis to provide a “bouncy” look. Set to a default of 0, this gives a regular baseline. Animated between -100 and +100, this gives a wavy look.</p>
    </div>

    <div id="TRAK" class="axis">
        <div class="axis-diagram">
            <span class="min" class:from={animationState=="running"}>HHH</span>
            <span class="between gray">•</span>
            <span class="max" class:to={animationState=="running"}>HHH</span>
        </div>
        <h3 class="axis-name">Tracking <span class="axis-range">(0 to 500)</span> <span class="axis-tag">TRAK</span></h3>
        <p>Adds extra spacing between letters (AKA “tracking”). Useful for animating letter spacing, or for adding tracking in software which doesn’t provide built-in support for it.</p>
    </div>
    
</section>

<style>
    .definitions {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        padding: 8rem 1.5rem;
        margin: 0 auto;
        min-height: 90vh;
        align-content: space-around;
    }
    @media (min-width: 600px) {
        .definitions {
            max-width: 80vw;
        }
    }

    @media (min-width: 800px) {
        .definitions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1100px;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 0.05em;
        line-height: 1em;
        text-align: center;
        animation: slowShinyText 1.5s alternate infinite ease-in-out;
        animation-play-state: var(--animationState);
        text-align: left;
    }
    h2 br {
        display: none;
    }

    @media (min-width: 800px) {
        h2 {
        }
        h2 br {
            display: inline;
        }
    }

    em {
        font-variation-settings: "ital" 1;
        font-style: normal;
    }

    .gray {
        color: var(--trackBg);
    }

    .section-header {
        font-size: 2rem;
        text-transform: uppercase;
    }

    .axis {
        padding: 2rem 0;
    }

    .axis-name {
        text-transform: uppercase;
        letter-spacing: 0.03em;
        margin-bottom: 0.75rem;
        font-size: 1rem;
    }

    @media (min-width: 800px) {
        .axis-name {
            font-size: 1.25rem;
        }
    }

    .axis-diagram {
        font-size: 4rem;
        margin: 0;
        line-height: 1;
    }

    .axis-range {
        font-weight: 400;
        margin-left: 1rem;
        font-feature-settings: "case";
    }

    .axis-tag {
        font-family: Courier, monospace;
        letter-spacing: 0.05em;
        font-weight: 700;
        font-size: 0.825em;
        color: var(--gray);
        text-transform: none;
        background: var(--trackBg);
        padding: 0.0625em 0.25em 0.125em;
        border-radius: 0.25em;
        margin-left: 1rem;
    }

    .axis p {
        line-height: 1.5;
        margin-top: 0;
    }
    @media (min-width: 800px) {
        .axis p {
            max-width: 45ch;
        }
    }

    .between {
        font-variation-settings: "wght" 300;
        font-feature-settings: "case";
    }
    #wght .min {
        font-variation-settings: "wght" 300;
    }
    #wght .from {
        animation: weight 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #wght .max {
        font-variation-settings: "wght" 800;
    }
    #wght .to {
        animation: weight 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    @keyframes weight {
        from {
            font-variation-settings: "wght" 300;
        } to {
            font-variation-settings: "wght" 800;
        }
    }


    #ital .min {
        font-variation-settings: "wght" 550, "ital" 0;
    }
    #ital .max {
        font-variation-settings: "wght" 550, "ital" 1;
    }
    #ital .from {
        animation: italic 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #ital .to {
        animation: italic 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    @keyframes italic {
        from {
            font-variation-settings: "wght" 550,  "ital" 0;
        } to {
            font-variation-settings: "wght" 550,  "ital" 1;
        }
    }

    #IRGL .min {
        font-variation-settings: "wght" 550, "IRGL" 0;
        animation: irregular 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #IRGL .max {
        font-variation-settings: "wght" 550, "IRGL" 100;
        animation: irregular 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    #IRGL .from {
        animation: irregular 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #IRGL .to {
        animation: irregular 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    @keyframes irregular {
        from {
            font-variation-settings: "wght" 550,  "IRGL" 0;
        } to {
            font-variation-settings: "wght" 550,  "IRGL" 100;
        }
    }

    #BNCE .min {
        font-variation-settings: "wght" 550, "BNCE" -100;
    }
    #BNCE .max {
        font-variation-settings: "wght" 550, "BNCE" 100;
    }
    #BNCE .from {
        animation: bounce 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #BNCE .to {
        animation: bounce 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    @keyframes bounce {
        from {
            font-variation-settings: "wght" 550,  "BNCE" -100;
        } to {
            font-variation-settings: "wght" 550,  "BNCE" 100;
        }
    }

    #TRAK .min {
        font-variation-settings: "wght" 550, "TRAK" 0;
    }
    #TRAK .max {
        font-variation-settings: "wght" 550, "TRAK" 500;
    }
    #TRAK .from {
        animation: tracking 1s infinite alternate ease-in-out;
        animation-play-state: var(--animationState);
    }
    #TRAK .to {
        animation: tracking 1s infinite alternate-reverse ease-in-out;
        animation-play-state: var(--animationState);
    }
    @keyframes tracking {
        from {
            font-variation-settings: "wght" 550,  "TRAK" 0;
        } to {
            font-variation-settings: "wght" 550,  "TRAK" 150;
        }
    }

    @media (prefers-reduced-motion) {
        * .from, * .to {
            animation-play-state: paused !important;
        }
    }
</style>