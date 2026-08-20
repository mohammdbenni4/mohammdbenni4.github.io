<script lang="ts">
	import { meta } from '$lib/data/site';
	import { graphEn } from '$lib/schema';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Work from '$lib/components/Work.svelte';
	import SystemDesign from '$lib/components/SystemDesign.svelte';
	import Graduation from '$lib/components/Graduation.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Competitive from '$lib/components/Competitive.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const home = `${meta.url}/`;
	const ogImage = `${meta.url}/og.png`;

	/**
	 * Entity graph, built in $lib/schema so the Arabic page emits the identical
	 * nodes. Every @id this page references is also defined on this page, which is
	 * what Google's per-page validation requires.
	 */
	const jsonLd = graphEn();
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="author" content={meta.name} />
	<link rel="canonical" href={home} />

	<!--
		hreflang, declared reciprocally: this page names the Arabic one and the
		Arabic one names this. A one-way declaration is ignored by Google.
	-->
	<link rel="alternate" hreflang="en" href={home} />
	<link rel="alternate" hreflang="ar" href="{meta.url}/ar/" />
	<link rel="alternate" hreflang="x-default" href={home} />
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
	<meta property="og:locale:alternate" content="ar_AR" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="{meta.name}, robotics engineer and full-stack web developer"
	/>
	<meta property="profile:first_name" content="Mohammd" />
	<meta property="profile:last_name" content="Benni" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="{meta.name}, robotics engineer" />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Nav />

<main id="main">
	<Hero />
	<About />
	<Work />
	<SystemDesign />
	<Graduation />
	<Skills />
	<Experience />
	<Competitive />
	<Contact />
</main>

<Footer />
