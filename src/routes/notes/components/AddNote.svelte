<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import NoteForm from './NoteForm.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger>Create new note</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header class="space-y-4">
			<Dialog.Title>Create new note</Dialog.Title>
			<Dialog.Description>
				<NoteForm />
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
