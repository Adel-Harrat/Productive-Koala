<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Button } from '@/ui/button';
	import { PUBLIC_WEBSITE_TITLE } from '$env/static/public';

	let timer = $state(1499);
	let clock = $state('');
	let timerStatus = $state<'running' | 'break'>('break');
	let timerInterval: any;

	function displaytime() {
		let minutes = Math.floor(timer / 60);
		let seconds = timer % 60;
		clock = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	$effect(() => {
		if (timerStatus === 'running') {
			timerInterval = setInterval(() => {
				timer--;
			}, 1000);

			displaytime();

			if (timer === 0) {
				timerStatus = 'break';
				timer = 1499;
			}

			return () => {
				clearInterval(timerInterval);
			};
		}
	});

	$effect(() => {
		if (timerStatus === 'break') {
			clearInterval(timerInterval);
			timer = 1499;
		}
	});

	$effect(() => () => (document.title = PUBLIC_WEBSITE_TITLE));
</script>

<svelte:head>
	{#if timerStatus === 'running'}
		<title>{clock}</title>
	{:else}
		<title>Pomodoro focus</title>
	{/if}
</svelte:head>

<div class="grid place-items-center">
	<section class="mx-auto flex flex-col gap-5">
		<p class="text-center text-sm text-muted-foreground">Task name goes here</p>

		{#if timerStatus === 'running'}
			<p class="text-center font-mono text-8xl font-extralight tracking-tighter">
				{clock}
			</p>
		{/if}

		{#if timerStatus === 'break'}
			<p class="text-center font-mono text-8xl font-extralight tracking-tighter">25:00</p>
		{/if}

		<div class="flex justify-center gap-5">
			{#if timerStatus !== 'running'}
				<Button onclick={() => (timerStatus = 'running')}>Start</Button>
			{/if}

			{#if timerStatus === 'running'}
				<Button onclick={() => (timerStatus = 'break')} variant="secondary">Stop</Button>
			{/if}
			<!-- <Button>Pause</Button> -->
			<!-- <Button>Take a break</Button> -->

			<!-- <button onclick={() => (timer = 10)}>Set to 10s</button> -->
		</div>
	</section>
</div>
