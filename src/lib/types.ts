export type HabitStatus = 'active' | 'archived';
export type DaysStatus = 'unchecked' | 'checked' | 'missed' | 'wont-do';

export type Habit = {
	id: string;
	name: string;
	status: HabitStatus;
	days?: {
		date: string;
		status: DaysStatus;
	}[];
};

export type Note = {
	id: string;
	title: string;
	content: string;
};

export type NoteLabel = {
	id: string;
	name: string;
	slug: string;
};
