<script>
	import { PUBLIC_WEBSITE_TITLE } from '$env/static/public';
	import MobileDrawer from './MobileDrawer.svelte';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '@/ui/button';
	import Links from './Links.svelte';
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

	<div class="hidden items-center gap-8 md:flex">
		<Links />

		<Button onclick={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</header>
