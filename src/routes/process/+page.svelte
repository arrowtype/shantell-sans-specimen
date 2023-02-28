<script>
	import ProcessArticle from './ProcessArticle.md';
	import { animationState } from '../../stores.js';

	export const prerender = true;
</script>

<svelte:head>
	<title>Shantell Sans → Arrow Type</title>
	<meta name="description" content="A font for artist Shantell Martin" />
</svelte:head>

<main>
	<article style="--animationState: {$animationState};">
		<svg class="fullwidth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2097.08 660.63"
			><g id="Layer_2" data-name="Layer 2"
				><path
					d="M10.53,540.18l347.56-116c47.1-15.73,95-31.6,144.66-33.26,78.88-2.63,153.9,30.62,226.86,60.71a3425.82,3425.82,0,0,0,488,159.66"
				/><path
					d="M839.41,494.72,1228.09,374.9c38.12-11.75,77-23.62,116.91-22.8,45.81.94,89.43,18.52,131.85,35.84l338.42,138.17"
				/><path
					d="M1503.61,398.48l234.26-114.26c20.7-10.09,42.09-20.38,65.07-21.72,26.77-1.56,52.52,9.13,77.41,19.09a1871.93,1871.93,0,0,0,202.26,67.86"
				/><path d="M814.26,510.58l-15.9,7.34" /><path d="M764.11,538.1,747.6,548.5" /><path
					d="M725,566.23,709.07,576"
				/><path d="M679.71,597.42,663.2,606" /><path d="M629.56,623.11,610,637.18" /><path
					d="M452.82,434.14l-22.63,25.07"
				/><path d="M496.24,440.86l-11,25.08" /><path d="M553.73,447v25.07" /><path
					d="M596.54,435.36l20.79,24.46"
				/><path d="M1262.77,401.7l-20,24.58" /><path d="M1328.1,407.52l-9,25.23" /><path
					d="M1375.32,410.11l3.88,22.64"
				/><path d="M1421.89,406.87l14.88,14.88" /><path d="M1773.11,308.56l-9.7,18.76" /><path
					d="M1811.27,312.44l-2.58,20.7"
				/><path d="M1855.26,309.21l14.87,23.93" /><path
					d="M154.06,384.58c-7.45-7.22-15-14.58-20.11-23.61s-7.5-20.14-4-29.9c5.09-14.08,22.69-21.71,36.86-16.87s23.34,20.56,21.79,35.45-12.92,28-27.09,32.8-30.46,1.85-42.81-6.61-20.84-22-24.52-36.48"
				/><path d="M217,393.33c-22.77,6.08-47.82,3.13-64.59-7.13l-.72,101.68" /><path
					d="M150.66,433.94a86.16,86.16,0,0,0-53.1-7.88"
				/><path d="M65.69,240.57A30.74,30.74,0,0,0,41,261.24" /><path
					d="M80.92,250.13a51.22,51.22,0,0,0-14.92,22"
				/><path d="M554,237.64c23.48-3.95,48.82,7.66,61.16,28a78.5,78.5,0,0,1,53.15-27" /><path
					d="M743.3,91.15a59.45,59.45,0,0,1,46,25.8c9.56-15.67,29.85-23.92,47.63-19.38"
				/><path
					d="M933.12,234.55A69.68,69.68,0,0,1,982,246.86c6.48-20,27.11-34.36,48.08-33.56"
				/><path
					d="M1320,48.41l14.31,18.5c1.32,1.7,2.73,3.48,4.72,4.27,3.39,1.35,7.13-.54,10.3-2.34a485.75,485.75,0,0,1,86.59-38.43"
				/><path
					d="M1358.74,28.42,1408.05,36a4.48,4.48,0,0,1,3.13,1.37c.9,1.22.36,2.92-.21,4.33q-9.29,23-18.59,46"
				/><path d="M1556.54,634.87l36.06-16.39" /><path d="M1625.38,601.26,1654.89,589" /><path
					d="M1683.58,572.58l28.69-11.48"
				/><path d="M1741,543.07l22.13-12.29" /><path d="M1818.82,498l20.49-10.65" /><path
					d="M1874.55,461.11l24.59-13.93"
				/><path d="M1943.4,416l25.41-13.11" /><path d="M2001.59,382.42,2027,363.57" /></g
			></svg
		>

		<ProcessArticle />
	</article>
</main>

<style>
	:root {
		--text-column: 800px;
	}

	/* NOTE: article typography styles must be done in static/global.css */

	main {
		display: block;
		margin: 0;
		width: 100%;
		min-height: 100vh;
		padding: 0 1rem;
	}

	@media (min-width: 850px) {
		.fullwidth {
			width: 95vw;
			margin-left: calc(-0.5 * (95vw - 800px));
		}
	}

	article {
		margin-left: auto;
		margin-right: auto;
		padding-top: 4rem;
		padding-bottom: 12rem;
		max-width: var(--text-column);
	}

	svg path {
		fill: none;
		stroke: var(--text);
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 13px;
	}

	/* article img {
        width: 100%;
        max-width: var(--text-column);
    } */

	a {
		color: currentColor;
	}
</style>
