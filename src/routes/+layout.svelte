<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	const DEBOUNCE_MINUTES = 30;

	onMount(async () => {
		const ip = await getIP();
		const ua = navigator.userAgent;
		const currentPage = get(page).url.pathname;

		const recentVisit = await supabase
			.from('nicky_saturn_visitor_logs')
			.select('timestamp')
			.eq('ip', ip)
			.order('timestamp', { ascending: false })
			.limit(1);

		if (
			recentVisit.data?.[0] &&
			Date.now() - new Date(recentVisit.data[0].timestamp).getTime() < DEBOUNCE_MINUTES * 60_000
		) {
			return; // skip logging
		}

		const geo = await getGeo(ip);

		await supabase.from('nicky_saturn_visitor_logs').insert([
			{
				ip,
				user_agent: ua,
				page: currentPage,
				country: geo.country,
				region: geo.region,
				city: geo.city
			}
		]);
	});

	async function getIP() {
	try {
		const res = await fetch('https://api.ipify.org?format=json');
		const data = await res.json();
		return data.ip;
	} catch {
		return 'unknown';
	}
}

	async function getGeo(ip) {
	try {
		const res = await fetch(`https://ipapi.co/${ip}/json`);
		const data = await res.json();
		return {
			country: data.country_name,
			city: data.city,
			region: data.region
		};
	} catch {
		return {};
	}
}
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
			<p class="site-footer-note">
				&copy; {new Date().getFullYear()} Nicky Saturn. All rights reserved.
				<br>
				<span class="disclaimer">
					This site logs IP addresses for analytics. By continuing to use the site, you consent to this data collection.
					<br>No personal information is stored.
					<a href="/privacy">Learn more.</a>
				</span>
			</p>
			
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

	.site-footer-note {
	font-size: 0.9rem;
	line-height: 1.5;
	opacity: 0.75;
	text-align: center;
	max-width: 700px;
	margin: 0 auto;
}

.site-footer-note .disclaimer {
	font-size: 0.5rem;
	opacity: 0.6;
}

</style>