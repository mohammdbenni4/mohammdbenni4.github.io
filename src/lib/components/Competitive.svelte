<script lang="ts">
	import { competitive, contact } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="competitive" class="pt-section">
	<div class="shell">
		<SectionHeader number="06 / Contests" title="Competitive programming" />

		<div class="mt-14 grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8">
			<div class="hidden md:block"></div>
			<div>
				<div class="grid gap-6 sm:grid-cols-2">
					{#each competitive as item, i (item.title)}
						<div
							class="border-line hover:border-brand-300 rounded-card border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(4,69,30,0.35)]"
							use:reveal={{ delay: i * 70 }}
						>
							<h3 class="text-title font-semibold">{item.title}</h3>
							<p class="text-brand-700 mt-1.5 font-mono text-sm">{item.handle}</p>
							<p class="text-muted mt-5 text-sm leading-relaxed">{item.body}</p>
						</div>
					{/each}
				</div>

				<div class="mt-6 flex flex-wrap gap-3" use:reveal>
					<a
						href={contact.icpc.href}
						target="_blank"
						rel="noopener noreferrer"
						class="border-brand-200 text-brand-700 hover:bg-brand-700 group inline-flex items-center gap-2 rounded-[3px] border px-4 py-2.5 font-mono text-xs transition-all duration-200 hover:text-white"
					>
						ICPC ID: CFILP0WQF2R5
						<svg
							width="11"
							height="11"
							viewBox="0 0 12 12"
							fill="none"
							aria-hidden="true"
							class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						>
							<path
								d="M3 9l6-6M4.5 3H9v4.5"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a
						href={contact.codeforces.href}
						target="_blank"
						rel="noopener noreferrer"
						class="border-line text-muted hover:border-brand-300 hover:text-brand-700 group inline-flex items-center gap-2 rounded-[3px] border px-4 py-2.5 font-mono text-xs transition-all duration-200"
					>
						Codeforces profile
						<svg
							width="11"
							height="11"
							viewBox="0 0 12 12"
							fill="none"
							aria-hidden="true"
							class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						>
							<path
								d="M3 9l6-6M4.5 3H9v4.5"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
