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
        <span id="pauseText" class="hide-sm">&nbsp;Pause</span>
    {:else}
        <span id="playIcon">▶</span>
        <span id="playText" class="hide-sm">&nbsp;Play</span>
    {/if}
</button>
{/if}

<style>
    #pauseIcon, #playIcon {
        font-size: 1.4em;
        line-height: 1rem;
        position: relative;
        font-weight: 800;
    }
    /* #pauseText, #playText {
        animation: wobbleBounce .625s ease-in-out alternate 12;
	    animation-play-state: var(--animationState);
    } */
</style>