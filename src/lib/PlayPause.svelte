<script>
    import { animationState } from '../stores.js'

    function toggleAnimations() {
		$animationState === "running" ? $animationState = "paused" : $animationState = "running";
	}

</script>

{#if $animationState}
<button on:click={toggleAnimations}>
  <span>{ $animationState }</span>
</button>
{/if}