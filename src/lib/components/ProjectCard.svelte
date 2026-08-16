<script lang="ts">
	import type { Project } from '$lib/data/site';
	import Gallery from './Gallery.svelte';
	import { reveal } from '$lib/actions/reveal';

	let { project, index }: { project: Project; index: number } = $props();

	const num = $derived(String(index + 1).padStart(2, '0'));
</script>

<article
	class="group border-line hover:border-brand-300 relative overflow-hidden rounded-card border bg-white transition-all duration-500 hover:shadow-[0_18px_50px_-24px_rgba(4,69,30,0.30)]"
	use:reveal={{ delay: 40 }}
>
	<!-- Accent rail that fills on hover -->
	<span
		class="bg-brand-700 absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
		aria-hidden="true"
	></span>

	<div class="p-6 sm:p-9 lg:p-11">
		<div class="mb-6 flex flex-wrap items-center gap-3">
			<span class="text-brand-500 font-mono text-xs font-semibold">{num}</span>
			{#if project.accent}
				<span class="label text-faint">{project.accent}</span>
			{/if}
			{#if project.status}
				<span
					class="bg-brand-50 text-brand-700 border-brand-200 ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider"
				>
					<span class="bg-signal h-1.5 w-1.5 animate-blink rounded-full"></span>
					{project.status}
				</span>
			{/if}
		</div>

		<h3
			class="text-title group-hover:text-brand-700 font-semibold transition-colors duration-300"
		>
			{project.title}
		</h3>
		<p class="text-faint mt-2 font-mono text-xs">{project.context}</p>

		<div class="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
			<div>
				<div class="space-y-4">
					{#each project.body as paragraph, i (i)}
						<p class="leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">{paragraph}</p>
					{/each}
				</div>

				{#if project.roles?.length}
					<div class="mt-8">
						<div class="label text-brand-700 border-brand-200 mb-4 border-b pb-2">
							Roles I have held
						</div>
						<ul class="space-y-3.5">
							{#each project.roles as r (r.role)}
								<li class="group/role flex gap-4">
									<span
										class="bg-brand-100 text-brand-700 group-hover/role:bg-brand-700 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover/role:text-white"
									>
										<svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
											<path
												d="M2.5 6.2l2.3 2.3L9.5 3.8"
												stroke="currentColor"
												stroke-width="1.8"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
									<span>
										<span class="text-ink block text-sm font-semibold">{r.role}</span>
										<span class="text-muted block text-sm leading-relaxed">{r.detail}</span>
									</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if project.tags?.length}
					<ul class="mt-8 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<li
								class="border-line text-muted hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 rounded-[3px] border px-2.5 py-1 font-mono text-xs transition-all duration-200"
							>
								{tag}
							</li>
						{/each}
					</ul>
				{/if}

				{#if project.links?.length}
					<div class="mt-7 flex flex-wrap gap-3">
						{#each project.links as link (link.href)}
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="border-brand-200 text-brand-700 hover:bg-brand-700 group/link inline-flex items-center gap-2 rounded-[3px] border px-4 py-2 font-mono text-xs transition-all duration-200 hover:text-white"
							>
								{link.label}
								<svg
									width="11"
									height="11"
									viewBox="0 0 12 12"
									fill="none"
									aria-hidden="true"
									class="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
						{/each}
					</div>
				{/if}

				{#if project.press?.length}
					<div class="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
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

			<div class="space-y-5">
				{#if project.gallery}
					<Gallery
						slides={project.gallery.slides}
						placeholders={project.gallery.placeholders}
						label="{project.title} photos"
					/>
				{/if}

				{#if project.specs?.length}
					<dl class="border-line rounded-card border bg-paper p-5">
						{#each project.specs as spec, i (spec.key)}
							<div class="{i > 0 ? 'border-line mt-3.5 border-t pt-3.5' : ''}">
								<dt class="text-faint font-mono text-[0.65rem] uppercase tracking-[0.14em]">
									{spec.key}
								</dt>
								<dd class="mt-1 text-sm leading-snug">{spec.value}</dd>
							</div>
						{/each}
					</dl>
				{/if}
			</div>
		</div>
	</div>
</article>
