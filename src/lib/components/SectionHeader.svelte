<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		number,
		title,
		intro = ''
	}: { number: string; title: string; intro?: string } = $props();
</script>

<div class="rule pt-8" use:reveal>
	<div class="grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8">
		<div class="label text-faint pt-1">{number}</div>
		<div>
			<h2 class="text-headline font-semibold">{title}</h2>
			{#if intro}
				<p class="text-muted text-lede mt-4 max-w-prose">{intro}</p>
			{/if}
		</div>
	</div>
</div>
