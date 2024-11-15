<script>
	import * as Dialog from '@/ui/dialog';
	import PlusIcon from '@/icons/plus.svelte';
	import { habitsStore } from '$lib/store/habits.svelte';
	import Input from '@/ui/input/input.svelte';
	import { Button } from '@/ui/button';

	let name = $state('');
	let dialogOpen = $state(false);
	let error = $state('');

	function handleSubmit() {
		const result = habitsStore.addNewHabit(name);

		if (result?.type === 'error') {
			error = result.message;
			return;
		}

		dialogOpen = false;
		name = '';
		error = '';
	}
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger class="group rounded-lg focus:outline-none ">
		<PlusIcon classList="text-muted hover:text-foreground group-focus:text-foreground" />
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add new habit form</Dialog.Title>
		</Dialog.Header>

		<form
			onsubmit={handleSubmit}
			class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
		>
			<Input type="text" bind:value={name} />
			<Button type="submit">Submit</Button>
		</form>

		{#if error}
			<p>{error}</p>
			<!-- TODO: Add error class, and red border input, add placeholder to input -->
		{/if}
	</Dialog.Content>
</Dialog.Root>
