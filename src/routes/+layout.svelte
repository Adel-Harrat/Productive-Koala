<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	import Header from '@/Header.svelte';
	import Footer from '@/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Productive Koala</title>
	<!-- TODO: Add your site's meta tags here -->
</svelte:head>

<ModeWatcher />

<div class="container flex min-h-dvh flex-col gap-6 py-6">
	<Header />

	<main class="grid flex-1 place-items-center">
		{@render children()}
	</main>

	<Footer />
</div>
