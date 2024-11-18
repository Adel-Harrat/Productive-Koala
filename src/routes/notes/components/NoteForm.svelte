<script lang="ts">
	import { Label } from '@/ui/label';
	import { Input } from '@/ui/input';
	import { Textarea } from '@/ui/textarea';
	import * as Select from '@/ui/select';
	import { Button } from '@/ui/button';
	import { notesLabels } from '../notes.svelte';
	import type { NoteLabel } from '$lib/types';

	let selectedLabel = $state<NoteLabel | undefined>(undefined);

	// Create a new label
	let showLabelCreationForm = $state(false);
	let newLabelName = $state('');

	function createLabel() {
		// TODO: Add a validation
		if (newLabelName.length < 5 || newLabelName.length > 15) return;

		notesLabels.push({
			id: crypto.randomUUID(),
			name: newLabelName,
			slug: newLabelName.toLowerCase().replace(/ /g, '-')
		});
		showLabelCreationForm = false;
		newLabelName = '';
	}
</script>

{#if !showLabelCreationForm}
	<form class="flex flex-col gap-6">
		<div class="space-y-2">
			<Label for="title">Title</Label>
			<Input id="title" />
		</div>

		<div class="space-y-2">
			<Label for="content">Content</Label>
			<Textarea id="content" />
		</div>

		<div class="flex items-center justify-between gap-4">
			<!-- Label selection -->
			<Select.Root type="single" bind:value={selectedLabel}>
				<Select.Trigger>
					{selectedLabel ? selectedLabel.name : 'Select a label'}
				</Select.Trigger>
				<Select.Content>
					{#each notesLabels as label (label.id)}
						<Select.Item value={label.id}>
							{label.name}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<!-- Label creation -->
			<Button variant="link" onclick={() => (showLabelCreationForm = true)}>Create a label?</Button>
		</div>

		<div class="flex justify-end">
			<Button class="flex-1">Submit</Button>
		</div>
	</form>
{:else}
	<form class="flex items-center justify-between gap-4">
		<Input bind:value={newLabelName} placeholder="Label name" />
		<Button type="submit" onclick={createLabel}>Add and Close</Button>
	</form>
{/if}
