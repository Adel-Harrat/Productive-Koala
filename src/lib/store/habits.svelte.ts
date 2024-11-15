import type { Habit } from '$lib/types';

export let habitsStore = $state({
	value: [] as Habit[],
	addNewHabit() {
		this.value.push({
			id: 'new',
			name: 'unchecked habit',
			status: 'active',
			days: [
				// { date: '11/9/2024', status: 'checked' },
				// { date: '11/10/2024', status: 'checked' },
				// { date: '11/11/2024', status: 'missed' },
				// { date: '11/12/2024', status: 'checked' },
				// { date: '11/13/2024', status: 'wont-do' },
				// { date: '11/14/2024', status: 'checked' }
			]
		});
	}
});
