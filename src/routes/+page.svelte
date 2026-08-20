<script lang="ts">
	import { meta, contact, profiles, projects, about } from '$lib/data/site';
	import { metaAr } from '$lib/data/site-ar';
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
	 * The real headshot, used as the Person entity's `image`. A photograph of the
	 * person is a stronger entity signal than a branded OG card, and it is what
	 * Google would draw on if a Knowledge Panel ever appears. The OG card stays
	 * as the social preview, where a wide branded image is the right shape.
	 */
	const portrait = `${meta.url}${about.portrait.src}`;

	/**
	 * Falls back to the OG card while the portrait is disabled, so the entity
	 * never advertises an image that returns 404. Pointing structured data at a
	 * missing file is worse than pointing it at a plain one.
	 */
	const personImage = about.portrait.enabled
		? {
				'@type': 'ImageObject',
				url: portrait,
				caption: about.portrait.alt,
				width: 1000,
				height: 1250
			}
		: ogImage;

	/**
	 * Press coverage of the work, pulled from the project data so the citations
	 * never drift from what the page actually shows.
	 *
	 * Caveat worth knowing: none of these articles name a person. They credit
	 * Duraya and SWB Technical Development, and mention "over 15 engineers"
	 * without listing them. So this is a weak corroboration signal, not proof of
	 * notability. It costs nothing and it is honest (`subjectOf` on a Person
	 * whose work is the subject), but the real unlock is a source that prints
	 * the name. See docs/search-visibility.md, phase 4.
	 */
	const pressCitations = projects.flatMap((p) => p.press ?? []);

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
				/**
				 * The monogram, declared as its own node so both pages and the Person
				 * can reference one image rather than repeating a URL. Note this is not
				 * what puts an icon beside a Google result: that comes from the
				 * <link rel="icon"> tags in app.html. This is entity data, and it is
				 * `image` rather than `logo` because `logo` belongs to Organization and
				 * the subject here is a Person.
				 */
				image: { '@id': `${meta.url}/#logo` },
				inLanguage: 'en',
				publisher: { '@id': `${meta.url}/#person` }
			},
			{
				'@type': 'ImageObject',
				'@id': `${meta.url}/#logo`,
				url: `${meta.url}/icon-512.png`,
				contentUrl: `${meta.url}/icon-512.png`,
				width: 512,
				height: 512,
				// Caption carries the name, not the word "logo": this is one of the
				// places the name is asserted, so it should say the name.
				caption: meta.name
			},
			{
				'@type': 'ProfilePage',
				'@id': `${meta.url}/#page`,
				url: home,
				name: meta.title,
				description: meta.description,
				isPartOf: { '@id': `${meta.url}/#website` },
				// Google's ProfilePage spec requires mainEntity (not `about`) to
				// identify the subject of the page.
				mainEntity: { '@id': `${meta.url}/#person` },
				about: { '@id': `${meta.url}/#person` },
				primaryImageOfPage: about.portrait.enabled ? portrait : ogImage,
				inLanguage: 'en'
			},
			{
				'@type': 'Person',
				'@id': `${meta.url}/#person`,
				name: meta.name,
				// Spelling variants, so "Mohammad Benni" and the Arabic form resolve
				// to this same entity rather than to nobody.
				alternateName: meta.alternateNames,
				url: home,
				image: personImage,
				email: `mailto:${contact.email}`,
				telephone: contact.phoneHref,
				jobTitle: 'Robotics Engineer, Full-Stack Web Developer',
				// Both languages, each tagged. This is the correct JSON-LD form for a
				// multilingual value: an array of @value/@language objects. It is also
				// how the Arabic description gets associated with this entity without
				// pretending the English one does not exist.
				description: [
					{ '@value': meta.description, '@language': 'en' },
					{ '@value': metaAr.description, '@language': 'ar' }
				],
				// Supports the "السوري" (Syrian) half of the target Arabic queries as a
				// structured fact rather than only as a word in a paragraph.
				nationality: { '@type': 'Country', name: 'Syria' },
				knowsLanguage: [
					{ '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
					{ '@type': 'Language', name: 'English', alternateName: 'en' }
				],
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Aleppo',
					addressCountry: 'SY'
				},
				alumniOf: {
					'@type': 'CollegeOrUniversity',
					name: 'University of Aleppo',
					// Anchoring to Wikipedia/Wikidata (Q2302663) ties this to an entity
					// Google already knows. Hanging a new entity off established ones is
					// how an unknown person becomes resolvable.
					sameAs: [
						'https://en.wikipedia.org/wiki/University_of_Aleppo',
						'https://www.wikidata.org/wiki/Q2302663'
					]
				},
				worksFor: {
					'@type': 'Organization',
					name: 'SWB AI',
					// The press credits "SWB Technical Development Company", which is the
					// string Google can actually match against those articles. Carrying
					// both names here bridges the brand to the coverage.
					alternateName: 'SWB Technical Development',
					url: 'https://www.swbai.com'
				},
				subjectOf: pressCitations.map((item) => ({
					'@type': 'NewsArticle',
					name: item.label,
					url: item.href,
					publisher: { '@type': 'Organization', name: item.label }
				})),
				/**
				 * Kept in lockstep with the keywords on the ORCID record
				 * (orcid.org/0009-0004-4489-412X). Two properties asserting the same
				 * competencies corroborate each other; two asserting different ones
				 * are just noise. If a term changes in one place, change it in both.
				 */
				knowsAbout: [
					'Robotics',
					'ROS 2',
					'Autonomous mobile robots',
					'Embedded systems',
					'Control systems',
					'SLAM',
					'LiDAR',
					'Sensor fusion',
					'Battery management systems',
					'RS-485',
					'Internet of Things',
					'Computer vision',
					'YOLO object detection',
					'Adaptive traffic signal control',
					'Competitive programming',
					'Full-stack web development',
					'.NET Core',
					'Database design',
					'C++',
					'Python',
					'PostgreSQL',
					// Web-specific, carried here but not on ORCID, whose audience skews
					// academic and would not search for a front-end framework.
					'FastAPI',
					'SvelteKit',
					'System design'
				],
				sameAs: profiles
			}
		]
	};
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
