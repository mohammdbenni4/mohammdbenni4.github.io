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
			<div class="border-line bg-line grid gap-px border sm:grid-cols-2">
				{#each competitive as item, i (item.title)}
					<div class="bg-white p-7" use:reveal={{ delay: i * 70 }}>
						<h3 class="text-title font-semibold">{item.title}</h3>
						<p class="text-brand-700 mt-1.5 font-mono text-sm">{item.handle}</p>
						<p class="text-muted mt-5 text-sm leading-relaxed">{item.body}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-8 grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8">
			<div class="hidden md:block"></div>
			<a
				href={contact.codeforces.href}
				target="_blank"
				rel="noopener noreferrer"
				class="text-brand-700 link-underline inline-flex items-center gap-2 text-sm"
			>
				Codeforces profile
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
