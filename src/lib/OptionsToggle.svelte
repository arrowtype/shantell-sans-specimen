<script>

</script>


<!-- OPEN BUTTON -->
<button>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M9.75,1 L9.9507222,3.39482928 C10.331114,3.55616233 10.6874001,3.76324948 11.0126765,4.00918688 L13.1871778,2.98445554 L14.9371778,6.01554446 L12.9627289,7.38643466 C12.9873329,7.587511 13,7.79227622 13,8 C13,8.20772378 12.9873329,8.412489 12.9627289,8.61356534 L14.9371778,9.98445554 L13.1871778,13.0155445 L11.0126765,11.9908131 C10.6874001,12.2367505 10.331114,12.4438377 9.9507222,12.6051707 L9.75,15 L6.25,15 L6.05027684,12.6055943 C5.66950976,12.4442002 5.31288466,12.2369658 4.98732352,11.9908131 L2.81282217,13.0155445 L1.06282217,9.98445554 L3.03727108,8.61356534 C3.01266713,8.412489 3,8.20772378 3,8 C3,7.79227622 3.01266713,7.587511 3.03727108,7.38643466 L1.06282217,6.01554446 L2.81282217,2.98445554 L4.98732352,4.00918688 C5.31288466,3.76303418 5.66950976,3.55579979 6.05027684,3.39440569 L6.25,1 L9.75,1 Z M8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 C9.1045695,10 10,9.1045695 10,8 C10,6.8954305 9.1045695,6 8,6 Z"/>
    </svg>

    <span>Options</span>
</button>


<style>
	button {
		background-color: transparent;
		color: var(--text);
		border: 1px solid var(--trackBg);
		font-weight: 400;
		min-width: 6.25rem;
		height: 2rem;
		border-radius: 999px;
        padding: 0 0.75em 0 0.625rem;
		display: flex;
        
		align-items: center;
		justify-content: space-around;
		transition: 0.15s;
		margin:0;
		font-size: 0.875rem;
	}
    svg path {
        fill: currentColor;
        transform: var(--toggleArrow);
        transform-origin: 50% 50%;
    }
	button:hover {
		cursor: pointer;
		border: 1px solid var(--accent);
        color: var(--accent);
	}
    @media (max-width: 600px) {
        button {
            font-size: 0.75rem;
            /* border: none;
            padding: 0; */
        }
    }
    button span {
        text-decoration: none;
    }
</style>