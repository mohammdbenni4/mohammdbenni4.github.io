<script lang="ts">
	import { contact, meta } from '$lib/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="border-line border-t">
	<div class="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
		<p class="text-faint font-mono text-xs">
			{meta.name} · {contact.location}
		</p>
		<p class="text-faint font-mono text-xs">
			Built by hand with SvelteKit · {year}
		</p>
	</div>
</footer>
