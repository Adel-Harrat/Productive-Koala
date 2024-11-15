<script>
	import { Button } from '@/ui/button';
	import { PUBLIC_WEBSITE_TITLE } from '$env/static/public';
</script>

<header class="flex items-center justify-between gap-8">
	<a
		href="/"
		class="flex items-center gap-4 text-xl font-extrabold tracking-tight hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4"
	>
		<img src="/koala.png" alt="koala happy face" class="size-10" />
		<span>{PUBLIC_WEBSITE_TITLE}</span>
	</a>
</header>
