<script lang="ts">
	import NoteCard from './NoteCard.svelte';
	import { notes } from '../notes.svelte';
</script>

<section>
	{#if notes.length === 0}
		<p>No notes</p>
	{:else}
		{#each notes as note}
			<NoteCard {note} />
		{/each}
	{/if}
</section>
