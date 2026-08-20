<script lang="ts">
	import { systemDesign as systemsEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		systemDesign = systemsEn,
		header = {
			number: '03 / Systems',
			title: 'System & database design',
			intro:
				'Decisions I had to argue for, including what each one cost. Architecture is only interesting when you say what you gave up.'
		},
		labels = { problem: 'The problem', approach: 'What I did', tradeoff: 'What it cost' }
	} = $props();
</script>

<section id="systems" class="pt-section">
	<div class="shell">
		<SectionHeader
			number={header.number}
			title={header.title}
			intro={header.intro}
		/>

		<div class="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-7">
			{#each systemDesign as item, i (item.title)}
				<article
					class="reveal group border-line hover:border-brand-300 rounded-card relative flex flex-col overflow-hidden border bg-white transition-all duration-500 hover:shadow-[0_20px_54px_-28px_rgba(4,69,30,0.32)]"
					use:reveal={{ delay: i * 90 }}
				>
					<!-- Top rail wipes across on hover -->
					<span
						class="bg-brand-700 absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
						aria-hidden="true"
					></span>

					<div class="p-5 sm:p-8">
						<div class="mb-5 flex items-start gap-4">
							<span
								class="bg-brand-50 text-brand-700 group-hover:bg-brand-700 flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] transition-colors duration-500 group-hover:text-white"
							>
								<Icon name={i === 0 ? 'server' : 'database'} size={21} />
							</span>
							<div class="min-w-0">
								<h3 class="text-title font-semibold leading-tight">{item.title}</h3>
								<p class="text-faint mt-1.5 font-mono text-xs">{item.scope}</p>
							</div>
						</div>

						<!-- Problem -->
						<div class="bg-paper border-line rounded-[3px] border p-4">
							<div class="text-faint mb-2 flex items-center gap-2">
								<Icon name="target" size={13} />
								<span class="label">{labels.problem}</span>
							</div>
							<p class="text-muted text-sm leading-relaxed">{item.problem}</p>
						</div>

						<!-- Approach -->
						<div class="mt-6">
							<div class="text-brand-700 mb-3 flex items-center gap-2">
								<Icon name="route" size={13} />
								<span class="label">{labels.approach}</span>
							</div>
							<ol class="space-y-3">
								{#each item.approach as step, k (step)}
									<li class="flex gap-3">
										<span
											class="border-brand-200 text-brand-700 group-hover:border-brand-700 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[0.6rem] font-semibold transition-colors duration-500"
										>
											{k + 1}
										</span>
										<span class="text-muted text-sm leading-relaxed">{step}</span>
									</li>
								{/each}
							</ol>
						</div>

						<!-- Trade-off: the part that shows judgement, so it is set apart -->
						<div
							class="border-brand-700 bg-brand-50/60 mt-6 rounded-r-[3px] border-s-2 py-3 ps-4 pe-3"
						>
							<div class="text-brand-700 mb-2 flex items-center gap-2">
								<Icon name="scale" size={13} />
								<span class="label">{labels.tradeoff}</span>
							</div>
							<p class="text-muted text-sm leading-relaxed">{item.tradeoff}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
