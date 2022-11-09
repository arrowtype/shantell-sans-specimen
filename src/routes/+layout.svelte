<script>

	import PlayPause from "$lib/PlayPause.svelte";
	import DropdownMenu from "$lib/DropdownMenu.svelte";
	import Footer from "$lib/Footer.svelte";

	import { animationState } from '../stores.js'

    function toggleAnimations() {
		$animationState === "running" ? $animationState = "paused" : $animationState = "running";
	}


	let showDropdownMenu = false;

    function showDropdownMenuCallback() {
        showDropdownMenu = true
        document.body.style.position = "fixed";
		toggleAnimations()
    }


</script>

<div id="header-container">
	<header>
		<div>
			<a href="./" class="button">Shantell Sans</a>
			<!-- <PlayPause /> -->
		</div>
		<div>
			<span class="hide-sm">
				<a class="button" href="process">Design Process</a>
			</span>

			<button id="cta" on:click={showDropdownMenuCallback} class:toggleOpen="{showDropdownMenu}">
				<span id="cta-caret" class="hide-sm">
					▶
				</span>
				<span class="hide-sm">
					&nbsp;Download
				</span>
				<span class="show-sm">
					Menu
				</span>
			</button>
		</div>
	</header>
	
</div>

<!-- download menu modal -->
{#if showDropdownMenu}
<div class="modal">
	<DropdownMenu on:close="{() => showDropdownMenu = false}"/>
</div>
{/if}
  
<slot></slot>


<Footer />

<style>

	#header-container {
		width: 100vw;
		overflow-x: scroll;
		display: block;
		position: fixed;
		padding: 1rem;
		z-index: 999;
		height: 4.5rem;

		/* hide scroll bars */
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-height: none; /* for Firefox */
	}
	
	#header-container::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

    header {
		display: grid;
		grid-template-columns: max-content max-content; 
		justify-content: space-between;
		grid-gap: 0rem;
		width: 100%;
		box-sizing: content-box;
		/* pointer-events: none; */
	}


	
	header > div {
		display: grid;
		grid-template-columns: max-content max-content; 
		gap: 0.5rem;
	}

	@media (max-width: 600px) {
		header > div  {
			grid-gap: 0;
		}
	}

	#cta {
		justify-self: end;
        opacity: 0.999;
        z-index: 1001;
        transition: 0.25s color;
    }
    .toggleOpen #cta {
        opacity: 0.625;
    }
    .toggleOpen #cta:hover {
        border: transparent 2px solid;
    }
    #cta-caret {
        font-size: 0.75em;
        position: relative;
        top: -0.0625em;
        transform: rotate(0deg);
        transition: 0.25s;
    }
    .toggleOpen #cta-caret {
        transform: rotate(90deg);
        transition: 0.25s;
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
	



    
</style>