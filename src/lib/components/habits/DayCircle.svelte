<script lang="ts">
	import type { DaysStatus } from '$lib/types';

	import CheckedIcon from '@/icons/check.svelte';
	import MissedIcon from '@/icons/close.svelte';
	import WontDoIcon from '@/icons/minus.svelte';

	let { status }: { status?: DaysStatus } = $props();
</script>

{#if status === 'unchecked'}
	<span
		class="flex aspect-square size-5 items-center justify-center rounded-full bg-muted *:size-4 *:text-black"
	>
	</span>
{:else if status === 'checked'}
	<span
		class="flex aspect-square size-5 items-center justify-center rounded-full bg-green-500 *:size-4 *:text-black"
	>
		<CheckedIcon />
	</span>
{:else if status === 'missed'}
	<span
		class="flex aspect-square size-5 items-center justify-center rounded-full bg-red-500 *:size-4 *:text-black"
	>
		<MissedIcon />
	</span>
{:else if status === 'wont-do'}
	<span
		class="flex aspect-square size-5 items-center justify-center rounded-full bg-muted *:size-4 *:text-black"
	>
		<WontDoIcon />
	</span>
{/if}
