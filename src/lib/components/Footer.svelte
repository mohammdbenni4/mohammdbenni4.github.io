<script lang="ts">
	import { contact, meta, whatsappHref } from '$lib/data/site';
	import WhatsappIcon from './WhatsappIcon.svelte';
	import SocialIcon from './SocialIcon.svelte';
	import Logo from './Logo.svelte';

	let {
		homeHref = '/#top',
		name = meta.name,
		location = contact.location,
		tagline = 'Robotics engineer and full-stack web developer. Open to remote roles and relocation.',
		labels = {
			whatsapp: 'Chat on WhatsApp',
			nav: 'Footer',
			backToTop: 'Back to top',
			built: 'Built by hand with SvelteKit'
		},
		linkLabels = {}
	} = $props();

	const year = new Date().getFullYear();

	/** `icon` keys map to the marks in SocialIcon.svelte. */
	const links = [
		{ label: 'Email', icon: 'email', href: `mailto:${contact.email}`, external: false },
		{ label: 'LinkedIn', icon: 'linkedin', href: contact.linkedin.href, external: true },
		{ label: 'GitHub', icon: 'github', href: contact.github.href, external: true },
		{ label: 'Codeforces', icon: 'codeforces', href: contact.codeforces.href, external: true },
		{ label: 'ICPC', icon: 'icpc', href: contact.icpc.href, external: true },
		{ label: 'ORCID', icon: 'orcid', href: contact.orcid.href, external: true },
		{ label: 'Facebook', icon: 'facebook', href: contact.facebook.href, external: true },
		{ label: 'Instagram', icon: 'instagram', href: contact.instagram.href, external: true },
		{ label: 'CV (PDF)', icon: 'cv', href: contact.cv, external: false }
	];
</script>

<footer class="border-line border-t">
	<div class="shell py-12">
		<div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
			<div>
				<a href={homeHref} class="group inline-flex items-center gap-2.5">
					<Logo size={32} decorative />
					<span class="text-sm font-medium tracking-tight">{name}</span>
				</a>
				<p class="text-muted mt-3 max-w-sm text-sm leading-relaxed">
					{tagline}
				</p>
				<a
					href={whatsappHref}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-5 inline-flex min-h-[44px] items-center gap-2.5 rounded-[3px] bg-[#1d8449] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#16723f]"
				>
					<WhatsappIcon size={16} />
					{labels.whatsapp}
				</a>
			</div>

			<nav aria-label={labels.nav} class="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
				{#each links as link (link.label)}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class="group text-muted hover:text-brand-700 flex min-h-[40px] items-center gap-2.5 text-sm transition-colors duration-200"
					>
						<!-- The mark carries the muted ink until hover, so the row reads as
						     a label with an icon rather than an icon competing with a label. -->
						<span
							class="text-faint group-hover:text-brand-700 transition-colors duration-200"
						>
							<SocialIcon name={link.icon} size={16} />
						</span>
						{linkLabels[link.icon] ?? link.label}
					</a>
				{/each}
			</nav>
		</div>

		<div
			class="border-line mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
		>
			<p class="text-faint font-mono text-xs">
				{name} · {location} · {year}
			</p>
			<a
				href={homeHref}
				class="text-faint hover:text-brand-700 inline-flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
			>
				{labels.backToTop}
				<svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
					<path
						d="M6 10V2M2.5 5.5L6 2l3.5 3.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
	</div>
</footer>
