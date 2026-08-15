<script lang="ts">
	import { skillGroups } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="skills" class="pt-section">
	<div class="shell">
		<SectionHeader
			number="04 / Skills"
			title="What I work with"
			intro="Grouped by the kind of problem rather than the language. Everything listed here I have used on something real."
		/>

		<!-- gap-px over a line-coloured backdrop gives clean 1px seams between
		     cards instead of doubled borders -->
		<div class="border-line bg-line mt-14 grid gap-px border sm:grid-cols-2 lg:grid-cols-3">
			{#each skillGroups as group, i (group.title)}
				<div
					class="group bg-white p-6 transition-colors duration-200 hover:bg-brand-50/60"
					use:reveal={{ delay: (i % 3) * 60 }}
				>
					<div class="mb-5 flex items-baseline gap-3">
						<span class="text-brand-500 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
						<h3 class="text-[0.95rem] font-semibold tracking-tight">{group.title}</h3>
					</div>
					<ul class="space-y-2">
						{#each group.items as item (item)}
							<li class="text-muted flex gap-2.5 text-sm leading-snug">
								<span class="bg-brand-300 mt-[0.5rem] h-px w-2 shrink-0"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
