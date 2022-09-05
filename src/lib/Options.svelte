<script>
    import { createEventDispatcher } from 'svelte';

    import LightModeToggle from './LightModeToggle.svelte';

    let showFeatures = false;
    let toggleOrientation = 0;

    function toggleFeaDrawer() {
        showFeatures = showFeatures === false
        if (showFeatures === true) {
            toggleOrientation = 180;
        } else {
            toggleOrientation = 0;
        }
    } 

    const dispatch = createEventDispatcher();

    let showOptions = true;

	function closeOptions() {
        dispatch('close');
        document.body.style.position = "";
        showOptions = false
    }

    const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

    // export let fea = [];

    // let activeFeatures = new Set();
    let activeFeatures = [];

    function join(activeFeatures) {
		// return `${activeFeatures.slice(0, -1).join(', ')}`;
        return [...activeFeatures].join(', ')
	}

    function updateFeatures(activeFeatures) {
		dispatch('features', {
			active: activeFeatures
		});
    }

    let textAlign = "center";

</script>

<svelte:window on:keydown={handle_keydown}/>


<div class="options-container" >
    <header>
        <LightModeToggle />

        <button on:click={closeOptions}>
            <!-- <span>Close</span> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <line x1="2" x2="14" y1="2" y2="14" stroke-width="2"/>
                <line x1="2" x2="14" y1="14" y2="2" stroke-width="2"/>
            </svg>
        </button>
    </header>
    <!-- DRAWER -->
    <div class="features" >
        <h4>Stylistic sets</h4>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="ss01" id="ss01" name="ss01" >
            <label for="ss01">
                <div class="diagram" style="--yShift: 0.02em;">
                    <span>AT</span>
                    <span style="--fea:'ss01';">AT</span>
                </div>
                <span>
                ss01:<br>Blackletter Caps
                </span>
            </label>
        </div>
        <h4>Numerical niceness</h4>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="tnum" id="tnum" name="tnum" >
            <label for="tnum">
                <div class="diagram">
                    <span style="--fea:'tnum' 0;">1</span>
                    <span style="--fea:'tnum' 1;">1</span>
                </div>
                <span>
                tnum:<br>Tabular numbers
                </span>
            </label>
        </div>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="zero" id="zero" name="zero" >
            <label for="zero">
                <div class="diagram">
                    <span style="--fea:'zero' 0;">0</span>
                    <span style="--fea:'zero' 1;">0</span>
                </div>
                <span>
                zero:<br>Dotted zero
                </span>
            </label>
        </div>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="ordn" id="ordn" name="ordn" >
            <label for="ordn">
                <div class="diagram">
                    <span style="--fea:'ordn' 0;">1o</span>
                    <span style="--fea:'ordn' 1, 'tnum' 0;">1o</span>
                </div>
                <span>
                ordn:<br>Ordinals
                </span>
            </label>
        </div>
        <!-- <h4>Useful extras</h4>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="titl" id="titl" name="titl" >
            <label for="titl">
                <div class="diagram" style="--yShift: 0.09em;">
                    <span>Ü</span>
                    <span style="--fea:'titl';">Ü</span>
                </div>
                <span>
                titl:<br>Titling caps
                </span>
            </label>
        </div>
        <div class="checkbox">
            <input  type="checkbox" bind:group={activeFeatures} on:change={updateFeatures(activeFeatures)} value="case" id="case" name="case" >
            <label for="case">
                <div class="diagram" style="--yShift: 0.02em;">
                    <span style="--fea:'ss03' 1;">I)</span>
                    <span style="--fea:'ss03' 1, 'case'1;">I)</span>
                </div>
                <span>
                case:<br>Case Punctuation
                </span>
            </label>
        </div> -->
    </div>
</div>


<!-- 
{tag: 'titl', desc:'Titling Diereses'},
{tag: 'tnum', desc:'Tabular Figures'}, 
-->

