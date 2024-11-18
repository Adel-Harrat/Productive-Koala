<script lang="ts">
	import { notesLabels } from '../notes.svelte';
	import AddNote from './AddNote.svelte';
</script>

<aside>
	<ul>
		{#if notesLabels.length === 0}
			<p>No notes labels</p>
		{:else}
			{#each notesLabels as label (label.id)}
				<li>
					<a href="/notes/labels/{label.slug}">{label.name}</a>
				</li>
			{/each}
		{/if}
	</ul>

	<div>
		<AddNote />
	</div>
</aside>
