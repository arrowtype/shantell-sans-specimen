<script>
    import TypeTesterText from '$lib/TypeTesterText.svelte'
    import Slider from '$lib/Slider.svelte'
    import { onMount } from 'svelte';

    // basic font sizing & layout
    export let initialSizeVmin;
    export let sizePx = 200; // comes from TypeTesterText component (?)
    export let sizePxMin = 4;
    export let sizePxMax = 250;
    export let maxVmin = 32;
    export let minLineHeight = 0.825;
    export let maxLineHeight = 1.375;
    export let lineHeightSizeScalingCapPx = 72;
    export let lineHeight = 1;

    let updatedSizeVmin;
    let updatedSizePx;

    // let innerWidth = window.innerWidth;
    // let innerHeight = window.innerHeight;
    let innerWidth;
    let innerHeight;

    // variable axes
    
    export let wght = 700; // comes from TypeTesterText component (?)
    export let ital = 0.0; // comes from TypeTesterText component (?)
    export let infm = 0; // comes from TypeTesterText component (?)
    export let bnce = 0;  // comes from TypeTesterText component (?)
    export let spac = 0;  // comes from TypeTesterText component (?)

    export let wghtMin = 300;
    export let wghtMax = 800;

    export let italMin = 0.0;
    export let italMax = 1.0;

    export let infmMin = 0;
    export let infmMax = 100;

    export let bnceMin = -100;
    export let bnceMax = 100;
    
    export let spacMin = 0;
    export let spacMax = 100;

    // function onResize() {
	// 	innerWidth = window.innerWidth;
    //     innerHeight = window.innerHeight;
    //     handleResize(innerWidth, innerHeight)
	// }
	
	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
            innerHeight = window.innerHeight;
            

            handleResize(innerWidth, innerHeight)
		}
        innerWidth = window.innerWidth;
        innerHeight = window.innerHeight;
		window.addEventListener('resize', onResize);


        setInitialFontSize(innerWidth, innerHeight)

		return () => window.removeEventListener('resize', onResize);
	});
    

    // handle font scaling & layout

    function oneVmin2px(innerWidth, innerHeight) {
        let windowMin = innerWidth < innerHeight ? innerWidth : innerHeight;
        let oneVmin = windowMin / 100
        return oneVmin
    }

    function setInitialFontSize(innerWidth, innerHeight) {
        let oneVmin = oneVmin2px(innerWidth, innerHeight)
        sizePxMax = oneVmin * maxVmin
        sizePx = Math.round(oneVmin * innerWidth / 100)
        updateFontPx()
        setLineHeight()
    }

    function handleResize(innerWidth, innerHeight) {
        let oneVmin = oneVmin2px(innerWidth, innerHeight)
        sizePxMax = oneVmin * maxVmin

        let windowMin = innerWidth < innerHeight ? innerWidth : innerHeight;
        // updatedSizeVmin = (100 / windowMin ) * sizePx


        sizePx = Math.round(updatedSizeVmin * windowMin / 100)
    }

    function updateFontVmin() {
        sizeVmin = sizePx / 0.01 / innerWidth
    }

    function updateFontPx() {
        sizePx = Math.round(sizePx)

        let windowMin = innerWidth < innerHeight ? innerWidth : innerHeight;
        updatedSizeVmin = (100 / windowMin ) * sizePx

        console.log(updatedSizeVmin)
        setLineHeight()
    }

    function setLineHeight() {
        let maxSizePercent = sizePx / (lineHeightSizeScalingCapPx - sizePxMin)

        let lineHeightRange = maxLineHeight - minLineHeight

        if (maxSizePercent <= 1) {
            lineHeight = minLineHeight + (lineHeightRange - (lineHeightRange * maxSizePercent))
            console.log(lineHeight, minLineHeight)
        } else {
            lineHeight = minLineHeight
        }
    }

    // Font features

    let showOptions = false
    let optionsState = "hide-options"

    // //JUST FOR DESIGN PHASE
    // let showOptions = true
    // let optionsState = "show-options"
    // //JUST FOR DESIGN PHASE

    function showOptionsDrawer() {
        showOptions = true
        optionsState = "show-options"
    }
    function hideOptionsDrawer() {
        showOptions = false
        optionsState = "hide-options"
    }

    let fontFeatures = ''

    let feaState = []

    function handleFeatures(event) {
      fontFeatures = `'${[...event.detail.active].join("','")}'`;
      feaState = [...event.detail.active]
    }


