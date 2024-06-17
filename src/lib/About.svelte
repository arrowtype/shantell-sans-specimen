<script>
	/**
	 * @type {string}
	 */
	export let animationState;
</script>

<article class="contents">
	<div class="header">
		<h2 style="--animationState: {animationState};">
			Words Are Made<br class="hide-sm" /> Up of Lines
		</h2>
	</div>
	<div class="text">
		<div>
			<p>
				Shantell Sans, from <a target="_blank" href="https://shantellmartin.art">Shantell Martin</a
				>, is a marker-style font built for creative expression, typographic play, and animation.
			</p>
			<p>It is available as a 5-axis variable font as well as a collection of static fonts.</p>
			<blockquote>
				<p>
					One of my first relationships with words started in elementary school. We did spelling
					tests every week, I never passed them and had to sit in detention. Despite my fear of
					tests, I loved words–I knew they helped me express my feelings and made me feel better.
				</p>
				<p>
					I later discovered I was dyslexic and recently, I thought, ‘What if I take my words and
					make a font that is playful, professional, accessible and open?’ I was inspired by Comic
					Sans because I have always liked how fun and easy it is to read, especially for me as a
					dyslexic.
				</p>
				<p>— Shantell Martin</p>
			</blockquote>
		</div>
		<div class="info">
			<div>
				<p>
					Shantell Sans is free and open-source, licensed under SIL Open Font License 1.1, so you
					can use it in almost any way you can imagine! Read the <a
						href="https://github.com/arrowtype/shantell-sans/blob/main/OFL.txt"
						>Shantell Sans license</a
					> for details. It includes Latin and Cyrillic characters to support a wide array of languages
					throughout the Americas, Europe, Central Asia, and Vietnam.
				</p>
				<p>
					Project conception & creative direction by Shantell Martin, based on her artwork,
					handwriting, and creative philosophy.
				</p>
				<p class="colophon">
					Type design & font development by <a target="_blank" href="https://arrowtype.com"
						>ArrowType</a
					>.
				</p>
				<p class="colophon">
					Cyrillic design by <a target="_blank" href="https://anyadanilova.com">Anya Danilova</a>.
				</p>
				<p class="colophon">Additional support from Google Fonts.</p>
			</div>

			<ul>
				<li>
					<a
						class="cta"
						href="https://github.com/arrowtype/shantell-sans/releases/download/1.011/Shantell_Sans_1.011.zip"
						style="--animationState: {animationState};">Download latest release ↓</a
					>
				</li>
				<li>
					<a
						class="cta cta-secondary"
						target="_blank"
						href="https://github.com/arrowtype/shantell-sans">See the project on GitHub ↗</a
					>
				</li>
				<li>
					<a
						class="cta cta-secondary"
						href="https://fonts.google.com/specimen/Shantell+Sans"
						style="--animationState: {animationState};">Get it on Google Fonts ↗</a
					>
				</li>
			</ul>
		</div>
	</div>
</article>

<style>
	.contents {
		min-height: 80vh;
		display: grid;
		align-content: center;
		justify-content: center;
		padding: 3rem 1rem;
		margin: 0.5rem;
		border-radius: 1.25rem;
		text-align: center;
		background: var(--altBg);
		color: var(--altText);
	}

	/* be sure to match this to the character set grid! */
	@media (max-width: 500px) {
		.contents {
			margin: 0.25rem;
		}
	}

	.header {
		display: grid;
		justify-content: center;
		/* margin: 0 auto; */
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		max-width: 55ch;
		font-size: calc(3rem + 4.5vw);
		line-height: 1.125;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		font-weight: 600;
		font-variation-settings: 'opsz' 96, 'BNCE' 25, 'INFM' 25;
		letter-spacing: 0.05em;
		position: relative;
		/* left: 0.025em; */
		animation: slowShinyText 1.5s alternate infinite ease-in-out;
		animation-play-state: var(--animationState);
	}

	@media (prefers-reduced-motion) {
		h2 {
			animation-play-state: paused !important;
		}
	}

	@media (max-width: 1100px) {
		.header {
			display: block;
			max-width: 55rem;
		}

		h2 {
			font-size: calc(2rem + 3vw);
			text-align: left;
		}
	}

	a {
		/* text-decoration: none; */
		color: currentColor;
		transition: 0.15s;
		/* font-weight: 700; */
	}

	.text a {
		text-decoration: underline;
	}

	a:hover,
	a:focus {
		color: var(--uiAccent);
	}

	.text {
		font-variation-settings: 'opsz' 12;
		/* float: right; */
		margin: 0 auto;
		font-size: 1.25rem;
		font-weight: 350;
		max-width: 75rem;
		line-height: 1.5;
		padding: 2rem 0 2rem;
		letter-spacing: 0.025em;
		text-align: left;
	}

	@media (max-width: 899px) {
		.header {
			max-width: 55rem;
		}
		.text {
			font-size: 1rem;
		}
	}

	@media (min-width: 900px) {
		.text {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 4rem;
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	blockquote {
		border-left: 2px solid var(--gray);
		font-variation-settings: 'ital' 1;
		margin: 0;
		padding-left: 1rem;
	}

	@media (min-width: 1300px) {
		blockquote {
			margin-left: -1rem;
		}
	}

	.colophon {
		/* color: hsl(0,0%,75%); */
		color: var(--offWhite);
		/* font-weight: 300; */
		font-size: 0.75em;
		text-transform: uppercase;
		letter-spacing: 0.075em;
	}

	p {
		margin: 0 0 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 4rem 0rem 0rem;
	}

	ul li {
		margin: 0 0 1rem;
		display: flex;
		justify-content: center;
	}
	ul li:last-of-type {
		margin: 0;
	}

	@media (min-width: 900px) {
		ul {
			margin-top: 2rem;
		}
		ul li {
			/* margin: 0.5rem -0.75rem 2rem; */
			margin: 0.5rem 0 1rem;
			justify-content: start;
		}
	}

	a.cta {
		/* font-weight: 600; */
		background: var(--background);
		color: var(--text);
		text-decoration: none;
		transition: 0.25s;
		animation: slowShinyText 0.5s linear alternate infinite;
		animation-play-state: paused;
	}

	a.cta:not(.cta-secondary):hover {
		border: 2px solid var(--uiAccent);
		animation-play-state: running;
	}

	@media (min-width: 900px) {
		a.cta:not(.cta-secondary) {
			margin-left: -0.75rem;
		}
	}

	a.cta-secondary {
		font-weight: 500;
		background: transparent;
		color: var(--offWhite);
		/* border: 2px solid var(--offWhite); */
		padding: 0;
		border: 2px solid transparent;
		border-bottom: 2px solid var(--offWhite);
		border-radius: 0;
		animation: slowShinyText 0.5s linear alternate infinite;
		animation-play-state: paused;
	}

	a.cta-secondary:hover {
		color: var(--uiAccent);
		border-bottom: 2px solid var(--uiAccent);
		animation-play-state: running;
	}

	@media (prefers-color-scheme: dark) {
		a.cta {
			background: var(--text);
			color: var(--background);
		}
		a.cta-secondary {
			background: transparent;
			color: var(--offWhite);
		}
	}

	/* .hr {
        margin: 2rem 0;
        text-align: center;
        color: var(--gray);
    }
 */
</style>
