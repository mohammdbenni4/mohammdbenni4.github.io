<script lang="ts">
	import { about } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="about" class="pt-section">
	<div class="shell">
		<SectionHeader number="01 / About" title="Where software meets hardware" />

		<div class="mt-12 grid gap-12 md:grid-cols-[7rem_1fr] md:gap-8">
			<div class="hidden md:block"></div>
			<div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
				<!-- Portrait -->
				<div use:reveal={{ delay: 60 }}>
					<div class="lg:sticky lg:top-24">
						{#if about.portrait.enabled}
							<img
								src={about.portrait.src}
								alt={about.portrait.alt}
								width="640"
								height="800"
								loading="lazy"
								decoding="async"
								class="border-line rounded-card aspect-[4/5] w-full border object-cover"
							/>
						{:else}
							<!-- Portrait slot. Set about.portrait.enabled = true in site.ts
							     once static/portrait.jpg exists. -->
							<div
								class="border-line bg-brand-50/50 rounded-card flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-dashed"
							>
								<svg
									width="38"
									height="38"
									viewBox="0 0 24 24"
									fill="none"
									class="text-brand-400"
									aria-hidden="true"
								>
									<circle cx="12" cy="8.5" r="3.6" stroke="currentColor" stroke-width="1.4" />
									<path
										d="M4.5 20a7.5 7.5 0 0115 0"
										stroke="currentColor"
										stroke-width="1.4"
										stroke-linecap="round"
									/>
								</svg>
								<p class="text-faint font-mono text-xs">Your photo here</p>
								<p class="text-faint max-w-[15rem] px-5 text-center text-[0.7rem] leading-relaxed">
									Add <span class="font-mono">static/portrait.jpg</span>, then set
									<span class="font-mono">portrait.enabled</span> to true in
									<span class="font-mono">site.ts</span>
								</p>
							</div>
						{/if}

						<dl class="border-line mt-6 border-t">
							{#each about.facts as fact (fact.key)}
								<div class="border-line grid grid-cols-[5.5rem_1fr] gap-3 border-b py-3">
									<dt class="text-faint font-mono text-[0.68rem] uppercase tracking-wider">
										{fact.key}
									</dt>
									<dd class="text-sm leading-snug">{fact.value}</dd>
								</div>
							{/each}
						</dl>
					</div>
				</div>

				<div class="space-y-5" use:reveal={{ delay: 120 }}>
					{#each about.paragraphs as paragraph, i (i)}
						<p class="text-[1.02rem] leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">
							{paragraph}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
