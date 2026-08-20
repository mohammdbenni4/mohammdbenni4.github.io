<script lang="ts">
	import { page } from '$app/stores';
	import { meta, contact, whatsappHref } from '$lib/data/site';

	/**
	 * Error page, which on this site is almost always a 404.
	 *
	 * GitHub Pages serves build/404.html for every unknown path, and adapter-static
	 * generates that file as the SPA shell. So a mistyped URL boots SvelteKit,
	 * fails to match a route, and lands here. Before this existed the visitor got
	 * a blank screen followed by the framework's unstyled default.
	 *
	 * It is deliberately a route back rather than a dead end: someone who mistypes
	 * a URL for a personal site is looking for the person, so the useful thing is
	 * to put the person in front of them.
	 */
	const is404 = $derived($page.status === 404);
</script>

<svelte:head>
	<title>{is404 ? 'Page not found' : 'Something went wrong'} | {meta.name}</title>
	<!-- Never let an error page into the index. -->
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<main id="main" class="flex min-h-screen flex-col">
	<div class="shell flex flex-1 flex-col justify-center py-20">
		<p class="label text-faint">{$page.status}</p>

		<h1 class="text-headline mt-4 font-semibold">
			{is404 ? 'That page does not exist' : 'Something went wrong'}
		</h1>

		<p class="text-muted text-lede mt-5 max-w-prose">
			{#if is404}
				The link may be out of date, or there may be a typo in the address. Everything on this
				site lives on a single page, so the way back is short.
			{:else}
				An unexpected error occurred. Reloading usually clears it. If it does not, I would
				genuinely like to know.
			{/if}
		</p>

		<div class="mt-9 flex flex-wrap items-center gap-3">
			<a
				href="/"
				class="bg-brand-700 hover:bg-brand-800 inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-[3px] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md sm:hover:-translate-y-0.5"
			>
				Go to the home page
			</a>
			<a
				href={whatsappHref}
				target="_blank"
				rel="noopener noreferrer"
				class="border-line hover:border-brand-700 hover:text-brand-700 inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-[3px] border bg-white px-6 text-sm font-medium transition-all duration-200"
			>
				Message me instead
			</a>
		</div>

		<!-- Deep links to the sections someone was most likely aiming for. -->
		<nav class="border-line mt-12 border-t pt-7" aria-label="Site sections">
			<p class="label text-faint mb-4">Where you might have been going</p>
			<ul class="flex flex-wrap gap-x-7 gap-y-3">
				{#each [{ label: 'Selected work', href: '/#work' }, { label: 'System design', href: '/#systems' }, { label: 'Experience', href: '/#experience' }, { label: 'Contact', href: '/#contact' }] as item (item.href)}
					<li>
						<a href={item.href} class="text-brand-700 link-underline text-sm">{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<p class="text-faint mt-10 font-mono text-xs">
			{meta.name} · {contact.location}
		</p>
	</div>
</main>