<style>

    :root {
        fea: '';
        yShift: 0em;
    }
    
    .options-container {
        height: 100vh;
        z-index: 5;
        background: var(--altBg);
        border-left: 1px solid var(--trackBg);
    }
    .features {        
        font-size: 0.825rem;
        font-weight: 400;
        height: calc(100% - 2rem);
        overflow-y: auto;
        transform: translate(0);
        border-top: 1px var(--trackBg) solid;
        /* extra space on bottom to allow scroll and to be clear bottom UI on iOS safari */
        padding: 0.5rem 0.5rem 6rem 0.5rem; 
        background: var(--altBg2);
    }
    .features svg g {
        font-family: 'NameSansVF', serif;
        font-weight: 400;
    }
    .features svg text,
    label svg rect {
        fill: currentColor;
    }
    
    header  {
        height: 3rem;
        padding: 0.5rem 0.5rem 0.5rem 0.875rem;
        /* display: grid; */
        /* grid-template-columns: 1fr auto; */
        display: flex;
        

        align-items: center;
        justify-content: space-between;
    }
    h3 {
        font-size: 1rem;
        line-height: 1;
        margin: 0;
    }
    .features h4 {
        font-weight: 400;
        letter-spacing: 0.03em;
        padding-left: 0.5rem;
        opacity: 0.75;
        text-transform: uppercase;
        margin: 1.5rem 0 0.5rem;
        font-feature-settings: "case", "ss01";
    }
    header button,
    header button:hover {
        border: none;
        padding: 0;
    }
    header svg line {
        stroke: currentColor;
    }
	button {
		background-color: transparent;
		color: var(--text);
		border: 1px solid var(--trackBg);
		font-weight: 400;
		min-width: 2rem;
		height: 2rem;
		border-radius: 0.125rem;
        padding: 0 0.5em;
		align-content: center;
		justify-content: center;
		transition: 0.15s;
		margin:0;
		font-size: 0.875rem;
	}

    svg path, svg line {
        fill: currentColor;
        transform-origin: 50% 50%;
    }
	button:hover {
		cursor: pointer;
		border: 1px solid var(--accent);
        color: var(--accent);
	}
    @media (max-width: 600px) {
        button {
            font-size: 0.75rem;
        }
    }
    
    .checkbox {
        display: grid;
        text-align: left;
        height: 4rem;
        align-items: center;
        line-height: 1;
        border-radius: 0.25rem;
        position: relative;
        /* background: var(--altBg); */
        margin-bottom: 0.25rem;
    }

    [type="checkbox"]:not(:checked),
    [type="checkbox"]:checked {
        position: absolute;
        left: 0;
        opacity: 0.01;
    }

    /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #aaa;
    background: var(--altBg);
    border: none;
    border-radius: 0.25rem;
    box-shadow: none;
    -webkit-transition: all .25s;
    transition: all .25s;
    z-index: -1;
  }
  [type="checkbox"]:checked + label:before {
      background: var(--altBg);
      
  }

    [type="checkbox"]:checked + label:before {
        background: var(--bodyBg);
    }
    
    [type="checkbox"]:checked + label {
        color: var(--accent);
    }
    
    .checkbox [type="checkbox"] + label {
        display: grid;
        grid-template-columns: 40% 1fr;
        align-items: center;
        gap: 0.5rem;
        position: relative;
        z-index: 2;
    }
    .checkbox input,
    .checkbox label {
        margin: 0;
        font-feature-settings: "tnum";
        height: 100%;
        line-height: 1.375;
        font-feature-settings: "tnum";
        padding: 0 0.5rem;
    }

    /* trying to clear bottom UI in iOS Safari */
    .checkbox:last-of-type {
        margin-bottom: 6rem; 
    }

    @media (hover: hover) {
        .checkbox:hover, 
        .checkbox input:hover, 
        .checkbox label:hover 
        {
            color: var(--accent);
            cursor: pointer;
            /* background: var(--bodyBg); */
        }
    }

    .diagram {
        font-size: 3.5rem;
        line-height: 0.8;
        font-weight: 400;
        color: currentColor;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        text-align: center;
    }
    .alt-diagram {
        grid-template-columns: 1fr;
        font-size: 3rem;
        letter-spacing: 0.03em;
    }
    label span {
        font-feature-settings: "tnum", var(--fea);
    }
    .diagram span {
        font-feature-settings: var(--fea);
        font-variation-settings: "opsz" 36;
        transform: translateY(var(--yShift));
    }
    .diagram span:first-of-type {
        opacity: 0.5;
    }
    .alt-diagram span:first-of-type {
        opacity: 1;
    }

</style>