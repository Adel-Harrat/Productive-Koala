<script>
	import * as Dialog from '@/ui/dialog';
	import PlusIcon from '@/icons/plus.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class="group rounded-lg focus:outline-none focus:ring-1 focus:ring-primary">
		<PlusIcon
			classList="text-muted hover:text-foreground apply-transition group-focus:text-foreground"
		/>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add new habit form</Dialog.Title>
		</Dialog.Header>

		<form>
			<input type="text" />

			<button>Add</button>
		</form>
	</Dialog.Content>
</Dialog.Root>
