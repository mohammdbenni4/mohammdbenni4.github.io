<script lang="ts">
	import { about as aboutEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		about = aboutEn,
		header = { number: '01 / About', title: 'Where software meets hardware' }
	} = $props();

	/**
	 * Splits `**bold**` runs out of a paragraph. Positional, so the caller must
	 * key the each block by index: the same run (" and ") legitimately repeats.
	 */
	function segments(text: string) {
		return text.split(/\*\*(.+?)\*\*/g).map((value, i) => ({ value, bold: i % 2 === 1 }));
	}
</script>

<section id="about" class="pt-section">
	<div class="shell">
		<SectionHeader number={header.number} title={header.title} />

		<div class="mt-9 grid gap-9 sm:mt-12 md:grid-cols-[7rem_1fr] md:gap-8">
			<div class="hidden md:block"></div>

			<div>
				<!-- Portrait beside the prose. The facts used to sit under the photo,
				     which left a tall gap of dead space beside the shorter column, so
				     they now run full width below both. -->
				<div class="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
					<div class="reveal" use:reveal={{ delay: 60 }}>
						<div class="mx-auto max-w-[19rem] sm:max-w-sm lg:mx-0 lg:max-w-none">
							{#if about.portrait.enabled}
								<!-- WebP first, JPEG fallback. The intrinsic width/height are set
								     so the browser reserves the box before the image arrives and
								     nothing below it shifts, which is what CLS measures. -->
								<picture>
									<source srcset={about.portrait.srcWebp} type="image/webp" />
									<img
										src={about.portrait.src}
										alt={about.portrait.alt}
										width={about.portrait.width}
										height={about.portrait.height}
										loading="lazy"
										decoding="async"
										class="border-line rounded-card aspect-[4/5] w-full border object-cover"
									/>
								</picture>
							{:else}
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
									<p
										class="text-faint max-w-[15rem] px-5 text-center text-[0.74rem] leading-relaxed"
									>
										Add <span class="font-mono">static/portrait.jpg</span>, then set
										<span class="font-mono">portrait.enabled</span> to true in
										<span class="font-mono">site.ts</span>
									</p>
								</div>
							{/if}
						</div>
					</div>

					<div class="reveal space-y-5" use:reveal={{ delay: 120 }}>
						{#each about.paragraphs as paragraph, i (i)}
							<p class="text-[1.05rem] leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">
								{#each segments(paragraph) as seg, si (si)}
									{#if seg.bold}
										<strong class="text-ink font-semibold">{seg.value}</strong>
									{:else}{seg.value}{/if}
								{/each}
							</p>
						{/each}
					</div>
				</div>

				<!-- Facts, full width under the prose. Staggered in, each with a rail
				     that wipes across and an icon chip that inverts on hover. -->
				<div class="mt-12 sm:mt-14">
					<div class="reveal mb-5 flex items-baseline gap-4" use:reveal>
						<span class="label text-faint shrink-0">{header.glance ?? 'At a glance'}</span>
						<span class="bg-line h-px flex-1"></span>
					</div>

					<dl class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{#each about.facts as fact, i (fact.key)}
							<div
								class="reveal group border-line hover:border-brand-300 rounded-card relative overflow-hidden border bg-white p-4 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_14px_34px_-22px_rgba(4,69,30,0.34)]"
								use:reveal={{ delay: 60 + i * 55 }}
							>
								<span
									class="bg-brand-700 absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
									aria-hidden="true"
								></span>
								<span
									class="from-brand-50 pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t to-transparent transition-all duration-500 ease-out group-hover:h-full"
									aria-hidden="true"
								></span>

								<div class="relative flex items-start gap-3.5">
									<span
										class="bg-brand-50 text-brand-700 group-hover:bg-brand-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] transition-all duration-400 group-hover:text-white"
									>
										<Icon name={fact.icon} size={17} />
									</span>
									<div class="min-w-0">
										<dt class="text-faint font-mono text-[0.72rem] uppercase tracking-wider">
											{fact.key}
										</dt>
										<dd class="text-ink mt-1 text-sm font-medium leading-snug">{fact.value}</dd>
									</div>
								</div>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>
