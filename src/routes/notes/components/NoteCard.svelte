<script lang="ts">
	import type { Note } from '$lib/types';
	import * as Card from '$lib/components/ui/card/index.js';

	let { note }: { note: Note } = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-lg">{note.title}</Card.Title>
	</Card.Header>
	<Card.Content class="pt-2 text-sm text-muted-foreground">
		{note.content}
	</Card.Content>
</Card.Root>
