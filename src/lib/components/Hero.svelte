<script lang="ts">
	import { hero, contact, stats } from '$lib/data/site';
	import StepResponse from './StepResponse.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="top" class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
	<div class="shell">
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
			<!-- Left: the statement -->
			<div>
				<div class="mb-8 flex items-center gap-2.5" use:reveal>
					<span class="relative flex h-2 w-2">
						<span
							class="bg-signal absolute inline-flex h-full w-full animate-blink rounded-full opacity-75"
						></span>
						<span class="bg-signal relative inline-flex h-2 w-2 rounded-full"></span>
					</span>
					<span class="label text-muted">{hero.status}</span>
				</div>

				<h1 class="text-display font-semibold" use:reveal={{ delay: 60 }}>
					{#each hero.headline as line, i (line)}
						<span class="block {i === hero.headline.length - 1 ? 'text-brand-700' : ''}">{line}</span
						>
					{/each}
				</h1>

				<div class="mt-8 max-w-prose" use:reveal={{ delay: 140 }}>
					<div class="bg-brand-700 h-px w-16"></div>
					<p class="text-muted mt-5 font-mono text-sm">
						{hero.subrole} · {contact.location}
					</p>
					<p class="text-lede mt-4">{hero.lede}</p>
				</div>

				<div class="mt-10 flex flex-wrap items-center gap-3" use:reveal={{ delay: 200 }}>
					<a
						href="#work"
						class="bg-brand-700 hover:bg-brand-800 group inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[3px] px-6 text-sm font-medium text-white transition-colors duration-200"
					>
						See the work
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
							<path
								d="M7 2v10M3 8l4 4 4-4"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a
						href="mailto:{contact.email}"
						class="border-line hover:border-brand-700 hover:text-brand-700 inline-flex min-h-[44px] cursor-pointer items-center rounded-[3px] border bg-white px-6 text-sm font-medium transition-colors duration-200"
					>
						Email me
					</a>
					<a
						href={contact.cv}
						download
						class="text-muted hover:text-brand-700 inline-flex min-h-[44px] cursor-pointer items-center gap-2 px-2 text-sm transition-colors duration-200"
					>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
							<path
								d="M7 1v8m0 0L4 6m3 3l3-3M2 11v1a1 1 0 001 1h8a1 1 0 001-1v-1"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Download CV
					</a>
				</div>
			</div>

			<!-- Right: the control graphic -->
			<div class="relative" use:reveal={{ delay: 260 }}>
				<div class="border-line rounded-card border bg-white p-5 sm:p-7">
					<div class="mb-5 flex items-center justify-between">
						<span class="label text-faint">Step response</span>
						<span class="label text-faint">t → 2026</span>
					</div>
					<StepResponse />
				</div>
			</div>
		</div>

		<!-- Stat band -->
		<div
			class="border-line bg-line mt-20 grid grid-cols-2 gap-px border lg:grid-cols-4"
			use:reveal
		>
			{#each stats as stat (stat.label)}
				<div class="bg-paper px-5 py-7 sm:px-6">
					<div class="text-brand-700 text-2xl font-semibold tracking-tight sm:text-3xl">
						{stat.value}
					</div>
					<div class="mt-1.5 text-sm font-medium">{stat.label}</div>
					<div class="text-faint mt-0.5 text-xs">{stat.note}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
