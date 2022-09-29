<script>
    import ProcessArticle from '$lib/ProcessArticle.md'
    import { animationState } from '../../stores.js'
</script>

<svelte:head>
	<title>Shantell Sans → Arrow Type</title>
	<meta name="description" content="A font for artist Shantell Martin" />
</svelte:head>

<main>
    <article style="--animationState: {$animationState};">

        <ProcessArticle />

    </article>
</main>

<style>

    /* NOTE: article typography styles must be done in static/global.css */

    main {
        display:block;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        padding: 0 1rem;
    }

    article {
        margin-left: auto;
        margin-right: auto;
        padding-top: 4rem;
        padding-bottom: 12rem;
        max-width: 800px;
    }

    a   {
        color: currentColor;
    }


</style>
