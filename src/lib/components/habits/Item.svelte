<script lang="ts">
	import type { Habit } from '$lib/types';
	import DayCircle from '@/habits/DayCircle.svelte';
	import PenIcon from '@/icons/pen.svelte';
	import * as DropdownMenu from '@/ui/dropdown-menu';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';

	let { habit }: { habit: Habit } = $props();

	function getLast7Days() {
		const days = [];
		const today = new Date();

		for (let i = 0; i < 7; i++) {
			const date = new Date();
			date.setDate(today.getDate() - i);
			days.push(date.toLocaleDateString());
		}

		return days;
	}

	// console.log(getLast7Days());
</script>

<div class="group flex items-center justify-between gap-4 rounded-lg bg-muted p-4">
	<p class="line-clamp-1 flex items-center gap-2 truncate">
		<span>{habit.name}</span>

		<button class="invisible group-hover:visible">
			<PenIcon classList="size-5 text-muted hover:text-foreground" />
		</button>
	</p>

	<div class="ml-auto flex flex-row-reverse items-center gap-2">
		{#each getLast7Days() as day}
			<DayCircle status={habit.days?.find((d) => d.date === day)?.status ?? 'unchecked'} />
		{/each}
	</div>

	<div class="grid place-items-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="text-muted-foreground hover:text-foreground">
				<Ellipsis />
			</DropdownMenu.Trigger>

			<DropdownMenu.Content side="left">
				<DropdownMenu.Group>
					<DropdownMenu.Item>Update</DropdownMenu.Item>
					<DropdownMenu.Item>Archive</DropdownMenu.Item>
					<DropdownMenu.Item>Delete</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
