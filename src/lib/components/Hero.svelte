<script lang="ts">
	import { hero, contact, stats, meta, whatsappHref } from '$lib/data/site';
	import LidarScan from './LidarScan.svelte';
	import WhatsappIcon from './WhatsappIcon.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="top" class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
	<!-- Soft field behind the scope -->
	<div
		class="pointer-events-none absolute right-0 top-10 -z-10 hidden h-[38rem] w-[38rem] rounded-full opacity-[0.55] blur-3xl lg:block"
		style="background: radial-gradient(circle, #e5ebe7 0%, transparent 68%)"
		aria-hidden="true"
	></div>

	<div class="shell">
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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

				<h1 use:reveal={{ delay: 60 }}>
					<span
						class="text-brand-700 mb-5 block font-mono text-base font-medium uppercase tracking-[0.18em] sm:text-lg"
					>
						{meta.name}
					</span>
					<span class="text-display block font-semibold">
						{#each hero.headline as line, i (line)}
							<span class="block {i === hero.headline.length - 1 ? 'text-brand-700' : ''}"
								>{line}</span
							>
						{/each}
					</span>
				</h1>

				<div class="mt-8 max-w-prose" use:reveal={{ delay: 140 }}>
					<div class="bg-brand-700 h-px w-16"></div>
					<p class="text-ink mt-5 font-mono text-sm">
						{hero.subrole}
					</p>
					<p class="text-muted font-mono text-sm">{contact.location}</p>
					<p class="text-lede mt-4">{hero.lede}</p>
				</div>

				<div class="mt-10 flex flex-wrap items-center gap-3" use:reveal={{ delay: 200 }}>
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-[3px] bg-[#1d8449] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16723f] hover:shadow-md"
					>
						<WhatsappIcon size={17} />
						Chat on WhatsApp
					</a>
					<a
						href="#work"
						class="border-line hover:border-brand-700 hover:text-brand-700 inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-[3px] border bg-white px-6 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
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
						href={contact.cv}
						download
						class="text-muted hover:text-brand-700 inline-flex min-h-[46px] cursor-pointer items-center gap-2 px-2 text-sm transition-colors duration-200"
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

			<!-- LIDAR scope -->
			<div class="relative" use:reveal={{ delay: 260 }}>
				<div class="border-line rounded-card border bg-white p-5 shadow-sm sm:p-7">
					<div class="mb-4 flex items-center justify-between">
						<span class="label text-faint">RPLidar C1 scan</span>
						<span class="flex items-center gap-1.5">
							<span class="bg-signal h-1.5 w-1.5 animate-blink rounded-full"></span>
							<span class="label text-signal-ink">Live</span>
						</span>
					</div>
					<LidarScan />
					<div class="border-line text-faint mt-4 flex justify-between border-t pt-3 font-mono text-[0.65rem]">
						<span>360° · 10 Hz</span>
						<span>ROS 2 Jazzy</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Stat band -->
		<div
			class="border-line bg-line mt-20 grid grid-cols-2 gap-px border lg:grid-cols-4"
			use:reveal
		>
			{#each stats as stat (stat.label)}
				<div class="bg-paper hover:bg-white px-5 py-7 transition-colors duration-300 sm:px-6">
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
