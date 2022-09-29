<script>

	import PlayPause from "$lib/PlayPause.svelte";
	import Footer from "$lib/Footer.svelte";

    // import { setContext } from 'svelte';


    // setContext('animationState', animationState);

</script>

<div id="header-container">
	<header>
		<a href="/" class="button">Shantell Sans</a>
		<PlayPause />
		<div class="spacer"></div>
		<a class="button" href="process"><span class="hide-sm">Design </span>Process</a>
		<a id="cta" href="https://fonts.google.com/specimen/Shantell+Sans" ><span class="hide-sm">Get it </span>on Google Fonts&nbsp;↗</a>
		<!-- <a id="cta" href="https://github.com/arrowtype/shantell-sans/releases" >Download <span class="hide-sm">from GitHub</span>&nbsp;↗</a> -->
	</header>
</div>
  
<slot></slot>


<Footer />

<style>

	#header-container {
		width: 100vw;
		overflow-x: auto;
		display: block;
		position: fixed;
		padding: 1rem;
	}

    header {
		display: grid;
		grid-template-columns: max-content max-content 1fr max-content max-content; 
		justify-content: start;
		gap: 0.25rem;
		width: 100%;
		/* pointer-events: none; */
		z-index: 999;
	}

	header:last-child {
		margin-right: 1rem;
	}

	@media (max-width: 500px) {
		#header-container {
			padding: 0.5rem;
			padding-right: 1rem;
		}
	}

	#cta {
		justify-self: end;
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