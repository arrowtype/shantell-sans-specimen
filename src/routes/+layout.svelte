<script>

	import PlayPause from "$lib/PlayPause.svelte";
	// import DropdownMenu from "$lib/DropdownMenu.svelte";
	import { createEventDispatcher, onDestroy } from 'svelte';
	import Footer from "$lib/Footer.svelte";

	import { animationState, canAnimate } from '../stores.js'

    function toggleAnimations() {
		$animationState === "running" ? $animationState = "paused" : $animationState = "running";
	}

	// const dispatch = createEventDispatcher();

	// TODO: make tab skip the hidden buttons only while they are hidden

	/**
	 * @type {HTMLElement}
	 */
	let scrim;

	/**
	 * @type {HTMLElement}
	 */
	let header;

	/**
	 * @type {HTMLButtonElement}
	 */
	let menuButton;

	/**
	 * @type {HTMLUListElement}
	 */
	let menu;

	let menuOpen = false;

	function openMenu() {
        // dispatch('close');

		menu.hidden = false;
		toggleAnimations()

		const scroll = `-${window.scrollY}px`

		// When the modal is shown, we want a fixed body
        document.body.style.position = "fixed";
		document.body.style.top = scroll;

		// make sure the header is fixed as well
		header.style.position = "fixed";
		header.style.top = "0";
		scrim.style.position = "fixed";
		scrim.style.top = "0";

		toggleAnimations()

		menuOpen = true;
	}

	function closeMenu() {
        // dispatch('close');

		menu.hidden = true;
		// toggleAnimations()

		if (menuOpen) {
			// When the menu is closed, we want a scrollable body
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}

		menuOpen = false;
	}

	function toggleMenu() {
		// let expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
		// menuButton.setAttribute('aria-expanded', String(!expanded));
		
		if ($canAnimate === true) {
			toggleAnimations()
		}

		if (menuOpen === true) {
			closeMenu()
			menuButton.setAttribute('aria-expanded', String(false));
		} else {
			openMenu()
			menuButton.setAttribute('aria-expanded', String(true));
		}
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



<div bind:this={scrim} id="menu-scrim" class:menuOpen={menuOpen} on:click={toggleMenu}></div>
<nav bind:this={header} id="header">
	<div>
		<a href="./" class="button" tabindex="0" on:click={closeMenu}>Shantell Sans</a>
		<!-- <PlayPause /> -->
	</div>
	<div>
		<a class="button hide-sm" href="process" tabindex="0" on:click={closeMenu}>Design Process</a>
		<button bind:this={menuButton} class:menuOpen={menuOpen} class="button" aria-expanded="false" aria-controls="menu-list" on:click={toggleMenu}>
			<span id="cta-caret" class="hide-sm">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.96 6.84" >
						<path d="M.61.61c1.14.68,2.74,2.29,2.74,2.88S1.47,5,.61,6.23"/>
				</svg>
				<!-- <svg viewBox="0 0 3.96 6.84"><g data-name="Layer 2"><path fill="none" stroke="#231f20" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.22" d="M.61.61c1.14.68 2.74 2.29 2.74 2.88S1.47 5 .61 6.23" data-name="Layer 1"/></g></svg> -->
			</span>
			<span class="hide-sm">
				Download
			</span>
			<span class="show-sm">
				Menu
			</span>
		</button>
		<ul bind:this={menu} id="menu-list" class:menuOpen={menuOpen} on:click={toggleMenu} hidden>
			<li class="show-sm">
				<a class="button" href="process">
					The Story of Shantell Sans
				</a>
			</li>
			<li>
				<a class="button" target="blank" href="https://fonts.google.com/specimen/Shantell+Sans" >
					Get it on Google Fonts
					<span class="menu-icon">&nbsp;↗</span>
					</a>
			</li>
			<li>
				<a class="button" target="blank" href="https://github.com/arrowtype/shantell-sans" >
					See the project on GitHub
					<span class="menu-icon">&nbsp;↗</span>
					</a>
			</li>
			<li>
				<a class="button" href="https://github.com/arrowtype/shantell-sans/releases/download/1.008/Shantell_Sans_1.008.zip" >
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
		overflow: visible;
	}

	@media (max-width: 600px) {
		nav > div  {
			grid-gap: 0;
		}
	}

	.button {
		animation: slowShinyText 0.5s linear alternate infinite;
        animation-play-state: paused;
	}

	.button:hover {
        animation-play-state: running;
		
	}



    #cta-caret {
        font-size: 0.75em;
        position: relative;
        top: -0.0625em;
        transform: rotate(0deg);
        transition: 0.25s;
		height: 1rem;
		display: grid;
		align-content: center;
		margin-right: 0.5rem;
    }

	#cta-caret svg {
		height: 0.625rem;
	}

	#cta-caret svg path {
		/* stroke: var(--text); */
		stroke: currentColor;
		stroke-width: 1.625px;
		fill: none;
		stroke-linecap: round;
	}
    .menuOpen #cta-caret {
        transform: rotate(90deg);
        transition: 0.25s transform;
		transform-origin: 50% 50%;
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
		top: 2.25rem;
		right: 0.75rem;
		opacity: 0;
		transform: translateY(-3rem) scaleY(0);
		transform-origin: 0%;
		transition: 0.25s;
		display: none;
		pointer-events: none;
		z-index: -1;
	}

	#menu-list.menuOpen {
		pointer-events: all;
		display: grid;
		grid-gap: 0.5rem;
		justify-content: end;
		width: max-content;
		opacity: 1;
		transform: translateY(0rem) scaleY(1);
	}

	#menu-list a {
		display: flex;
		justify-content: space-between;
		/* width: max-content; */
	}

	#menu-scrim {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: #000;
		pointer-events: none;
		opacity: 0;
		transition: 0.25s opacity;
		z-index: 1;
	}
	#menu-scrim.menuOpen{
		display: block;
		opacity: 0.5;
		pointer-events: all;
	}

    
</style>