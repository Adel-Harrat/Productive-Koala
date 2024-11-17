<script lang="ts">
	import { page } from '$app/stores';

	const isActive = (path: string) => {
		return $page.url.pathname == path ? 'text-primary' : '';
	};
</script>

<ul class="flex items-center gap-4">
	<li>
		<a class={isActive('/')} href="/">Home</a>
	</li>
	<li>
		<a class={isActive('/habits')} href="/habits">Habits</a>
	</li>
	<li>
		<a class={isActive('/tasks')} href="tasks">Tasks</a>
	</li>
	<li>
		<a class={isActive('/notes')} href="/notes">Notes</a>
	</li>
</ul>
