<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '@/ui/button';
	import { Checkbox } from '@/ui/checkbox';
	import * as DropdownMenu from '@/ui/dropdown-menu';
	import { Input } from '@/ui/input';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import { slide } from 'svelte/transition';

	let newTask = $state('');

	type Task = {
		id: string;
		name: string;
		status: 'checked' | 'unchecked';
	};

	let tasks = $state([]) as Task[];

	if (browser) {
		const savedTasks = localStorage.getItem('tasks');
		tasks = savedTasks ? JSON.parse(savedTasks) : [];
	}

	const addNewTask = () => {
		// TODO: Show error
		if (newTask.length < 5) return;

		tasks.push({
			id: crypto.randomUUID(),
			name: newTask,
			status: 'unchecked'
		});

		newTask = '';
	};

	let sortedTasks = $derived(tasks.slice().sort((a) => (a.status === 'unchecked' ? -1 : 1)));

	let handleCheckedChange = $derived((id: string) => {
		tasks = tasks.map((task) => {
			if (task.id === id) {
				task.status = task.status === 'checked' ? 'unchecked' : 'checked';
			}

			return task;
		});
	});

	const handleDeleteTask = (id: string) => {
		tasks = tasks.filter((task) => task.id !== id);
	};

	let remainingTasksNumber = $derived(tasks.filter((task) => task.status === 'unchecked').length);

	$effect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	});
</script>

<section class="mx-auto flex max-w-xl flex-col gap-8">
	<h1 class="text-center text-3xl font-extrabold tracking-tight">Productivity, Simplified</h1>

	<form class="flex items-center justify-between gap-4" onsubmit={addNewTask}>
		<Input bind:value={newTask} placeholder="Add a task ..." autofocus />

		<Button type="submit">Add</Button>
	</form>

	{#if sortedTasks.length !== 0}
		<ul class="space-y-4">
			{#each sortedTasks as task (task.id)}
				<li
					transition:slide
					class="group flex items-center justify-between gap-4 rounded-lg bg-muted p-5 has-[:checked]:opacity-25"
				>
					<label for={task.id} class="group mr-auto flex cursor-pointer items-center gap-2">
						<Checkbox
							name={task}
							id={task.id}
							checked={task.status === 'checked'}
							onCheckedChange={() => handleCheckedChange(task.id)}
						/>

						<span class="group-has-[:checked]:line-through">{task.name}</span>
					</label>

					<div class="grid place-items-center">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger
								disabled={task.status === 'checked'}
								class="text-muted-foreground hover:text-foreground"
							>
								<Ellipsis />
							</DropdownMenu.Trigger>

							<DropdownMenu.Content side="left">
								<DropdownMenu.Group>
									<DropdownMenu.Item>Focus</DropdownMenu.Item>
									<DropdownMenu.Item onclick={() => handleDeleteTask(task.id)}>
										Delete
									</DropdownMenu.Item>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
				</li>
			{/each}
		</ul>
	{/if}

	{#if remainingTasksNumber !== 0}
		<p class="text-muted-foreground/50 dark:text-muted">{remainingTasksNumber} tasks remaining</p>
	{/if}
</section>
