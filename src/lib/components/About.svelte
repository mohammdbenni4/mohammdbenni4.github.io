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
			<div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
				<div class="space-y-5" use:reveal={{ delay: 60 }}>
					{#each about.paragraphs as paragraph, i (i)}
						<p class="text-[1.02rem] leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">
							{paragraph}
						</p>
					{/each}
				</div>

				<div use:reveal={{ delay: 140 }}>
					<div class="label text-faint mb-4">Quick facts</div>
					<dl class="border-line border-t">
						{#each about.facts as fact (fact.key)}
							<div class="border-line grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3.5">
								<dt class="text-faint font-mono text-xs uppercase tracking-wider">{fact.key}</dt>
								<dd class="text-sm leading-snug">{fact.value}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>
