<script>
    import { animationState } from '../stores.js'

    function toggleAnimations() {
		$animationState === "running" ? $animationState = "paused" : $animationState = "running";
	}

</script>

{#if $animationState}
<button on:click={toggleAnimations}>
  {#if $animationState === "running"}
					<span id="pauseIcon">⏸</span>
					<span id="pauseText">Pause</span>
				{:else}
					<span id="playIcon">▶</span>
					<span id="playText" style="--animationState: {$animationState};">Play</span>
				{/if}
</button>
{/if}

<style>
    #pauseIcon, #playIcon {
        font-size: 1.4em;
        line-height: 1rem;
        position: relative;
        top: .125em;
    }
</style>