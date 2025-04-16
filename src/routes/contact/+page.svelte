<svelte:head>
	<title>Contact - Nicky Saturn</title>
	<meta name="description" content="Get in touch with Nicky Saturn" />
</svelte:head>

<div class="container">
	<h1>Contact</h1>
  
	<div class="contact-content">
	  <div class="contact-info">
		<div class="get-in-touch">
		  <h2>Get in Touch</h2>
		  <p>For booking inquiries and other business opportunities:</p>
  
		  <a href="mailto:nickysaturnmusic@gmail.com" class="submit-button">
			Send Email
		  </a>
		</div>
<br><br>
		<div class="mailing-list">
		  <h2>Mailing List</h2>
		  <p>Sign up for Nicky Saturn's mailing list for updates on new music, shows, and more.</p>
  
		  <div class="contact-form">
			<div style="position: relative; width: 100%; max-width: 640px;">
			  <iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSeokl89e_3CQmiqdyBUJb3Y9du7KDKX5Ki4TOrNiKYve7Stxg/viewform?embedded=true"
				width="100%"
				height="686"
				style="border: none;"
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
	.contact-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	.contact-info {
		padding: 2rem;
		background: var(--color-bg-1);
		border-radius: 8px;
		text-align: center;
		margin-bottom: 2rem;
	}

	.contact-form {
		display: flex;
		justify-content: center;

		margin: 2rem 0;
		background: var(--color-bg-1);
		border-radius: 8px;
		padding: 1rem;
	}

	.contact-form iframe {
		max-width: 100%;
		border-radius: 4px;
	}


	.submit-button {
		display: inline-block;
		padding: 0.75rem 2rem;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		font-family: var(--font-body);
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.submit-button:hover {
		background-color: #1a7ba1;
		color: white;
	}

	@media (max-width: 768px) {
		.contact-info {
			padding: 1.5rem;
		}

		.submit-button {
			text-align: center;
		}
		
		.contact-form iframe {
			height: 720px; /* Slightly taller on mobile for better form visibility */
		}
	}
</style>