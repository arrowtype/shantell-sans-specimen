<script>
	let lightmode = false;
    const toggleTheme = () => lightmode = lightmode === false;
</script>

<svelte:head>
    {#if lightmode}
        <link rel="stylesheet" href="/lightmode.css">
    {/if}
</svelte:head>

<button on:click={toggleTheme}>
	<!-- <span>Aa</span> -->
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
	<!-- <g fill="none" fill-rule="evenodd"> -->
		<circle cx="8" cy="8" r="6" stroke-width="2"/>
		<path d="M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 L8,14 Z"/>
	<!-- </g> -->
	</svg>

</button>
<style>
	button {
		background-color: var(--text);
		color: var(--bodyBg);
		border: none;
		font-weight: 400;
		width: 2rem;
		height: 2rem;
		border-radius: 999px;
		display: grid;
		align-content: center;
		justify-content: center;
		transition: 0.15s;
		margin:0;
		/* line-height: 1; */
		font-size: 0.875rem;
	}
	button:hover {
		cursor: pointer;
		background-color: var(--text-lvl2);
	}

	svg {
		margin: 0 auto;
	}

	svg circle {
		stroke: var(--bodyBg);
		fill: var(--text);
	}
	svg path {
		fill: var(--bodyBg);
	}
</style>