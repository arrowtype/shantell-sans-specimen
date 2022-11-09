<script>
    let dropdownOpen = false;

    // TODO: make escape key toggle open state
    // TODO: make open menu pause the site
</script>

<div class="dropdown" class:toggleOpen="{dropdownOpen}">
    <!-- {#if dropdownOpen} -->
    <div class="scrim" class:toggleOpen="{dropdownOpen}" on:click={() => (dropdownOpen = !dropdownOpen)}></div>
    <div class="menu" class:toggleOpen="{dropdownOpen}">
        <a class="button" href="https://fonts.google.com/specimen/Shantell+Sans" ><span class="hide-sm">Get it&nbsp;</span>on Google Fonts&nbsp;↗</a>
        <a class="button" href="https://github.com/arrowtype/shantell-sans/releases/latest" ><span class="hide-sm">Download&nbsp;</span>latest release&nbsp;↗</a> 
    </div>
    <button id="cta" on:click={() => (dropdownOpen = !dropdownOpen)}>
        <span id="cta-caret" class:toggleOpen="{dropdownOpen}">
            ▶
        </span>
        &nbsp;Download
    </button>
    <!-- {/if} -->
</div>

<style>
    /* .dropdown {
        position: fixed;
        display: grid;
        justify-content: end;
    } */
    #cta {
        opacity: 0.999;
        z-index: 1000;
        transition: 0.25s color;
    }
    .toggleOpen #cta {
        opacity: 0.625;
    }
    .toggleOpen #cta:hover {
        border: transparent 2px solid;
    }
    #cta-caret {
        font-size: 0.75em;
        position: relative;
        top: -0.0625em;
        transform: rotate(0deg);
        transition: 0.25s;
    }
    #cta-caret.toggleOpen {
        transform: rotate(90deg);
        transition: 0.25s;
    }
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