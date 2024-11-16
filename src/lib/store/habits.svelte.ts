import type { Habit, HabitStatus } from '$lib/types';

export let habitsStore = $state({
	value: [] as Habit[],
	addNewHabit(name: string, status: HabitStatus = 'active') {
		if (name.length < 5) {
			return { type: 'error', message: 'Name can not be less than 5 characters.' };
		}

		if (name.length > 50) {
			return { type: 'error', message: 'Name can not be more than 50 characters.' };
		}

		this.value.push({
			id: crypto.randomUUID(),
			name: name.trim(),
			status,
			days: [
				{ date: '11/9/2024', status: 'checked' },
				{ date: '11/10/2024', status: 'checked' },
				{ date: '11/11/2024', status: 'missed' },
				{ date: '11/12/2024', status: 'checked' },
				{ date: '11/13/2024', status: 'wont-do' },
				{ date: '11/14/2024', status: 'checked' }
			]
		});
	}
});
