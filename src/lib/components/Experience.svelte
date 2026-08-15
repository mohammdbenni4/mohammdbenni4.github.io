<script lang="ts">
	import { experience } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="experience" class="pt-section">
	<div class="shell">
		<SectionHeader number="05 / Experience" title="Experience & education" />

		<div class="mt-14">
			{#each experience as item (item.role + item.org)}
				<article class="border-line border-t py-9" use:reveal={{ delay: 40 }}>
					<div class="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-8">
						<div class="pt-1">
							<div class="text-faint font-mono text-xs leading-relaxed">{item.period}</div>
							{#if item.current}
								<div class="mt-2 flex items-center gap-1.5">
									<span class="bg-signal h-1.5 w-1.5 rounded-full"></span>
									<span class="text-signal-ink font-mono text-[0.65rem] uppercase tracking-wider">
										Current
									</span>
								</div>
							{/if}
						</div>

						<div>
							<h3 class="text-lg font-semibold tracking-tight">
								{item.role}
								<span class="text-brand-700">· {item.org}</span>
							</h3>
							<p class="text-faint mt-1 font-mono text-xs">{item.place}</p>

							<ul class="mt-4 space-y-2">
								{#each item.points as point (point)}
									<li class="text-muted flex gap-3 text-sm leading-relaxed">
										<span class="bg-brand-300 mt-[0.6rem] h-px w-2.5 shrink-0"></span>
										<span>{point}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
