<script lang="ts">
	import type { Note } from '$lib/types';

	let { note }: { note: Note } = $props();
</script>

<article>
	<h2>{note.title}</h2>
	<p>{note.content}</p>
	<p>Created 7 min ago</p>
</article>
