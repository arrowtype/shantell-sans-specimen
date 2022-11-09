<script>

	import PlayPause from "$lib/PlayPause.svelte";
	import DropdownButton from "$lib/DropdownButton.svelte";
	import Footer from "$lib/Footer.svelte";

</script>

<div id="header-container">
	<header>
		<div>
			<a href="./" class="button">Shantell Sans</a>
			<!-- <PlayPause /> -->
		</div>
		<div>
			<a class="button" href="process"><span class="hide-sm">Design&nbsp;</span>Process</a>
			<!-- <a id="cta" href="https://fonts.google.com/specimen/Shantell+Sans" ><span class="hide-sm">Get it&nbsp;</span>on Google Fonts&nbsp;↗</a> -->
			<DropdownButton/>
			<!-- <a id="cta" href="https://github.com/arrowtype/shantell-sans/releases" >Download <span class="hide-sm">from GitHub</span>&nbsp;↗</a> -->
		</div>
	</header>
</div>
  
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