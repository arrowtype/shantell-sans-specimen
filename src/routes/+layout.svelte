<script>

    // import { setContext } from 'svelte';

	export let animationState = "running";

	// Toggle Animations


	function toggleAnimations() {
		animationState === "running" ? animationState = "paused" : animationState = "running";
		console.log("animationState", animationState)

        setContext('animationState', animationState);
	}

    // setContext('animationState', animationState);

</script>


<header>
    <h1 style="--animationState: {animationState};"><a href="/">Shantell Sans</a></h1>
    <button class="playPauseToggle {animationState}"  on:click={toggleAnimations}>
        {#if animationState === "running"}
            <span id="pauseIcon">⏸</span>
            <span id="pauseText">Pause</span>
        {:else}
            <span id="playIcon">▶</span>
            <span id="playText" style="--animationState: {animationState};">Play</span>
        {/if}
    </button>
    <div class="spacer"></div>
    <a class="button" href="process">Design Process</a>
    <a id="cta" href="https://fonts.google.com/specimen/Shantell+Sans" style="--animationState: {animationState};"><span class="hide-sm">Get it </span>on Google Fonts&nbsp;↗</a>
    <!-- <a id="cta" href="https://github.com/arrowtype/shantell-sans/releases" style="--animationState: {animationState};">Download <span class="hide-sm">from GitHub</span>&nbsp;↗</a> -->
</header>
  
<slot animationState={animationState} style="--animationState: {animationState};"></slot>

<style>
    header {
		display: grid;
		grid-template-columns: auto auto 1fr auto auto; 
		justify-content: start;
		gap: 0.25rem;
		position: fixed;
		width: 100%;
		padding: 1rem;
		pointer-events: none;
		z-index: 999;
	}

	@media (max-width: 500px) {
		header {
			padding: 0.5rem;
		}
	}

	.playPauseToggle {
		pointer-events: auto;
		cursor: pointer;
		font-size: 1rem;
		display: flex;
		justify-content: start;
		gap: 0.25rem;
		width: 2.4em;
		overflow-x: hidden;
		transition: 0.25s width;
	}
	/* .playPauseToggle:hover {
		width: 6.4em;
	} */
	.playPauseToggle.paused:hover {
		width: 5.5em;
	}
	.playPauseToggle.running:hover {
		width: 6.4em;
	}

	.playPauseToggle #pauseText,
	.playPauseToggle #playText {
		opacity: 0%;
		transition: 0.25s opacity;
		padding-left: 0.25rem;
	}
	.playPauseToggle:hover #pauseText,
	.playPauseToggle:hover #playText {
		opacity: 100%;
		transform: scaleX(100%);
		width: auto;
	}

	@media (max-width: 500px) {
		.playPauseToggle:hover {
			width: 2.4em !important;
		}
		#pauseText, #playText {
			display: none;
		}
	}

	#cta {
		justify-self: end;
	}

	header button, 
	header .button, 
	header h1,
	#cta {
		border: none;
		background: var(--trackBg);
		/* color: var(--background); */
		color: var(--text);
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-weight: 600;
		letter-spacing: 0.03em;
		display: inline;
		margin: 0;
		transition: 0.25s background, 0.25s color;
		border: transparent solid 2px;
		font-variation-settings: "BNCE" 25, "IRGL" 75;
	}
	

	header .button:hover, 
	header button:hover, 
	#cta:hover {
		border: var(--text) solid 2px;
	}


	h1 {
		/* position: absolute; */
		font-size: 1rem;
		font-feature-settings: "case";
		font-weight: 600;
		margin: 0;
		text-transform: uppercase;
		animation: shinyText 1.5s linear infinite;
		animation-play-state: var(--animationState);
	}
	div { 
		width: 100%; 
		height: 100%; 
		overflow: hidden;
		display: grid;
		justify-content: center;
		align-content: center;
	}
	

	header .button,
    #cta {
		font-size: 0.825;
		font-weight: 550;
		/* background: none; */
		border: 2px solid transparent;
		cursor: pointer;
		font-size: 1rem;
		text-transform: uppercase;
    	letter-spacing: 0.05em;
		text-decoration: none;
		pointer-events: auto;
	}

 	a:hover, header button:hover span{
		animation: shinyText 0.75s linear infinite;
		animation-play-state: var(--animationState);
	}
	
	@media (max-width: 500px) {
		header button span, 
		header h1,
		#cta {
			font-size: 0.75rem;
			line-height: 1;
		}
	}


    
</style>