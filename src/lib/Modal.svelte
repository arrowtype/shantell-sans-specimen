<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	function close() {
        dispatch('close');
        document.body.style.position = "";
        }

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<!-- svelte-ignore a11y-autofocus -->
        <!-- <hr> -->
	<slot name="header"></slot>
	<slot></slot>
	<button on:click={close}>Close</button>
        <!-- <hr> -->
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
        background: var(--modalBg);
        opacity: 0.75;
        display: grid;
        align-content: center;
        justify-content: center;
        pointer-events: all;
        z-index: 101;
	}

	.modal {
        position: absolute;
        padding: 2rem 0;
		left: 50%;
		top: 50%;
        transform: translate(-50%,-50%);
        position: relative;
		width: calc(100vw - 2em);
		max-width: 64rem;
		max-height: calc(100vh - 2em);
		overflow: auto;
		border-radius: 0.5em;
		background: var(--background);
        z-index: 102;
        display: grid;
        justify-content: center;
    }

    button {
        /* position: absolute;
        left: 50%;
        transform: translate(-50%, -2rem); */
        font-size: 1rem;
        margin: 1rem auto;
        background: none;
        color: var(--gray);
        transition: 0.15s;
        border: transparent solid 1px;
        border-radius: 0.25em;
    }
    button:focus {
        cursor: pointer;
        color: var(--gray);
        border: currentColor solid 1px;
        outline: none;
    }
    button:hover {
        cursor: pointer;
        color: var(--text);
        border: currentColor solid 1px;
    }
    /* @media (max-width: 1100px) {
    .modal {
    padding-top: 3rem;
    width: 100vw;
    max-height: 100vh;
    }
    }
    @media (max-width: 600px) {
    button {
    left: 0.75rem;
    }
    } */
</style>
