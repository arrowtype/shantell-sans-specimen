<script>

	import PlayPause from "$lib/PlayPause.svelte";
	// import DropdownMenu from "$lib/DropdownMenu.svelte";
	import { createEventDispatcher, onDestroy } from 'svelte';
	import Footer from "$lib/Footer.svelte";

	import { animationState } from '../stores.js'

    function toggleAnimations() {
		$animationState === "running" ? $animationState = "paused" : $animationState = "running";
	}

	const dispatch = createEventDispatcher();

	function close() {
        dispatch('close');
        toggleAnimations()
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}

	function openMenu() {
		let expanded = this.getAttribute('aria-expanded') === 'true' || false;
		this.setAttribute('aria-expanded', !expanded);
		let menu = this.nextElementSibling;
		menu.hidden = !menu.hidden;
	};

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	}


</script>


<svelte:window on:keydown={handle_keydown}/>


	<nav id="header">
		<div>
			<a href="./" class="button" tabindex="0">Shantell Sans</a>
			<!-- <PlayPause /> -->
		</div>
		<div>
			<a class="button" href="process" tabindex="0">Design Process</a>
			<button class="button" aria-expanded="false" aria-controls="menu-list" on:click={openMenu}>
				<span id="cta-caret" class="hide-sm">
					▶
				</span>
				<span class="hide-sm">
					&nbsp;Download
				</span>
			</button>
			<ul id="menu-list" hidden>
				<li>
					<a class="button" href="https://fonts.google.com/specimen/Shantell+Sans" >Get it on Google Fonts&nbsp;↗</a>
				</li>
				<li>
					<a class="button" href="https://github.com/arrowtype/shantell-sans/releases/download/1.006/Shantell_Sans_1.006.zip" >Download latest release&nbsp;↓</a> 
				</li>
			</ul>
			<!-- <div class="dropdown">
				<button class="button dropdown-button">
					<span id="cta-caret" class="hide-sm">
						▶
					</span>
					<span class="hide-sm">
						&nbsp;Download
					</span>
				</button>
				<div class="dropdown-content">

					<a class="button" href="https://fonts.google.com/specimen/Shantell+Sans" >Get it on Google Fonts&nbsp;↗</a>
					<a class="button" href="https://github.com/arrowtype/shantell-sans/releases/download/1.006/Shantell_Sans_1.006.zip" >Download latest release&nbsp;↓</a> 
				</div>
			</div> -->
<!-- 
			<button tabindex="0" id="cta" on:click={showDropdownMenuCallback} class:toggleOpen="{showDropdownMenu}">
				<span id="cta-caret" class="hide-sm">
					▶
				</span>
				<span class="hide-sm">
					&nbsp;Download
				</span>
				<span class="show-sm">
					Menu
				</span>
			</button> -->
		</div>
	</nav>
	

<slot></slot>


<Footer />

<style>

	/* #header-container {
		width: 100vw;
		display: block;
		position: fixed;
		padding: 1rem;
		z-index: 999;
		height: auto;
	} */
	
    nav {
		display: grid;
		grid-template-columns: max-content max-content; 
		justify-content: space-between;
		grid-gap: 0rem;
		width: 100%;
		box-sizing: content-box;
		/* pointer-events: none; */
	}


	
	nav > div {
		display: grid;
		grid-template-columns: max-content max-content; 
		gap: 0.5rem;
	}

	@media (max-width: 600px) {
		nav > div  {
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
		align-content: start;
	}
	
	#menu-list {
		list-style: none;
	}

    
</style>