</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section>

    <TypeTesterText sizePx={sizePx} wght={wght} ital={ital} infm={infm} bnce={bnce}  spac={spac} fontFea={fontFeatures} lineHeight={lineHeight} />

        <!-- type style sliders -->
    <div id="control-container" >
        <div class="controls">
            <div class="slider-box">
                <label for="sizeSlider">Font Size</label>
                <input type="number" bind:value={sizePx} min={sizePxMin} max={sizePxMax} step="1" on:input={updateFontVmin} on:change={updateFontVmin}>
                <Slider id="sizeSlider" label="size" bind:value={sizePx} type="range" min={sizePxMin} max={sizePxMax} step={1} on:input={updateFontPx} on:change={updateFontPx} />
            </div>

            <div class="slider-box">
                <label for="wghtSlider">Weight</label>
                <input type="number" bind:value={wght} min={wghtMin} max={wghtMax} step="1" />
                <Slider id="wghtSlider"  label="wght" bind:value={wght} type="range" min={wghtMin} max={wghtMax} step={1} />
            </div>
            <div class="slider-box">
                <label for="wghtSlider">Italic</label>
                <input type="number" bind:value={ital} min={italMin} max={italMax} step="0.01" />
                <Slider id="italSlider"  label="ital" bind:value={ital} type="range" min={italMin} max={italMax} step={0.01} />
            </div>

            <div class="slider-box">
                <label for="infmSlider">Informality</label>
                <input type="number" bind:value={infm} min={infmMin} max={infmMax} step="1" />
                <Slider id="infmSlider"  label="infm" bind:value={infm} type="range" min={infmMin} max={infmMax} step={1} />
            </div>

            <div class="slider-box">
                <label for="bnceSlider">Bounce</label>
                <input type="number" bind:value={bnce} min={bnceMin} max={bnceMax} step="1" />
                <Slider id="bnceSlider"  label="bnce" bind:value={bnce} type="range" min={bnceMin} max={bnceMax} step={1} />
            </div>

            <div class="slider-box">
                <label for="spacSlider">Spacing</label>
                <input type="number" bind:value={spac} min={spacMin} max={spacMax} step="1" />
                <Slider id="spacSlider"  label="spac" bind:value={spac} type="range" min={spacMin} max={spacMax} step={1} />
            </div>

            <!-- {#if innerWidth > 1100}
                <button on:click={showOptionsDrawer}>
                    <OptionsToggle/>
                </button>
            {/if} -->
        </div>
    </div>

    <!-- options sidebar -->
    <!-- {#if showOptions}
        <div class="modal-background" on:click={hideOptionsDrawer}></div>
    {/if}
    <div id="options-drawer" class={optionsState} >
        <Options fea={feaState} on:features={handleFeatures} on:close="{hideOptionsDrawer}" />
    </div> -->



    
</section>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr min-content;
        align-content: center;
        padding: 0.5rem 0.5rem 1rem 0.5rem;
    }

    #control-container {
        padding: 1rem 1.25rem 0.5rem 1.25rem;
        border-radius:  0 0 1.25rem 1.25rem;
        border: 2px solid var(--trackBg);
        border-top: 0px;
    }

    @media (max-width: 500px) {
        section {
            padding: 1rem 0.25rem 1rem 0.25rem;
        }
    }

    .slider-box {
        display: grid;
        grid-template-columns: 6rem auto 1fr;
        grid-gap: 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    input[type="number"] {
        width: 3.05rem;
        font-size: 0.875em;
        font-feature-settings: "tnum";
        font-weight: 600;
        text-align: right;
        margin: 0 0.25rem 0 0.5rem;
        border-radius: 0.375rem;
        font-family: 'ShantellSans', serif;
        color: var(--textColor);
        /* border: var(--trackBg) 1px solid; */
        border: transparent 1px solid;
        background: transparent;
        -moz-appearance:textfield; /* Firefox */

    }

    input[type="number"]:focus {
        outline: none;
        border: var(--text) solid 1px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    /* @keyframes slowShinyText {
    0% {
        font-variation-settings: "BNCE" 0, "INFM" 50;
    }
    25% {
        font-variation-settings: "BNCE" -50, "INFM" 50;
    }
    50% {
        font-variation-settings: "BNCE" 0, "INFM" 50;
    }
    75% {
        font-variation-settings: "BNCE" 50, "INFM" 50;
    }
    100% {
        font-variation-settings: "BNCE" 0, "INFM" 50;
    }
    } */
</style>