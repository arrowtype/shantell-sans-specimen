<script>
	import About from '$lib/About.svelte'
	import TypeTester from '$lib/TypeTester.svelte'
	import Definitions from '$lib/Definitions.svelte'
	import CharSet from '$lib/CharSet.svelte'

	import IntersectionObserver from "svelte-intersection-observer";

	// for intersection observer
	let node;
	let node1;
	let node2;

	import { animationState } from '../stores.js'

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


<main style="--animationState: {$animationState};">


	<IntersectionObserver element={node} let:intersecting>
		<div bind:this={node}>
			<div id="wall" on:click={poetryWallClick} bind:this={wall} style="--animationState: {intersecting && $animationState=="running" ? "running" : "paused"};">
				<span class="hint mouse">Click anywhere</span>
				<span class="hint touch">Tap anywhere</span>
			</div>
		</div>
	</IntersectionObserver>

	<IntersectionObserver element={node1} let:intersecting>
		<div bind:this={node1}>
			<About animationState={intersecting && $animationState=="running" ? "running" : "paused"} />
		</div>
	</IntersectionObserver>
	
	<TypeTester />

	<IntersectionObserver element={node2} let:intersecting>
		<div bind:this={node2}>
			<Definitions animationState={intersecting && $animationState=="running" ? "running" : "paused"} />
		</div>
	</IntersectionObserver>
	<CharSet />
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

	#playPauseToggle {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		pointer-events: auto;
		cursor: pointer;
		font-size: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.25rem;
		/* width: 2.4em;
		height: 2.4em; */
		width: 3em;
		height: 3em;
		overflow-x: hidden;
		transition: 0.25s width;border: none;
		background: var(--trackBg);
		color: var(--text);
		padding: 0.25rem 1.05rem;
		border-radius: 999px;
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.03em;
		margin: 0;
		transition: 0.25s background, 0.25s color, 0.25s width;
		border: transparent solid 2px;
		font-variation-settings: "BNCE" 25, "IRGL" 75;
	}
	#playPauseToggle:hover {
		border: var(--text) solid 2px;
	}
	#playPauseToggle.paused:hover {
		/* width: 5.5em; */
		width: 8em;
	}
	#playPauseToggle.running:hover {
		/* width: 6.4em; */
		width: 8em;
	}

	#playPauseToggle #pauseText,
	#playPauseToggle #playText {
		opacity: 0%;
		transition: 0.25s opacity;
		padding-left: 0.25rem;
	}
	#playPauseToggle:hover #pauseText,
	#playPauseToggle:hover #playText {
		opacity: 100%;
		transform: scaleX(100%);
		width: auto;
	}

	@media (max-width: 500px) {
		#playPauseToggle:hover {
			width: 2.4em !important;
		}
		#pauseText, #playText {
			display: none;
		}
	}




</style>