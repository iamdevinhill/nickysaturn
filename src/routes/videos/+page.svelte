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
					src="https://www.youtube.com/embed/91Eo0h0yBgE?si=84mkCu5FVm7zlhfY"  
					title="Jetta"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Your Experience of Me"</h3>
		</div>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/a82Q486uswo?si=vR9sI77y3feOQKh4" 
					title="Jetta"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Jetta"</h3>
		</div>
		<br>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/f4f7-BW2ByA?si=436XSgH_KhGCZa2S" 
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
					src="https://www.youtube.com/embed/VL-10FD5gvE?si=0QeF75L1N0cGBrIM" 
					title="Divine"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Divine"</h3>
		</div>
		<br>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/F7a8K_MeFF4?si=fx2jL0xwdnHwyfn0" 
					title="Fantastik"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Fantastik"</h3>
		</div>
		<br>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/DFApLB2HHFQ?si=q7mruL2L5XY1aNk7" 
					title="Soak Up The Sun (Cover)"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h3>"Soak Up The Sun (Cover)"</h3>
		</div>
	</div>
</div>

<style>
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
  width: 100%;
}
.videos {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
.video {
  background: var(--color-bg-1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 700px;
  text-align: center;
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
@media (max-width: 768px) {
	.container {
		padding: 1rem;
	}
}
</style>