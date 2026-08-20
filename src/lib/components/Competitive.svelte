<script lang="ts">
	import { competitive as compEn, contact } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		competitive = compEn,
		header = {
			number: '07 / Contests',
			title: 'Competitive programming',
			intro:
				'I have been coaching competitive programming since 2022 and I work on the technical team behind ACPC, our ICPC affiliated contest. Teaching is the fastest way I have found to notice what I actually understand.'
		},
		labels = { icpc: 'ICPC ID: CFILP0WQF2R5', codeforces: 'Codeforces profile' }
	} = $props();
</script>

<section id="competitive" class="pt-section">
	<div class="shell">
		<SectionHeader
			number={header.number}
			title={header.title}
			intro={header.intro}
		/>

		<div class="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2">
			{#each competitive as item, i (item.title)}
				<article
					class="reveal group border-line hover:border-brand-300 rounded-card relative overflow-hidden border bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_44px_-26px_rgba(4,69,30,0.34)] sm:p-7"
					use:reveal={{ delay: i * 80 }}
				>
					<span
						class="bg-brand-700 absolute inset-y-0 start-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
						aria-hidden="true"
					></span>

					<div class="mb-4 flex items-center gap-3">
						<span
							class="bg-brand-50 text-brand-700 group-hover:bg-brand-700 flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] transition-all duration-400 group-hover:text-white"
						>
							<Icon name={i === 0 ? 'target' : 'route'} size={19} />
						</span>
						<div class="min-w-0">
							<h3 class="text-title font-semibold leading-tight">{item.title}</h3>
							<p class="text-brand-700 mt-0.5 truncate font-mono text-xs">{item.handle}</p>
						</div>
					</div>

					<p class="text-muted text-sm leading-relaxed">{item.body}</p>
				</article>
			{/each}
		</div>

		<div class="reveal mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap" use:reveal>
			<a
				href={contact.icpc.href}
				target="_blank"
				rel="noopener noreferrer"
				class="border-brand-200 text-brand-700 hover:bg-brand-700 group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[3px] border px-5 font-mono text-xs transition-all duration-300 hover:text-white sm:justify-start"
			>
				{labels.icpc}
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
				class="border-line text-muted hover:border-brand-300 hover:text-brand-700 group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[3px] border px-5 font-mono text-xs transition-all duration-300 sm:justify-start"
			>
				{labels.codeforces}
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
</section>
