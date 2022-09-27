<script>
	import About from '$lib/About.svelte'
	import TypeTester from '$lib/TypeTester.svelte'
	import Definitions from '$lib/Definitions.svelte'
	import CharSet from '$lib/CharSet.svelte'
	import Footer from '$lib/Footer.svelte'

	// import { getContext } from 'svelte';

	// let animationState = getContext('animationState');

	// import animationState from 'layout.svelte';

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

</script>

<svelte:head>
	<title>Shantell Sans → Arrow Type</title>
	<meta name="description" content="A font for artist Shantell Martin" />
</svelte:head>

<main let:animationState={animationState} style="--animationState: {animationState};">

	<div id="wall" on:click={poetryWallClick} bind:this={wall}  style="--animationState: {animationState};">
		<span class="hint mouse" style="--animationState: {animationState};">Click anywhere</span>
		<span class="hint touch" style="--animationState: {animationState};">Tap anywhere</span>
	</div>

	<About animationState={animationState} />
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
        min-height: 80vh;
		overflow: hidden;
		display: grid;
		justify-content: center;
		align-content: center;
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





</style>