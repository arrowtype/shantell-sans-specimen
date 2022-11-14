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

	// function close() {
    //     dispatch('close');
    //     toggleAnimations()
    //     const scrollY = document.body.style.top;
    //     document.body.style.position = '';
    //     document.body.style.top = '';
    //     window.scrollTo(0, parseInt(scrollY || '0') * -1);

	// }

	let menuButton;
	let menuOpen = false;

	function toggleMenu() {
		let expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
		menuButton.setAttribute('aria-expanded', !expanded);
		let menu = menuButton.nextElementSibling;
		menu.hidden = !menu.hidden;
		menuOpen = !menuOpen;
		toggleAnimations()
	};

	const handle_keydown = e => {
		if (e.key === 'Escape' && menuOpen === true) {
			// close();
			toggleMenu();
			return;
		}
	}


</script>


<svelte:window on:keydown={handle_keydown}/>



<div id="menu-scrim" class:menuOpen={menuOpen} on:click={toggleMenu}></div>
<nav id="header">
	<div>
		<a href="./" class="button" tabindex="0">Shantell Sans</a>
		<!-- <PlayPause /> -->
	</div>
	<div>
		<a class="button hide-sm" href="process" tabindex="0">Design Process</a>
		<button bind:this={menuButton} class:menuOpen={menuOpen} class="button" aria-expanded="false" aria-controls="menu-list" on:click={toggleMenu}>
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
		<ul id="menu-list" class:menuOpen={menuOpen} on:click={toggleMenu} hidden>
			<li class="show-sm">
				<a class="button" href="process">
					The Story of Shantell Sans
				</a>
			</li>
			<li>
				<a class="button" href="https://fonts.google.com/specimen/Shantell+Sans" >
					Get it on Google Fonts
					<span class="menu-icon">&nbsp;↗</span>
					</a>
			</li>
			<li>
				<a class="button" href="https://github.com/arrowtype/shantell-sans/releases/download/1.006/Shantell_Sans_1.006.zip" >
					Download latest release
					<span class="menu-icon">&nbsp;↓</span>
				</a> 
			</li>
		</ul>
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
		position: fixed;
		padding: 0.75rem;
		display: grid;
		grid-template-columns: max-content max-content; 
		justify-content: space-between;
		grid-gap: 0rem;
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
		z-index: 100;
		pointer-events: none;
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




    #cta-caret {
        font-size: 0.75em;
        position: relative;
        top: -0.0625em;
        transform: rotate(0deg);
        transition: 0.25s;
    }
    .menuOpen #cta-caret {
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
		position: absolute;
		top: 2rem;
		right: 0.75rem;
	}

	#menu-list.menuOpen {
		display: grid;
		grid-gap: 0.25rem;
		justify-content: end;
		width: max-content;
		
	}

	#menu-list a {
		display: flex;
		justify-content: space-between;
		/* width: max-content; */
	}

	#menu-scrim{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: #000;
		pointer-events: none;
		opacity: 0;
		transition: 0.25s;
		z-index: 1;
	}
	#menu-scrim.menuOpen{
		display: block;
		opacity: 0.5;
		pointer-events: all;
	}

    
</style>