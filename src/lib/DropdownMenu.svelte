<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	import { animationState } from '../stores.js';

	function toggleAnimations() {
		$animationState === 'running' ? ($animationState = 'paused') : ($animationState = 'running');
	}

	const dispatch = createEventDispatcher();
	function close() {
		dispatch('close');
		toggleAnimations();
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}

	/**
	 * @type {HTMLDivElement}
	 */
	let modal;

	const handle_keydown = (/** @type {{ key: string; shiftKey: any; preventDefault: () => void; }} */ e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

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

	// TODO: fix page scrolling to top on open
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal">
	<div class="modal-background scrim" class:toggleOpen={modal} on:click={close} />

	<div role="dialog" aria-modal="true" bind:this={modal}>
		<div class="menu" class:toggleOpen={modal}>
			<a class="button show-sm" href="process" on:click={close}>The Story of Shantell Sans</a>
			<a class="button" href="https://fonts.google.com/specimen/Shantell+Sans"
				>Get it on Google Fonts&nbsp;↗</a
			>
			<a
				class="button"
				href="https://github.com/arrowtype/shantell-sans/releases/download/1.008/Shantell_Sans_1.008.zip"
				>Download latest release&nbsp;↓</a
			>
		</div>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		z-index: 1000;
	}

	.scrim {
		width: 100vw;
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
	/* .menu.toggleOpen a:first-child {
        transform: translateY(2rem);
    } */
	.menu.toggleOpen a:nth-child(2) {
		transform: translateY(2rem);
	}
	.menu.toggleOpen a:nth-child(3) {
		transform: translateY(4.5rem);
	}

	@media (max-width: 600px) {
		.menu.toggleOpen a:first-child {
			transform: translateY(2rem);
		}
		.menu.toggleOpen a:nth-child(2) {
			transform: translateY(4.5rem);
		}
		.menu.toggleOpen a:nth-child(3) {
			transform: translateY(7rem);
		}
	}
</style>
