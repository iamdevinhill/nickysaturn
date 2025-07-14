<svelte:head>
	<title>Tour - Nicky Saturn</title>
	<meta name="description" content="Check out upcoming tour dates and get tickets" />
</svelte:head>

<div class="container">
	<h1>Tour Dates</h1>
	
	<div class="tour-dates">
		<div class="tour-date">
			<!-- <div class="date">
				<span class="day">15</span>
				<span class="month">DEC</span>
			</div> -->
			<div class="details">
				<h3>Coming Soon</h3>
			</div>
			<!-- <a href="#" class="ticket-button">Get Tickets</a> -->
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
.tour-dates {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tour-date {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: var(--color-bg-1);
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
}
.date {
	text-align: center;
	min-width: 80px;
	margin-right: 2rem;
}
.day {
	display: block;
	font-size: 2rem;
	font-weight: bold;
}
.month {
	display: block;
	font-size: 1rem;
}
.details {
	flex-grow: 1;
}
.details h3 {
	margin: 0;
}
.details p {
	margin: 0.5rem 0 0;
	opacity: 0.8;
}
.ticket-button {
	padding: 0.5rem 1rem;
	background-color: var(--color-theme-1);
	color: white;
	border-radius: 4px;
	white-space: nowrap;
}
.ticket-button:hover {
	background-color: #1a7ba1;
	color: white;
}
@media (max-width: 600px) {
	.container {
		padding: 1rem;
	}
	.tour-date {
		flex-direction: column;
		text-align: center;
		gap: 1rem;
		padding: 0.75rem 0.5rem;
		margin-bottom: 0.75rem;
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
	}
	.details h3 {
		font-size: 1.5rem;
	}
	.date {
		margin-right: 0;
	}
	.ticket-button {
		width: 100%;
		text-align: center;
	}
}
</style>