<script lang="ts">
	import { cn } from '$lib/utils';
	let { classList }: { classList?: string } = $props();
</script>

<svg
	class={cn('h-6 w-6', classList)}
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	fill="none"
	viewBox="0 0 24 24"
>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M5 12h14m-7 7V5"
	/>
</svg>
