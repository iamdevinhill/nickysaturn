<svelte:head>
	<title>Contact - Nicky Saturn</title>
	<meta name="description" content="Get in touch with Nicky Saturn" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container">
	<h1>Contact</h1>

	<div class="contact-content">
		<div class="contact-info">

			<!-- Get in Touch Section -->
			<div class="get-in-touch">
				<h2>Get in Touch</h2>
				<p>For booking inquiries and other business opportunities:</p>

				<a href="mailto:nickysaturnmusic@gmail.com" class="submit-button">
					Send Email
				</a>
			</div>

			<br><br>

			<!-- Mailing List Section -->
			<div class="mailing-list">
				<h2>Mailing List</h2>
				<p>Sign up for Nicky Saturn's mailing list for updates on new music, shows, and more.</p>

				<div class="contact-form">
					<div class="iframe-wrapper">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSeokl89e_3CQmiqdyBUJb3Y9du7KDKX5Ki4TOrNiKYve7Stxg/viewform?embedded=true"
							class="responsive-iframe"
							allowfullscreen
							loading="lazy"
							title="Mailing List Signup Form"
						>
							Loading…
						</iframe>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<style>
	/* Layout & Typography */
	.container {
		padding: 2rem 1rem;
	}

	h1 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.contact-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.contact-info {
		padding: 2rem;
		background: var(--color-bg-1);
		border-radius: 8px;
		text-align: center;
		margin-bottom: 2rem;
	}

	.get-in-touch,
	.mailing-list {
		margin-bottom: 2rem;
	}

	/* Google Form Iframe Styling */
	.contact-form {
		display: flex;
		justify-content: center;
		background: var(--color-bg-1);
		border-radius: 8px;
		padding: 1rem;
	}

	.iframe-wrapper {
		width: 100%;
		max-width: 640px;
		aspect-ratio: 9 / 10;
		position: relative;
		overflow: hidden;
		border-radius: 8px;
	}

	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 4px;
	}

	/* Button Styles */
	.submit-button {
		display: inline-block;
		padding: 0.75rem 2rem;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.submit-button:hover {
		background-color: #1a7ba1;
		color: white;
	}

	/* Responsive Adjustments */
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.contact-info {
			padding: 1.5rem;

		}

		.contact-form {
			flex-direction: column;
			padding: 0.5rem;
			width: 100%;
		}

		.iframe-wrapper {
			aspect-ratio: 9 / 16;
			max-width: 100%;
		}

		.submit-button {
		
			width: 80%;
			font-size: 1.1rem;
			padding: 1rem;
		}
	}
</style>
