<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { number, title, intro = '' }: { number: string; title: string; intro?: string } = $props();
</script>

<div class="reveal rule pt-7 sm:pt-8" use:reveal>
	<!-- Mobile keeps the section number on its own tight line rather than
	     reserving a 7rem column that would eat a third of a phone screen. -->
	<div class="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-8">
		<div class="label text-faint md:pt-1">{number}</div>
		<div>
			<h2 class="text-headline font-semibold">{title}</h2>
			{#if intro}
				<p class="text-muted text-lede mt-3 max-w-prose sm:mt-4">{intro}</p>
			{/if}
		</div>
	</div>
</div>
