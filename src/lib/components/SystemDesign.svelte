<script lang="ts">
	import { systemDesign } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="systems" class="pt-section">
	<div class="shell">
		<SectionHeader
			number="03 / Systems"
			title="System & database design"
			intro="Three decisions I had to argue for, including what each one cost. Architecture is only interesting when you say what you gave up."
		/>

		<div class="mt-14 space-y-px">
			{#each systemDesign as item, i (item.title)}
				<article class="border-line border-t py-10 lg:py-12" use:reveal={{ delay: 40 }}>
					<div class="grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8">
						<div class="label text-faint md:pt-2">{String(i + 1).padStart(2, '0')}</div>

						<div>
							<h3 class="text-title font-semibold">{item.title}</h3>
							<p class="text-faint mt-2 font-mono text-xs">{item.scope}</p>

							<div class="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
								<div>
									<div class="label text-brand-700 border-brand-200 mb-3 border-b pb-2">
										Problem
									</div>
									<p class="text-muted text-sm leading-relaxed">{item.problem}</p>
								</div>

								<div>
									<div class="label text-brand-700 border-brand-200 mb-3 border-b pb-2">
										Approach
									</div>
									<ul class="space-y-2.5">
										{#each item.approach as step (step)}
											<li class="text-muted flex gap-2.5 text-sm leading-relaxed">
												<span class="text-brand-300 mt-[0.45rem] h-px w-2.5 shrink-0 bg-current"
												></span>
												<span>{step}</span>
											</li>
										{/each}
									</ul>
								</div>

								<div>
									<div class="label text-brand-700 border-brand-200 mb-3 border-b pb-2">
										Trade-off
									</div>
									<p class="text-muted text-sm leading-relaxed">{item.tradeoff}</p>
								</div>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
