<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import NoteForm from './NoteForm.svelte';
	import { buttonVariants } from '@/ui/button';

	let isDialogOpen = $state(false);

	function setIsDialogOpenToFalse() {
		isDialogOpen = false;
	}
</script>

<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Create new note</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header class="space-y-4">
			<Dialog.Title>Create new note</Dialog.Title>
			<Dialog.Description>
				<NoteForm {setIsDialogOpenToFalse} />
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
