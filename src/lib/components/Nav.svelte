<script lang="ts">
	import { nav as navEn, meta, whatsappHref } from '$lib/data/site';
	import WhatsappIcon from './WhatsappIcon.svelte';
	import Logo from './Logo.svelte';

	let {
		nav = navEn,
		name = meta.name,
		homeHref = '/#top',
		langSwitch = { href: '/ar/', label: 'العربية', lang: 'ar', dir: 'rtl', title: 'اقرأ هذه الصفحة بالعربية' },
		whatsappLabel = 'WhatsApp',
		whatsappLabelMobile = 'Chat on WhatsApp',
		menuLabels = { open: 'Open menu', close: 'Close menu', nav: 'Primary' }
	} = $props();

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
	<nav class="shell flex h-16 items-center justify-between gap-6" aria-label={menuLabels.nav}>
		<a
			href={homeHref}
			class="group flex items-center gap-2.5"
			aria-label={name}
		>
			<Logo size={32} decorative />
			<span class="hidden text-sm font-medium tracking-tight sm:block">{name}</span>
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
			<!-- Language switch. A real crawlable link, which is what makes the
			     hreflang pair discoverable rather than only declared. -->
			<a
				href={langSwitch.href}
				lang={langSwitch.lang}
				dir={langSwitch.dir}
				hreflang={langSwitch.lang}
				aria-label={langSwitch.title}
				class="border-line text-muted hover:border-brand-700 hover:text-brand-700 rounded-[3px] border px-3 py-1.5 text-xs transition-colors duration-200"
			>
				{langSwitch.label}
			</a>
			<a
				href={whatsappHref}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex cursor-pointer items-center gap-2 rounded-[3px] bg-[#1d8449] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#16723f] hover:shadow-md"
			>
				<WhatsappIcon size={15} />
				{whatsappLabel}
			</a>
		</div>

		<!-- Mobile toggle -->
		<button
			type="button"
			class="text-ink -me-2 flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label={open ? menuLabels.close : menuLabels.open}
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
					href={langSwitch.href}
					lang={langSwitch.lang}
					dir={langSwitch.dir}
					hreflang={langSwitch.lang}
					onclick={close}
					class="border-line/60 text-ink flex min-h-[44px] items-center border-b py-1 text-sm"
				>
					{langSwitch.label}
				</a>
				<a
					href={whatsappHref}
					target="_blank"
					rel="noopener noreferrer"
					onclick={close}
					class="mb-3 mt-4 flex min-h-[46px] items-center justify-center gap-2 rounded-[3px] bg-[#1d8449] px-4 text-sm font-medium text-white"
				>
					<WhatsappIcon size={16} />
					{whatsappLabelMobile}
				</a>
			</div>
		</div>
	{/if}
</header>
