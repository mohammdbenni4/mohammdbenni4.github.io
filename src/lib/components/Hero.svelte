<script lang="ts">
	import { hero as heroEn, contact, meta, whatsappHref } from '$lib/data/site';
	import LidarBackdrop from './LidarBackdrop.svelte';
	import WhatsappIcon from './WhatsappIcon.svelte';
	import { reveal } from '$lib/actions/reveal';

	/**
	 * Data is injected so the Arabic page renders the same component rather than
	 * a lookalike. Defaults keep every existing call site unchanged.
	 */
	let {
		hero = heroEn,
		name = meta.name,
		location = contact.location,
		labels = {
			whatsapp: 'Chat on WhatsApp',
			email: 'Email me',
			work: 'See the work',
			cv: 'Download CV'
		},
		workHref = '#work'
	} = $props();
</script>

<section id="top" class="relative overflow-hidden pt-28 sm:pt-32 lg:pt-44">
	<div class="shell">
		<!-- Positioning context for the backdrop. It sits after the copy in the
		     DOM so it flows below on mobile, and is pulled beside it from md up. -->
		<div class="relative">
			<div class="relative z-10 max-w-3xl">
				<!-- The name is the largest thing on the page. Role sits under it. -->
				<h1 class="reveal text-display font-semibold" use:reveal={{ delay: 60 }}>
					{name}
				</h1>

				<p class="reveal text-role text-brand-700 mt-3 font-semibold sm:mt-4" use:reveal={{ delay: 120 }}>
					{hero.role}
				</p>

				<div class="reveal mt-6 max-w-prose sm:mt-7" use:reveal={{ delay: 170 }}>
					<div class="bg-brand-700 h-px w-16"></div>
					<p class="text-muted mt-4 font-mono text-sm sm:mt-5">{location}</p>
					<p class="text-lede mt-3">{hero.lede}</p>
				</div>

				<!-- Mobile: the two primaries take a full row each, then the two
				     secondaries share one. From sm up they all sit inline. -->
				<div class="reveal mt-9 flex flex-wrap items-center gap-3 sm:mt-10" use:reveal={{ delay: 220 }}>
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[3px] bg-[#1d8449] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#16723f] hover:shadow-md sm:w-auto sm:hover:-translate-y-0.5"
					>
						<WhatsappIcon size={17} />
						{labels.whatsapp}
					</a>
					<a
						href="mailto:{contact.email}"
						class="bg-brand-700 hover:bg-brand-800 inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[3px] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md sm:w-auto sm:hover:-translate-y-0.5"
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<rect
								x="1.5"
								y="3"
								width="13"
								height="10"
								rx="1.5"
								stroke="currentColor"
								stroke-width="1.4"
							/>
							<path
								d="M2 4.5l6 4 6-4"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						{labels.email}
					</a>
					<a
						href={workHref}
						class="border-line hover:border-brand-700 hover:text-brand-700 inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-[3px] border bg-white px-5 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-6 sm:hover:-translate-y-0.5"
					>
						{labels.work}
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
						class="text-muted hover:text-brand-700 inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 px-3 text-sm transition-colors duration-200 sm:flex-none sm:px-2"
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
						{labels.cv}
					</a>
				</div>
			</div>

			<LidarBackdrop />
		</div>
	</div>
</section>
