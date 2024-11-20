<script lang="ts">
	import NoteCard from './NoteCard.svelte';
	import { notes } from '../notes.svelte';
</script>

{#if notes.length === 0}
	<p>No notes</p>
{:else}
	<section class="grid grid-cols-3 gap-4">
		{#each notes as note}
			<NoteCard {note} />
		{/each}
	</section>
{/if}
