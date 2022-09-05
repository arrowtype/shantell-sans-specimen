<script>
	import About from '$lib/About.svelte'
	import TypeTester from '$lib/TypeTester.svelte'
	import Definitions from '$lib/Definitions.svelte'
	import CharSet from '$lib/CharSet.svelte'
	import Footer from '$lib/Footer.svelte'
	import Process from '$lib/Process.svelte'

	let m = { x: 0, y: 0 };

	let wall;
	let count = 0;

	const phrases = [
		"May you always find love.",
		"May you be full of grace.",
		"May you have a heart full of kindness.",
		"May you be strong.",
		"May you hear laughter.",
		"May you see beauty.",
		"May you experience forgiveness.",
		"May you seek new landscapes.",
		"May you create many homes.",
		"May you comfort in times of need.",
		"May you experience freedom.",
		"May you know the taste of your true love’s kiss.",
		"May you know Truth.",
		"May you touch sadness and be wiser for it.",
		"May you cry out of happiness and share joy.",
		"May you find clarity through guidance.",
		"May you be a friend and always have many.",
		"May you know the direction of your heart’s North Star.",
		"May you have passion.",
		"May you be inspired.",
		"May you know the night.",
		"May you know the day.",
		"May you touch rain and taste water.",
		"May you break bread.",
		"May you sleep soundly.",
		"May you always dream.",
	]

	let phrase = []

	function clearWall() {
		let children = Array.from(wall.children);
		children.forEach((item) => (wall.removeChild(item)))
	}

	function getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	function poetryWallClick(event) {

		let rect = event.target.getBoundingClientRect()

		m.x = event.clientX  - rect.left;
		m.y = event.clientY  - rect.top;

		if (phrase.length === 0) {
			const random = Math.floor(Math.random() * phrases.length);
			phrase = phrases[random].split(" ")
		}

		if (count === 0) {
			// console.log("clearing")
			clearWall()
		}

		const child = document.createElement('span');
		child.textContent = phrase[count];
		child.className = "phrase"
		child.style.position = "absolute";
		child.style.left = m.x + "px";
		child.style.top = m.y + "px";

		let angle = getRandomNumber(-20, 20)
		let transform =  `translate(-50%,-50%) rotate(${angle}deg)`

		child.style.transform = transform;
		wall.appendChild(child);

		if (count == phrase.length - 1) {
			count = 0;
			phrase = [];
		} else {
			count += 1;
		}
	}

	let showModal = false;
	// let showModal = true; // for testing

	function showModalCallback() {
		showModal = true
		document.body.style.position = "fixed";
	}

	// play/pause all animations

	// Toggle Animations

	export let animationState = "running";

	function toggleAnimations() {
		animationState === "running" ? animationState = "paused" : animationState = "running";
		console.log("animationState", animationState)
	}

</script>

<svelte:head>
	<title>Shantell Sans → Arrow Type</title>
	<meta name="description" content="A font for artist Shantell Martin" />
</svelte:head>

<main>
	<header>
			<h1 style="--animationState: {animationState};">Shantell Sans</h1>
			<button class="playPauseToggle {animationState}"  on:click={toggleAnimations}>
				{#if animationState === "running"}
					<span id="pauseIcon">⏸</span>
					<span id="pauseText">Pause</span>
				{:else}
					<span id="playIcon">▶</span>
					<span id="playText" style="--animationState: {animationState};">Play</span>
				{/if}
			</button>
            <a href="process">Design Process</a>
			<a id="cta" href="https://fonts.google.com/specimen/Shantell+Sans" style="--animationState: {animationState};"><span class="hide-sm">Get it </span>on Google Fonts&nbsp;↗</a>
			<!-- <a id="cta" href="https://github.com/arrowtype/shantell-sans/releases" style="--animationState: {animationState};">Download <span class="hide-sm">from GitHub</span>&nbsp;↗</a> -->
	</header>
	<div id="wall" on:click={poetryWallClick} bind:this={wall}  style="--animationState: {animationState};">
		<span class="hint mouse" style="--animationState: {animationState};">Click anywhere</span>
		<span class="hint touch" style="--animationState: {animationState};">Tap anywhere</span>
	</div>

	<About animationState={animationState} />
	<Process />
	<TypeTester />
	<Definitions animationState={animationState} />
	<CharSet {animationState} />

	<Footer />
</main>

<style>
	main {
		width: 100%;
		height: 90%;
	}

	#wall {
		cursor: crosshair;
	}
	/* hide "click here" hint by default, for touch screens */
	.mouse {
		display: none;
	}

	/* show "click here" if user has hover support" */
	@media (pointer:fine) {
		.mouse {
			display: block;
		}
		.touch  {
			display: none;
		}
	}


	header {
		display: grid;
		grid-template-columns: auto auto 1fr auto; 
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

	.hint {
		text-transform: uppercase;
		font-size: 2rem;
		font-feature-settings: "case";
		letter-spacing: 0.2em;
		text-align: center;
		animation: wobble .875s ease-in-out alternate infinite;
		animation-play-state: var(--animationState);
		pointer-events: none;
	}

	@media (prefers-reduced-motion) {
        h1, .hint, a:hover, header button:hover span {
            animation-play-state: paused;
        }
		button.playPauseToggle {
			opacity: 0;
		}
    }


	@keyframes wobble {
		0% {
			font-variation-settings: "BNCE" -100, "IRGL" 25;
		}
		100% {
			font-variation-settings: "BNCE" 100, "IRGL" 25;
		}
	}

	@keyframes shinyText {
		0% {
			font-variation-settings: "BNCE" 0, "IRGL" 75;
		}
		25% {
			font-variation-settings: "BNCE" -75, "IRGL" 75;
		}
		50% {
			font-variation-settings: "BNCE" 0, "IRGL" 75;
		}
		75% {
			font-variation-settings: "BNCE" 75, "IRGL" 75;
		}
		100% {
			font-variation-settings: "BNCE" 0, "IRGL" 75;
		}
	}
</style>