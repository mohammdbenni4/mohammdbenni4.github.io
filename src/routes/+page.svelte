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

	// Structured data helps recruiters' tooling and search engines resolve who
	// this page is about.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: meta.name,
		url: meta.url,
		email: `mailto:${contact.email}`,
		telephone: contact.phoneHref,
		jobTitle: 'Robotics & Automation Engineer, Full-Stack Developer',
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
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="author" content={meta.name} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={meta.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={meta.url} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />

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
