<script>

	import PlayPause from "$lib/PlayPause.svelte";
	import DownloadMenu from "$lib/DownloadMenu.svelte";
	import Footer from "$lib/Footer.svelte";

	let showDownloadMenu = false;

    function showDownloadMenuCallback() {
        showDownloadMenu = true
        document.body.style.position = "fixed";
    }


</script>

<div id="header-container">
	<header>
		<div>
			<a href="./" class="button">Shantell Sans</a>
			<!-- <PlayPause /> -->
		</div>
		<div>
			<a class="button" href="process"><span class="hide-sm">Design&nbsp;</span>Process</a>

			<button id="cta" on:click={showDownloadMenuCallback}>
				<span id="cta-caret" class:toggleOpen="{showDownloadMenu}">
					▶
				</span>
				&nbsp;Download
			</button>
		</div>
	</header>
	
</div>

<!-- download menu modal -->
{#if showDownloadMenu}
<div class="modal">
	<DownloadMenu on:close="{() => showDownloadMenu = false}"/>
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
		gap: 0.5rem;
		width: 100%;
		box-sizing: content-box;
		padding-right: 1rem;
		/* pointer-events: none; */
	}
	
	header>div {
		display: grid;
		grid-template-columns: max-content max-content; 
		gap: 0.5rem;
	}

	
	/* header:last-child {
		margin-right: 1rem;
	} */
	
	@media (max-width: 760px) {
		#cta {
			margin-right: 1rem;
		}
		/* #header-container {
			padding: 0.5rem;
			padding-right: 1rem;
		} */
	}

	#cta {
		justify-self: end;
	}

	    #cta {
        opacity: 0.999;
        z-index: 1000;
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