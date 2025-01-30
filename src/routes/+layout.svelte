<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-content">
			<div class="social-icons">
				<a href="https://open.spotify.com/artist/4qqgNsnTVsVq4o386eRAja?si=woe_BQw8SLqxhhtPymTAOw" target="_blank" rel="noopener">
					<i class="fab fa-spotify"></i>
				</a>
				
				<a href="https://music.apple.com/us/artist/nicky-saturn/1573096259" target="_blank" rel="noopener">
					<i class="fab fa-apple"></i>
				</a>
				<a href="https://www.youtube.com/@nickysaturnmusic" target="_blank" rel="noopener">
					<i class="fab fa-youtube"></i>
				</a>
				<a href="https://www.tiktok.com/@nickysaturnmusic?lang=en" target="_blank" rel="noopener">
					<i class="fab fa-tiktok"></i>
				</a>
				<a href="https://instagram.com/nickysaturn" target="_blank" rel="noopener">
					<i class="fab fa-instagram"></i>
				</a>
			</div>
			<p>&copy; {new Date().getFullYear()} Nicky Saturn. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		padding-top: 5rem;
	}

	footer {
		background-color: var(--color-bg-1);
		padding: 2rem 0;
		margin-top: 2rem;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.social-icons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.social-icons a {
		font-size: 1.5rem;
	}
</style>