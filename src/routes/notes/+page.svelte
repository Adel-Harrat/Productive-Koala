<script>
	import NoteList from './components/NoteList.svelte';
	import Sidebar from './components/Sidebar.svelte';
</script>

<div class="grid grid-cols-4 gap-8">
	<Sidebar />

	<main class="col-span-3">
		<NoteList />
	</main>
</div>
