<script>
    import { createEventDispatcher } from 'svelte';

	let selected = "normal";

    const dispatch = createEventDispatcher();
	
	function updateItalic(event) {
		selected = event.currentTarget.value;
		dispatch('italicState', {
			italicState: selected
		});
	}

</script>

<div class="italic">
    <input type="radio" id="normal" checked={selected==="normal"} on:change={updateItalic} name="style" value="normal" /> 
    <label for="normal">
        <span>Upright</span>
    </label>
    <input type="radio" id="italic" checked={selected==="italic"} on:change={updateItalic} name="style" value="italic" />
    <label for="italic">
        <span>Italic</span>
    </label>
</div>

<style>
    div {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%; 
        /* border-radius: 0.25rem; */
        border-radius: 2rem;
        border: 1px solid var(--bodyBg);
        overflow: hidden;
    }

    label {
        display: grid;
        justify-content: center;
        align-content: center;
        font-weight: 400;
    }


    .italic label {
        padding: 0.5rem;
        background: var(--altBg2);
        /* width: 2rem; */
        height: 2rem;
        display: grid;
        align-content: center;
        justify-content: center;
        
    }

    .italic input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }

    .italic input[type="radio"] + label:hover {
        color: var(--accent);
        cursor: pointer;
    }

    .italic input[type="radio"]:checked + label {
        color: var(--accent);
        background: var(--bodyBg);
    }
</style>