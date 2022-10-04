<script>
    export let animationState;
</script>

<article class="contents">
    <div class="header">
        <h2 style="--animationState: {animationState};">A typeface for<br>creative expression</h2>
    </div>
    <div class="text">
        <div>
            <p>Shantell Sans is a marker-style font built for creative expression, typographic play, and animation.</p>
            <p>It is available as a 5-axis variable font as well as a collection of static fonts.</p>
            <p>It includes Latin and Cyrillic characters to support a wide array of languages throughout the Americas, Europe, Central Asia, and Vietnam.</p>
            <p>It is free and open-source, licensed under SIL Open Font License 1.1, so you can use it in almost any way you can imagine! Read the <a href="https://github.com/arrowtype/shantell-sans/blob/main/OFL.txt">Shantell Sans license</a> for details.</p>
        </div>
        <div class="colophon">
            <p>Created with <a target="_blank" href="https://shantellmartin.art">Shantell Martin</a>, based on her artwork and felt-tip marker handwriting.</p>
            <p>Design & development by <a target="_blank" href="https://arrowtype.com">Arrow&nbsp;Type</a>.</p>
            <p>Cyrillic by <a target="_blank" href="https://anyadanilova.com">Anya Danilova</a>.</p>
            <p>Commissioned for open-source release by Shantell Martin and Google Fonts.</p>
            
            <!-- <p class="hr">---------------</p>s -->
            <ul>
                <li><a class="cta" href="https://fonts.google.com/specimen/Shantell+Sans" style="--animationState: {animationState};">Get it on Google Fonts ↗</a></li>
                <li><a class="cta cta-secondary"  target="_blank" href="https://github.com/arrowtype/shantell-sans">See the project on GitHub ↗</a></li>
            </ul>
        </div>
    </div>
</article>

<style>
    .contents {
        min-height: 80vh;
        display: grid;
        align-content: center;
        justify-content: center;
        padding: 3rem 1rem;
        margin: 0.5rem;
        border-radius: 1.25rem;
        text-align: center;
        background: var(--altBg);
        color: var(--altText);
    }

    /* be sure to match this to the character set grid! */
    @media (max-width: 500px) {
        .contents {
             margin: 0.25rem;
        }
    }

    .header {
        display: grid;
        justify-content: center;
        /* margin: 0 auto; */
    }
    h2 {
        text-align: center;
        text-transform: uppercase;
        max-width: 55ch;
        font-size: calc(3rem + 3vw);
        line-height: 1.125;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        font-weight: 600;
        font-variation-settings: "opsz" 96, "BNCE" 25, "IRGL" 25;
        letter-spacing: 0.05em;
        position: relative;
        /* left: 0.025em; */
        animation: slowShinyText 1.5s alternate infinite ease-in-out;
        animation-play-state: var(--animationState);
    }

    @media (prefers-reduced-motion) {
        h2 {
            animation-play-state: paused !important;
        }
    }

    @media (max-width: 1100px) {
        .header {
            display: block;
            max-width: 55rem;
        }

        h2 {
            font-size: calc(2rem + 3vw);
            text-align: left;
        }
    }



    a {
        /* text-decoration: none; */
        color: currentColor;
        transition: 0.15s;
        /* font-weight: 700; */
    }

    .text a {
        text-decoration: underline;
    }

    a:hover, a:focus {
        color: var(--uiAccent);
    }

    .text {
        font-variation-settings: "opsz" 12;
        /* float: right; */
        margin: 0 auto;
        font-size: 1.25rem;
        font-weight: 350;
        max-width: 55rem;
        line-height: 1.5;
        padding: 2rem 0 2rem;
        letter-spacing: 0;
        text-align: left;
    } 

    @media (max-width: 899px) {
        .header {
            max-width: 55rem;
        }
        .text {
            font-size: 1rem;
        }
    }

    @media (min-width: 900px) {
        .text {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 4rem;
        }
    }

    .colophon {
        /* color: hsl(0,0%,75%); */
        color: var(--offWhite);
    }

    p {
        margin: 0 0 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 4rem 0rem 0rem;
    }

    ul li {
        margin: 0 0 2rem;
        display: flex;
        justify-content: center;
    }
    ul li:last-of-type {
        margin: 0;
    }

    @media (min-width: 900px) {

        ul {
            margin-top: 2rem;
        }
        ul li {
            /* margin: 0.5rem -0.75rem 2rem; */
            margin: 0.5rem 0 2rem;
            justify-content: start;
        }
    }

    a.cta {
        font-weight: 500;
        background: var(--background);
        color: var(--text);
        text-decoration: none;
    }

    a.cta-secondary {
        background: transparent;
        color: var(--offWhite);
        border: 2px solid var(--offWhite);
    }

    @media (prefers-color-scheme: dark) {
        a.cta {
            background: var(--text);
            color: var(--background);
        }
        a.cta-secondary {
            background: transparent;
            color: var(--offWhite);
            border: 2px solid var(--offWhite);
        }
    }




    /* .hr {
        margin: 2rem 0;
        text-align: center;
        color: var(--gray);
    }
 */

</style>