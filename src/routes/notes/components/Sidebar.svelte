<script lang="ts">
	import { notesLabels } from '../notes.svelte';
	import AddNote from './AddNote.svelte';
	import { Button } from '@/ui/button';
</script>

<aside class="flex flex-col overflow-hidden rounded-md p-5">
	{#if notesLabels.length === 0}
		<p>No notes labels</p>
	{:else}
		<div class="flex flex-col gap-4">
			<h3 class="text-sm uppercase tracking-wider text-muted-foreground dark:text-muted">Labels</h3>
			<ul class="space-y-2">
				{#each notesLabels as label (label.id)}
					<li>
						<a class="hover:text-primary" href="/notes/labels/{label.slug}">{label.name}</a>
					</li>
				{/each}
				<li class="cursor-pointer hover:text-primary">Add new label</li>
			</ul>
		</div>
	{/if}

	<div class="mt-auto">
		<AddNote />
	</div>
</aside>
