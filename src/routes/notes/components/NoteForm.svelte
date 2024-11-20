<script lang="ts">
	import { Label } from '@/ui/label';
	import { Input } from '@/ui/input';
	import { Textarea } from '@/ui/textarea';
	import * as Select from '@/ui/select';
	import { Button } from '@/ui/button';
	import { notes, notesLabels } from '../notes.svelte';

	let { setIsDialogOpenToFalse } = $props();

	let formData = $state({
		title: '',
		content: '',
		labelId: ''
	});

	let error = $state('');

	function handleSubmit(event: Event) {
		// Form validation
		// TODO: Add proper validation
		if (!formData.title || !formData.content || !formData.labelId) {
			error = 'All fields are required';
			return;
		}

		// Form is valid
		notes.push({ id: crypto.randomUUID(), ...formData });
		setIsDialogOpenToFalse();
	}
</script>

<form class="flex flex-col gap-6" onsubmit={handleSubmit}>
	<div class="space-y-2">
		<Label for="title">Title</Label>
		<Input id="title" bind:value={formData.title} />
	</div>

	<div class="space-y-2">
		<Label for="content">Content</Label>
		<Textarea id="content" bind:value={formData.content} />
	</div>

	<Select.Root type="single" bind:value={formData.labelId}>
		<Select.Trigger class="w-1/2">
			{formData.labelId
				? notesLabels.find((label) => label.id === formData.labelId)?.name
				: 'Select a label'}
		</Select.Trigger>
		<Select.Content>
			{#each notesLabels as label (label.id)}
				<Select.Item value={label.id}>
					{label.name}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	{#if error}
		<div class="flex justify-center text-sm font-bold text-red-500">
			{error}
		</div>
	{/if}

	<div class="flex justify-end">
		<Button type="submit" class="flex-1">Submit</Button>
	</div>
</form>
