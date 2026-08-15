<script lang="ts">
	import { meta, contact } from '$lib/data/site';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Work from '$lib/components/Work.svelte';
	import SystemDesign from '$lib/components/SystemDesign.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Competitive from '$lib/components/Competitive.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const home = `${meta.url}/`;
	const ogImage = `${meta.url}/og.png`;

	/**
	 * Entity graph. The Person node is what lets Google connect this domain to
	 * the name "Mohammd Benni" and to the LinkedIn/GitHub/Codeforces profiles
	 * listed in sameAs — the key signal for a name query.
	 */
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${meta.url}/#website`,
				url: home,
				name: meta.name,
				inLanguage: 'en',
				publisher: { '@id': `${meta.url}/#person` }
			},
			{
				'@type': 'ProfilePage',
				'@id': `${meta.url}/#page`,
				url: home,
				name: meta.title,
				description: meta.description,
				isPartOf: { '@id': `${meta.url}/#website` },
				about: { '@id': `${meta.url}/#person` },
				primaryImageOfPage: ogImage,
				inLanguage: 'en'
			},
			{
				'@type': 'Person',
				'@id': `${meta.url}/#person`,
				name: meta.name,
				url: home,
				image: ogImage,
				email: `mailto:${contact.email}`,
				telephone: contact.phoneHref,
				jobTitle: 'Robotics & Automation Engineer, Full-Stack Developer',
				description: meta.description,
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aleppo',
					addressCountry: 'SY'
				},
				alumniOf: {
					'@type': 'CollegeOrUniversity',
					name: 'University of Aleppo'
				},
				worksFor: {
					'@type': 'Organization',
					name: 'SWB Technical Development'
				},
				knowsAbout: [
					'ROS 2',
					'Robotics',
					'Embedded systems',
					'IoT',
					'Control systems',
					'Computer vision',
					'.NET Core',
					'FastAPI',
					'System design',
					'Database design',
					'PostgreSQL'
				],
				sameAs: [contact.linkedin.href, contact.github.href, contact.codeforces.href]
			}
		]
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="author" content={meta.name} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	{#if meta.googleSiteVerification}
		<meta name="google-site-verification" content={meta.googleSiteVerification} />
	{/if}
	{#if meta.bingSiteVerification}
		<meta name="msvalidate.01" content={meta.bingSiteVerification} />
	{/if}

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={meta.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={home} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{meta.name} — Robotics & Automation Engineer, Full-stack developer" />
	<meta property="profile:first_name" content="Mohammd" />
	<meta property="profile:last_name" content="Benni" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="{meta.name} — Robotics & Automation Engineer" />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Nav />

<main id="main">
	<Hero />
	<About />
	<Work />
	<SystemDesign />
	<Skills />
	<Experience />
	<Competitive />
	<Contact />
</main>

<Footer />
