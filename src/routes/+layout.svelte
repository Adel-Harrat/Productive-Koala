<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Productive Koala</title>
	<!-- TODO: Add your site's meta tags here -->
</svelte:head>

<ModeWatcher />
{@render children()}
