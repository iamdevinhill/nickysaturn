<svelte:head>
	<title>Videos - Nicky Saturn</title>
	<meta name="description" content="Watch the latest music videos from Nicky Saturn" />
</svelte:head>

<div class="container">
	<h1>Videos</h1>
	
	<div class="videos">
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/p_6Bd88TYg4"
					title="Time Is Now"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Time Is Now"</h3>
		</div>
		<br>

		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/UYvG9zddJPY"
					title="Meant To Be"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Meant To Be"</h3>
		</div>
		<br>

		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/dUnwU-h4-AE"
					title="Divine"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Divine"</h3>
		</div>
		
	</div>
</div>

<style>
	.videos {
		display: inline;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}

	.video {
		background: var(--color-bg-1);
		padding: 1rem;
		border-radius: 8px;
	}

	.video-container {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}

	h3 {
		margin: 0;
		text-align: center;
		font-size: 1.5rem;
	}
</style>