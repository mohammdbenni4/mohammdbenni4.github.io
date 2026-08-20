<script lang="ts">
	import { graduation as gradEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		graduation = gradEn,
		header = {
			number: '04 / Academic',
			title: 'Graduation project',
			intro:
				'Kept separate from client work on purpose. This is the university project, and it is where the control theory actually gets used.'
		},
		labels = { org: 'University of Aleppo', badge: 'Academic', howBuilt: 'How it is put together' }
	} = $props();

	const icons = ['scan', 'route', 'target', 'chip'];
</script>

<section id="graduation" class="pt-section">
	<div class="shell">
		<SectionHeader
			number={header.number}
			title={header.title}
			intro={header.intro}
		/>

		<article
			class="reveal group border-line hover:border-brand-300 rounded-card relative mt-10 overflow-hidden border bg-white transition-all duration-500 hover:shadow-[0_20px_54px_-28px_rgba(4,69,30,0.32)] sm:mt-14"
			use:reveal
		>
			<span
				class="bg-brand-700 absolute inset-y-0 start-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
				aria-hidden="true"
			></span>

			<div class="p-6 sm:p-9 lg:p-11">
				<div class="mb-5 flex flex-wrap items-center gap-3">
					<span class="label text-faint">{labels.org}</span>
					<span
						class="bg-brand-50 text-brand-700 border-brand-200 ms-auto rounded-full border px-3 py-1 font-mono text-[0.74rem] font-medium uppercase tracking-wider"
					>
						{labels.badge}
					</span>
				</div>

				<h3 class="text-title group-hover:text-brand-700 font-semibold transition-colors duration-300">
					{graduation.title}
				</h3>
				<p class="text-faint mt-2 font-mono text-xs">{graduation.context}</p>

				<div class="mt-6 grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
					<div class="space-y-4">
						{#each graduation.body as paragraph, i (i)}
							<p class="leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">{paragraph}</p>
						{/each}

						<ul class="flex flex-wrap gap-2 pt-2">
							{#each graduation.tags as tag (tag)}
								<li
									class="border-line text-muted hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 rounded-[3px] border px-2.5 py-1 font-mono text-xs transition-all duration-200"
								>
									{tag}
								</li>
							{/each}
						</ul>

						<p class="text-faint pt-1 font-mono text-xs">{graduation.supervisor}</p>
					</div>

					<div class="bg-paper border-line rounded-card border p-5 sm:p-6">
						<div class="label text-brand-700 mb-5">{labels.howBuilt}</div>
						<dl class="space-y-4">
							{#each graduation.highlights as h, i (h.key)}
								<div class="group/h flex gap-4">
									<span
										class="bg-brand-50 text-brand-700 group-hover/h:bg-brand-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] transition-colors duration-400 group-hover/h:text-white"
									>
										<Icon name={icons[i] ?? 'target'} size={17} />
									</span>
									<div class="min-w-0">
										<dt class="text-ink text-sm font-semibold">{h.key}</dt>
										<dd class="text-muted mt-0.5 text-sm leading-relaxed">{h.value}</dd>
									</div>
								</div>
							{/each}
						</dl>
					</div>
				</div>
			</div>
		</article>
	</div>
</section>
