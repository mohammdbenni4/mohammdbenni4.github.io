<script lang="ts">
	import type { Project } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';

	let { project, index }: { project: Project; index: number } = $props();

	const num = $derived(String(index + 1).padStart(2, '0'));
</script>

<article
	class="border-line group border-t py-10 first:border-t-0 first:pt-0 lg:py-14"
	use:reveal={{ delay: 40 }}
>
	<div class="grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8">
		<div class="label text-faint md:pt-2">{num}</div>

		<div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
			<div>
				<div class="flex flex-wrap items-center gap-3">
					<h3 class="text-title font-semibold">{project.title}</h3>
					{#if project.status}
						<span
							class="bg-brand-50 text-brand-700 border-brand-200 rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-wider"
						>
							{project.status}
						</span>
					{/if}
				</div>
				<p class="text-faint mt-2 font-mono text-xs">{project.context}</p>

				<div class="mt-5 space-y-4">
					{#each project.body as paragraph, i (i)}
						<p class="text-muted leading-relaxed {i === 0 ? 'text-ink' : ''}">{paragraph}</p>
					{/each}
				</div>

				{#if project.tags?.length}
					<ul class="mt-6 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<li
								class="border-line text-muted rounded-[3px] border bg-white px-2.5 py-1 font-mono text-xs"
							>
								{tag}
							</li>
						{/each}
					</ul>
				{/if}

				{#if project.press?.length}
					<div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
						<span class="label text-faint">Press</span>
						{#each project.press as item (item.label)}
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								class="text-brand-700 link-underline text-sm"
							>
								{item.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			{#if project.specs?.length}
				<div class="border-line rounded-card border bg-white p-5">
					<dl class="space-y-3.5">
						{#each project.specs as spec (spec.key)}
							<div>
								<dt class="text-faint font-mono text-[0.65rem] uppercase tracking-[0.14em]">
									{spec.key}
								</dt>
								<dd class="mt-1 text-sm leading-snug">{spec.value}</dd>
							</div>
						{/each}
					</dl>
				</div>
			{/if}
		</div>
	</div>
</article>
