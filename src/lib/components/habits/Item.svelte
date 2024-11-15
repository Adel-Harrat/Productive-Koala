<script lang="ts">
	import type { Habit } from '$lib/types';
	import DayCircle from '@/habits/DayCircle.svelte';
	import PenIcon from '@/icons/pen.svelte';

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

<div class="group flex items-center justify-between gap-4 rounded-lg bg-muted/5 p-4">
	<p class="flex items-center gap-2">
		<span>{habit.name}</span>

		<button class="invisible group-hover:visible">
			<PenIcon classList="size-5 text-muted hover:text-foreground" />
		</button>
	</p>

	<div class="flex flex-row-reverse items-center gap-2">
		{#each getLast7Days() as day}
			<DayCircle status={habit.days?.find((d) => d.date === day)?.status ?? 'unchecked'} />
		{/each}
	</div>
</div>
