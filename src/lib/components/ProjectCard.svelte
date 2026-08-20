<script lang="ts">
	import type { Project, GalleryLabels } from '$lib/data/site';
	import Gallery from './Gallery.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		project,
		index,
		labels: passedLabels = undefined,
		galleryLabels = undefined
	}: {
		project: Project;
		index: number;
		labels?: { built: string; roles: string; press: string };
		galleryLabels?: GalleryLabels;
	} = $props();

	/** `undefined` must fall through to English, which a default alone does not do
	    when the parent explicitly passes undefined. */
	const labels = $derived(
		passedLabels ?? { built: 'What I built on it', roles: 'Roles I have held', press: 'Press' }
	);

	const num = $derived(String(index + 1).padStart(2, '0'));
	const hasAside = $derived(Boolean(project.gallery || project.specs?.length || project.roles?.length));
</script>

<article
	class="reveal group border-line hover:border-brand-300 relative overflow-hidden rounded-card border bg-white transition-all duration-500 hover:shadow-[0_18px_50px_-24px_rgba(4,69,30,0.30)]"
	use:reveal={{ delay: 40 }}
>
	<!-- Accent rail that fills on hover -->
	<span
		class="bg-brand-700 absolute inset-y-0 start-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
		aria-hidden="true"
	></span>

	<div class="p-5 sm:p-9 lg:p-11">
		<div class="mb-6 flex flex-wrap items-center gap-3">
			<span class="text-brand-500 font-mono text-xs font-semibold">{num}</span>
			{#if project.accent}
				<span class="label text-faint">{project.accent}</span>
			{/if}
			{#if project.status}
				<span
					class="bg-brand-50 text-brand-700 border-brand-200 ms-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.72rem] font-medium uppercase tracking-wider"
				>
					<span class="bg-signal h-1.5 w-1.5 animate-blink rounded-full"></span>
					{project.status}
				</span>
			{/if}
		</div>

		<h3 class="text-title group-hover:text-brand-700 font-semibold transition-colors duration-300">
			{project.title}
		</h3>
		<p class="text-faint mt-2 font-mono text-xs">{project.context}</p>

		<!-- Intro runs full width so the card does not start with a narrow column -->
		<div class="mt-5 max-w-4xl space-y-4">
			{#each project.body as paragraph, i (i)}
				<p class="leading-relaxed {i === 0 ? 'text-ink' : 'text-muted'}">{paragraph}</p>
			{/each}
		</div>

		<div
			class="mt-8 flex flex-col gap-8 {hasAside ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12' : ''}"
		>
			<div>
				{#if project.contributions?.length}
					<div class="label text-brand-700 border-brand-200 mb-5 border-b pb-2">
						{labels.built}
					</div>
					<ol class="space-y-5">
						{#each project.contributions as c, k (c.title)}
							<li class="group/c flex gap-4">
								<span
									class="border-brand-200 text-brand-700 group-hover/c:bg-brand-700 group-hover/c:border-brand-700 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[0.74rem] font-semibold transition-all duration-400 group-hover/c:text-white"
								>
									{k + 1}
								</span>
								<div class="min-w-0">
									<h4 class="text-ink text-[0.95rem] font-semibold leading-snug">{c.title}</h4>
									<p class="text-muted mt-1 text-sm leading-relaxed">{c.detail}</p>
								</div>
							</li>
						{/each}
					</ol>
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
								class={link.primary
									? 'bg-brand-700 hover:bg-brand-800 group/link inline-flex min-h-[46px] items-center gap-2.5 rounded-[3px] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md'
									: 'border-brand-200 text-brand-700 hover:bg-brand-700 group/link inline-flex min-h-[42px] items-center gap-2 rounded-[3px] border px-4 font-mono text-xs transition-all duration-200 hover:text-white'}
							>
								{link.label}
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									aria-hidden="true"
									class="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
								>
									<path
										d="M3 9l6-6M4.5 3H9v4.5"
										stroke="currentColor"
										stroke-width="1.5"
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
						<span class="label text-faint">{labels.press}</span>
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

			{#if hasAside}
				<!-- On phones the visual side leads, so you see it before reading -->
				<div class="order-first space-y-5 lg:order-none">
					{#if project.gallery}
						<Gallery
							slides={project.gallery.slides}
							placeholders={project.gallery.placeholders}
							label="{project.title} {galleryLabels?.suffix ?? 'photos'}"
							labels={galleryLabels}
						/>
					{/if}

					{#if project.roles?.length}
						<!-- Roles panel: a highlight travels the rail continuously and the
						     markers light in sequence, so the column never sits dead. -->
						<div class="border-line rounded-card relative overflow-hidden border bg-paper p-6">
							<div class="label text-brand-700 mb-5">{labels.roles}</div>

							<div class="relative ps-7">
								<span class="bg-line absolute bottom-1 start-[7px] top-1 w-px" aria-hidden="true"
								></span>
								<span
									class="rail-pulse absolute start-[7px] top-1 h-1/3 w-px"
									aria-hidden="true"
								></span>

								<ul class="space-y-5">
									{#each project.roles as r, k (r.role)}
										<li class="relative">
											<span
												class="bg-brand-700 pulse-dot absolute -start-7 top-[0.42rem] h-[9px] w-[9px] rounded-full"
												style="--dot-delay: {(k * 0.55).toFixed(2)}s"
												aria-hidden="true"
											></span>
											<h4 class="text-ink text-sm font-semibold leading-snug">{r.role}</h4>
											<p class="text-muted mt-1 text-sm leading-relaxed">{r.detail}</p>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					{/if}

					{#if project.specs?.length}
						<dl class="border-line rounded-card border bg-paper p-5">
							{#each project.specs as spec, i (spec.key)}
								<div class={i > 0 ? 'border-line mt-3.5 border-t pt-3.5' : ''}>
									<dt class="text-faint font-mono text-[0.72rem] uppercase tracking-[0.14em]">
										{spec.key}
									</dt>
									<dd class="mt-1 text-sm leading-snug">{spec.value}</dd>
								</div>
							{/each}
						</dl>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</article>
