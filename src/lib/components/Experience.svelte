<script lang="ts">
	import { experience as expEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		experience = expEn,
		header = { number: '06 / Experience', title: 'Experience & education' },
		labels = { current: 'Current', education: 'Education' }
	} = $props();
</script>

<section id="experience" class="pt-section">
	<div class="shell">
		<SectionHeader number={header.number} title={header.title} />

		<!-- Timeline. The rail runs behind the markers on every breakpoint; only
		     the horizontal offsets change between mobile and desktop. -->
		<div class="relative mt-10 sm:mt-14">
			<span
				class="bg-gradient-to-b from-brand-200 via-brand-200 to-transparent absolute bottom-2 start-[9px] top-2 w-px md:start-[calc(9rem+9px)]"
				aria-hidden="true"
			></span>

			<div class="space-y-5">
				{#each experience as item, i (item.role + item.org)}
					<article
						class="reveal group relative ps-8 md:ps-0"
						use:reveal={{ delay: Math.min(i, 3) * 60 }}
					>
						<!-- Marker -->
						<span
							class="absolute start-0 top-[1.55rem] z-10 flex h-[19px] w-[19px] items-center justify-center md:start-36"
							aria-hidden="true"
						>
							<span
								class="bg-paper border-brand-300 group-hover:border-brand-700 absolute inset-0 rounded-full border-2 transition-colors duration-400"
							></span>
							{#if item.current}
								<span class="bg-signal absolute h-2 w-2 animate-blink rounded-full"></span>
							{:else}
								<span
									class="bg-brand-300 group-hover:bg-brand-700 absolute h-2 w-2 rounded-full transition-colors duration-400"
								></span>
							{/if}
						</span>

						<div class="md:grid md:grid-cols-[9rem_1fr] md:gap-10">
							<!-- Period rail -->
							<div class="md:pt-6 md:text-right">
								<div class="text-faint font-mono text-xs leading-relaxed">{item.period}</div>
								{#if item.current}
									<span
										class="bg-signal-ink/10 text-signal-ink mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[0.72rem] uppercase tracking-wider"
									>
										<span class="bg-signal h-1.5 w-1.5 rounded-full"></span>
										{labels.current}
									</span>
								{/if}
								{#if item.education}
									<span
										class="bg-brand-50 text-brand-700 mt-2 inline-block rounded-full px-2.5 py-0.5 font-mono text-[0.72rem] uppercase tracking-wider"
									>
										{labels.education}
									</span>
								{/if}
							</div>

							<!-- Card -->
							<div
								class="border-line hover:border-brand-300 rounded-card mt-3 border bg-white p-5 transition-all duration-400 group-hover:shadow-[0_16px_40px_-26px_rgba(4,69,30,0.32)] sm:p-6 md:mt-0"
							>
								<h3 class="text-lg font-semibold leading-tight tracking-tight">
									{item.role}
								</h3>
								<p class="text-brand-700 mt-1 text-sm font-medium">
									{#if item.orgUrl}
										<a
											href={item.orgUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="decoration-brand-300 hover:decoration-brand-700 inline-flex items-center gap-1 underline decoration-1 underline-offset-4 transition-colors"
										>
											{item.org}
											<svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
												<path
													d="M3 9l6-6M4.5 3H9v4.5"
													stroke="currentColor"
													stroke-width="1.6"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</a>
									{:else}
										{item.org}
									{/if}
									<span class="text-faint font-normal">· {item.place}</span>
								</p>

								<ul class="mt-4 space-y-2">
									{#each item.points as point (point)}
										<li class="text-muted flex gap-3 text-sm leading-relaxed">
											<span
												class="bg-brand-300 group-hover:bg-brand-700 mt-[0.6rem] h-px w-2.5 shrink-0 transition-all duration-400 group-hover:w-4"
											></span>
											<span>{point}</span>
										</li>
									{/each}
								</ul>

								{#if item.tags?.length}
									<ul class="mt-4 flex flex-wrap gap-2">
										{#each item.tags as tag (tag)}
											<li
												class="border-line text-muted hover:border-brand-300 hover:text-brand-700 rounded-[3px] border px-2 py-0.5 font-mono text-[0.74rem] transition-colors duration-200"
											>
												{tag}
											</li>
										{/each}
									</ul>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
