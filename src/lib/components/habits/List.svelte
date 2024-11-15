<script lang="ts">
	import { habitsStore } from '$lib/store/habits.svelte';
	import Item from '@/habits/Item.svelte';
</script>

<ul class="space-y-3">
	{#each habitsStore.value as habit}
		<li>
			<Item {habit} />
		</li>
	{/each}
</ul>
