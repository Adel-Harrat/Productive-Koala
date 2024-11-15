<script>
	import { Button } from '@/ui/button';
	import { PUBLIC_WEBSITE_TITLE } from '$env/static/public';
	import MobileDrawer from './MobileDrawer.svelte';
</script>

<header class="flex items-center justify-between gap-8">
	<a
		href="/"
		class="flex items-center gap-4 text-base font-extrabold tracking-tight hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4 md:text-xl xl:text-2xl"
	>
		<img src="/koala.png" alt="koala happy face" class="size-7 md:size-10 xl:size-14" />
		<span>{PUBLIC_WEBSITE_TITLE}</span>
	</a>

	<div class="md:hidden">
		<MobileDrawer />
	</div>

	<div class="hidden md:block">
		<!-- TODO: Add user avatar and dropdown, or add a login button -->
	</div>
</header>
