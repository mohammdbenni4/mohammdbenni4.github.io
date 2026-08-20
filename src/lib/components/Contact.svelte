<script lang="ts">
	import { contact, contactSection as sectionEn, whatsappHref } from '$lib/data/site';
	import WhatsappIcon from './WhatsappIcon.svelte';
	import Logo from './Logo.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		contactSection = sectionEn,
		header = '08 / Contact',
		labels = {
			whatsapp: 'Chat on WhatsApp',
			email: 'Send an email',
			cv: 'Download CV',
			location: 'Location'
		}
	} = $props();

	const channels = [
		{ key: 'WhatsApp', label: contact.phone, href: whatsappHref, external: true },
		{ key: 'Email', label: contact.email, href: `mailto:${contact.email}`, external: false },
		{ key: 'LinkedIn', label: contact.linkedin.label, href: contact.linkedin.href, external: true },
		{ key: 'GitHub', label: contact.github.label, href: contact.github.href, external: true },
		{
			key: 'Codeforces',
			label: contact.codeforces.label,
			href: contact.codeforces.href,
			external: true
		},
		{ key: 'ICPC', label: 'CFILP0WQF2R5', href: contact.icpc.href, external: true },
		{ key: 'ORCID', label: contact.orcid.label, href: contact.orcid.href, external: true },
		// Social last: professional channels are what someone hiring came for.
		{ key: 'Facebook', label: contact.facebook.label, href: contact.facebook.href, external: true },
		{
			key: 'Instagram',
			label: contact.instagram.label,
			href: contact.instagram.href,
			external: true
		}
	];
</script>

<section id="contact" class="pt-section">
	<div class="bg-brand-700 relative overflow-hidden text-white">
		<!-- Subtle radial light so the block is not a flat slab -->
		<div
			class="pointer-events-none absolute -end-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
			style="background: radial-gradient(circle, #1a5733 0%, transparent 70%)"
			aria-hidden="true"
		></div>

		<div class="shell relative py-14 sm:py-20 lg:py-28">
			<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
				<div class="reveal" use:reveal>
					<!-- The light mark, on the one surface where the dark tile would sink
					     into the background. -->
					<div class="mb-6 flex items-center gap-3">
						<Logo variant="light" size={36} decorative />
						<span class="label text-brand-300">{header}</span>
					</div>
					<h2 class="text-headline font-semibold">{contactSection.heading}</h2>
					<p class="text-brand-100 text-lede mt-6 max-w-prose">{contactSection.body}</p>

					<div class="mt-8 flex flex-wrap gap-3 sm:mt-10">
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[3px] bg-white px-6 sm:w-auto sm:justify-start text-sm font-semibold text-[#177a43] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
						>
							<WhatsappIcon size={18} />
							{labels.whatsapp}
						</a>
						<a
							href="mailto:{contact.email}"
							class="border-brand-500 hover:bg-brand-800 inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-[3px] border px-6 sm:w-auto text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
						>
							{labels.email}
						</a>
						<a
							href={contact.cv}
							download
							class="text-brand-100 inline-flex min-h-[48px] cursor-pointer items-center gap-2 px-3 text-sm transition-colors duration-200 hover:text-white"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
								<path
									d="M7 1v8m0 0L4 6m3 3l3-3M2 11v1a1 1 0 001 1h8a1 1 0 001-1v-1"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{labels.cv}
						</a>
					</div>
				</div>

				<div class="reveal" use:reveal={{ delay: 100 }}>
					<dl class="border-brand-600 border-t">
						{#each channels as channel (channel.key)}
							<!-- Phones stack the label above the value: a 6.5rem label column
							     left too little room for an email address at 375px. -->
							<div
								class="border-brand-600 grid items-center gap-1 border-b py-2 sm:grid-cols-[6.5rem_1fr] sm:gap-4 sm:py-0"
							>
								<dt class="text-brand-300 font-mono text-xs uppercase tracking-wider">
									{channel.key}
								</dt>
								<dd>
									<a
										href={channel.href}
										target={channel.external ? '_blank' : undefined}
										rel={channel.external ? 'noopener noreferrer' : undefined}
										class="group hover:text-brand-200 flex min-h-[44px] items-center gap-2 break-all text-sm transition-colors duration-200 sm:min-h-[52px] sm:break-normal"
									>
										{channel.label}
										<svg
											width="11"
											height="11"
											viewBox="0 0 12 12"
											fill="none"
											aria-hidden="true"
											class="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70"
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
								</dd>
							</div>
						{/each}
						<div class="grid items-center gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
							<dt class="text-brand-300 font-mono text-xs uppercase tracking-wider">{labels.location}</dt>
							<dd class="text-sm">{contact.location}</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>
