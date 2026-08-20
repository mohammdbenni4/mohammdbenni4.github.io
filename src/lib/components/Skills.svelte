<script lang="ts">
	import { skillGroups as skillsEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		skillGroups = skillsEn,
		header = {
			number: '05 / Skills',
			title: 'What I work with',
			intro:
				'Grouped by the kind of problem rather than the language. Everything listed here I have used on something real.'
		}
	} = $props();
</script>

<section id="skills" class="pt-section">
	<div class="shell">
		<SectionHeader
			number={header.number}
			title={header.title}
			intro={header.intro}
		/>

		<div class="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
			{#each skillGroups as group, i (group.title)}
				<!-- The spinning conic sweep sits behind an inset white surface, so
				     only a hairline of it shows as a green highlight travelling around
				     the edge. Delays are staggered so the cards never sync up. -->
				<article
					class="reveal group rounded-card relative overflow-hidden p-px transition-transform duration-400 hover:-translate-y-1"
					style="--trace-delay: -{(i * 1.15).toFixed(2)}s"
					use:reveal={{ delay: (i % 3) * 70 }}
				>
					<span class="bg-line rounded-card absolute inset-0" aria-hidden="true"></span>
					<span class="trace-ring" aria-hidden="true"></span>

					<div
						class="rounded-card relative h-full overflow-hidden bg-white p-6 transition-shadow duration-400 group-hover:shadow-[0_18px_44px_-26px_rgba(4,69,30,0.34)]"
					>
						<!-- Tint washes up from the base on hover -->
						<span
							class="from-brand-50 pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t to-transparent transition-all duration-500 ease-out group-hover:h-full"
							aria-hidden="true"
						></span>

						<div class="relative">
							<div class="mb-5 flex items-center gap-3">
								<span
									class="bg-brand-50 text-brand-700 group-hover:bg-brand-700 flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] transition-all duration-400 group-hover:text-white"
								>
									<Icon name={group.icon} size={19} />
								</span>
								<h3 class="text-[0.98rem] font-semibold leading-tight tracking-tight">
									{group.title}
								</h3>
								<span class="text-faint ms-auto font-mono text-xs font-semibold">
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>

							<ul class="space-y-2">
								{#each group.items as item (item)}
									<li class="text-muted flex gap-2.5 text-sm leading-snug">
										<span
											class="bg-brand-300 group-hover:bg-brand-700 mt-[0.5rem] h-px w-2 shrink-0 transition-all duration-400 group-hover:w-3.5"
										></span>
										<span>{item}</span>
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
