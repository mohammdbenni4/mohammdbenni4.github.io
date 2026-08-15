<script lang="ts">
	import { contact, contactSection } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';

	const channels = [
		{ key: 'Email', label: contact.email, href: `mailto:${contact.email}`, external: false },
		{ key: 'Phone', label: contact.phone, href: `tel:${contact.phoneHref}`, external: false },
		{ key: 'LinkedIn', label: contact.linkedin.label, href: contact.linkedin.href, external: true },
		{ key: 'GitHub', label: contact.github.label, href: contact.github.href, external: true },
		{
			key: 'Codeforces',
			label: contact.codeforces.label,
			href: contact.codeforces.href,
			external: true
		}
	];
</script>

<section id="contact" class="pt-section">
	<div class="bg-brand-700 text-white">
		<div class="shell py-20 lg:py-28">
			<div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
				<div use:reveal>
					<div class="label text-brand-300 mb-6">07 / Contact</div>
					<h2 class="text-headline font-semibold">{contactSection.heading}</h2>
					<p class="text-brand-100 text-lede mt-6 max-w-prose">{contactSection.body}</p>

					<div class="mt-10 flex flex-wrap gap-3">
						<a
							href="mailto:{contact.email}"
							class="text-brand-700 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[3px] bg-white px-6 text-sm font-semibold transition-colors duration-200 hover:bg-brand-50"
						>
							{contact.email}
						</a>
						<a
							href={contact.cv}
							download
							class="border-brand-500 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[3px] border px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-800"
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
							Download CV
						</a>
					</div>
				</div>

				<div use:reveal={{ delay: 100 }}>
					<dl class="border-brand-600 border-t">
						{#each channels as channel (channel.key)}
							<div class="border-brand-600 grid grid-cols-[6.5rem_1fr] items-center gap-4 border-b">
								<dt class="text-brand-300 font-mono text-xs uppercase tracking-wider">
									{channel.key}
								</dt>
								<dd>
									<a
										href={channel.href}
										target={channel.external ? '_blank' : undefined}
										rel={channel.external ? 'noopener noreferrer' : undefined}
										class="hover:text-brand-200 flex min-h-[52px] items-center text-sm transition-colors duration-200"
									>
										{channel.label}
									</a>
								</dd>
							</div>
						{/each}
						<div class="grid grid-cols-[6.5rem_1fr] items-center gap-4 py-4">
							<dt class="text-brand-300 font-mono text-xs uppercase tracking-wider">Location</dt>
							<dd class="text-sm">{contact.location}</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>
