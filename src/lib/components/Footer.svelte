<script>
	import { PUBLIC_WEBSITE_TITLE } from '$env/static/public';
</script>

<footer
	class="flex flex-col items-center gap-4 *:text-sm *:font-light *:text-muted md:flex-row md:items-center md:justify-between"
>
	<p>&copy; {new Date().getFullYear()} {PUBLIC_WEBSITE_TITLE}</p>

	<p>
		Created by
		<a target="_blank" class="hover:text-primary" href="https://github.com/Adel-Harrat/">Adel</a>
	</p>
</footer>
