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

    // TODO: make escape key toggle open state
    // TODO: make open menu pause the site
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background scrim" class:toggleOpen="{modal}" on:click={close}></div>

<div class="modal dropdown" role="dialog" aria-modal="true" bind:this={modal}>
    <div class="menu" class:toggleOpen="{modal}">
        <a class="button" href="https://fonts.google.com/specimen/Shantell+Sans" ><span class="hide-sm">Get it&nbsp;</span>on Google Fonts&nbsp;↗</a>
        <a class="button" href="https://github.com/arrowtype/shantell-sans/releases/download/1.006/Shantell_Sans_1.006.zip" ><span class="hide-sm">Download&nbsp;</span>latest release&nbsp;↓</a> 
    </div>
</div>

<style>

    .scrim {
        width:100vw;
        height: 100vh;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.25s;
        pointer-events: none;
    }
    .scrim.toggleOpen {
        opacity: 0.5;
        transition: 0.25s;
        pointer-events: auto;
    }

    .menu {
        position: fixed;
        display: grid;
        justify-content: end;
        grid-gap: 0.25rem;
        padding: 0.25rem 0;
        width: max-content;
        opacity: 0;
        transition: opacity 0.25s;
        pointer-events: none;
    }
    .menu.toggleOpen {
        opacity: 1;
        transition: opacity 0.25s 0.0625s;
    }
    .menu a {
        margin: 0.5rem;
        position: fixed;
        width: auto;
        top: 1rem;
        right: 0.5rem;
        transition: transform 0.325s;
        pointer-events: none;
    }
    .menu.toggleOpen a {
        pointer-events: auto;
        transform: translateY(2rem);
    }
    .menu.toggleOpen a:last-of-type {
        transform: translateY(4.5rem);
    }
</style>