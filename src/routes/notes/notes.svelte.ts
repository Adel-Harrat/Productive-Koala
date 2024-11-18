import type { Note, NoteLabel } from '$lib/types';

export const notes = $state<Note[]>([
	{
		id: '1',
		title: 'Hello Svelte',
		content: 'Welcome to svelte 5 runes store.'
	}
]);

export const notesLabels = $state<NoteLabel[]>([
	{ id: 'One', name: 'Coding', slug: 'coding' },
	{ id: 'Two', name: 'Pharmacy', slug: 'pharmacy' }
]);
