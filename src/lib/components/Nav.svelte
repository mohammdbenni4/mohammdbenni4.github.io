<script lang="ts">
	import { nav, contact } from '$lib/data/site';

	let scrolled = $state(false);
	let open = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	function close() {
		open = false;
	}
</script>

<svelte:window on:scroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'border-line bg-paper/85 border-b backdrop-blur-md'
		: 'border-b border-transparent'}"
>
	<nav class="shell flex h-16 items-center justify-between gap-6" aria-label="Primary">
		<a
			href="#top"
			class="group flex items-center gap-2.5"
			aria-label="Mohammd Benni — back to top"
		>
			<span
				class="bg-brand-700 flex h-8 w-8 items-center justify-center rounded-[3px] font-mono text-[0.7rem] font-semibold tracking-tight text-white"
			>
				MB
			</span>
			<span class="hidden text-sm font-medium tracking-tight sm:block">Mohammd Benni</span>
		</a>

		<!-- Desktop links -->
		<div class="hidden items-center gap-7 md:flex">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="text-muted hover:text-brand-700 relative text-sm transition-colors duration-200"
				>
					{item.label}
				</a>
			{/each}
			<a
				href="mailto:{contact.email}"
				class="bg-brand-700 hover:bg-brand-800 cursor-pointer rounded-[3px] px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
			>
				Email me
			</a>
		</div>

		<!-- Mobile toggle -->
		<button
			type="button"
			class="text-ink -mr-2 flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
				{#if open}
					<path
						d="M5 5l10 10M15 5L5 15"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
				{:else}
					<path d="M3 6h14M3 13h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</nav>

	{#if open}
		<div id="mobile-nav" class="border-line bg-paper border-t md:hidden">
			<div class="shell flex flex-col py-2">
				{#each nav as item (item.href)}
					<a
						href={item.href}
						onclick={close}
						class="border-line/60 text-ink flex min-h-[44px] items-center border-b py-1 text-sm last:border-0"
					>
						{item.label}
					</a>
				{/each}
				<a
					href="mailto:{contact.email}"
					onclick={close}
					class="bg-brand-700 mb-3 mt-4 flex min-h-[44px] items-center justify-center rounded-[3px] px-4 text-sm font-medium text-white"
				>
					Email me
				</a>
			</div>
		</div>
	{/if}
</header>
