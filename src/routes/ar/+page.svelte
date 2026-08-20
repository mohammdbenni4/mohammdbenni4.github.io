<script lang="ts">
	import { meta, contact, about as aboutEn } from '$lib/data/site';
	import {
		metaAr,
		heroAr,
		heroLabelsAr,
		locationAr,
		aboutAr,
		projectsAr,
		smallerBuildsAr,
		systemDesignAr,
		graduationAr,
		skillGroupsAr,
		experienceAr,
		competitiveAr,
		contactSectionAr,
		uiAr
	} from '$lib/data/site-ar';

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

	const url = `${meta.url}/ar/`;
	const home = `${meta.url}/`;
	const portrait = `${meta.url}${aboutEn.portrait.src}`;

	/**
	 * The Arabic page is a second expression of the SAME person, not a second
	 * person, so the Person node is referenced by the @id the English page
	 * defines rather than redeclared. Two Person nodes for one human would split
	 * the entity exactly when the point is to consolidate it.
	 */
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfilePage',
				'@id': `${url}#page`,
				url,
				name: metaAr.title,
				description: metaAr.description,
				isPartOf: { '@id': `${meta.url}/#website` },
				mainEntity: { '@id': `${meta.url}/#person` },
				about: { '@id': `${meta.url}/#person` },
				primaryImageOfPage: portrait,
				inLanguage: 'ar',
				translationOfWork: { '@id': `${meta.url}/#page` }
			}
		]
	};
</script>

<svelte:head>
	<title>{metaAr.title}</title>
	<meta name="description" content={metaAr.description} />
	<meta name="author" content={metaAr.name} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={url} />

	<!--
		hreflang, declared reciprocally: this page names the English one and the
		English one names this. A one-way declaration is ignored by Google.
	-->
	<link rel="alternate" hreflang="ar" href={url} />
	<link rel="alternate" hreflang="en" href={home} />
	<link rel="alternate" hreflang="x-default" href={home} />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={metaAr.name} />
	<meta property="og:title" content={metaAr.title} />
	<meta property="og:description" content={metaAr.description} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="ar_AR" />
	<meta property="og:locale:alternate" content="en_US" />
	<meta property="og:image" content="{meta.url}/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaAr.title} />
	<meta name="twitter:description" content={metaAr.description} />
	<meta name="twitter:image" content="{meta.url}/og.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!--
	Same components as the English page, given Arabic data. Nothing here is a
	reimplementation: the LIDAR hero, the card motion, the timeline rail and the
	skills sweep all come along because this renders the identical tree.

	dir="rtl" on the wrapper rather than <html>, since the document language stays
	English at the root. Everything inside inherits it, so Tailwind's logical
	utilities (ps-, ms-, start-) mirror on their own and no layout is duplicated.
	Typography is corrected under [lang="ar"] in app.css.
-->
<div lang="ar" dir="rtl" class="font-arabic">
	<Nav
		nav={uiAr.nav}
		name={metaAr.name}
		homeHref="/ar/#top"
		langSwitch={uiAr.langSwitch}
		whatsappLabel={uiAr.whatsapp}
		whatsappLabelMobile={uiAr.whatsappLong}
		menuLabels={uiAr.menu}
	/>

	<main id="main">
		<Hero
			hero={heroAr}
			name={metaAr.name}
			location={locationAr}
			labels={heroLabelsAr}
			workHref="/ar/#work"
		/>
		<About about={aboutAr} header={uiAr.headers.about} />
		<Work
			projects={projectsAr}
			smallerBuilds={smallerBuildsAr}
			header={uiAr.headers.work}
			bench={uiAr.bench}
			projectLabels={uiAr.projectLabels}
		/>
		<SystemDesign
			systemDesign={systemDesignAr}
			header={uiAr.headers.systems}
			labels={uiAr.systemsLabels}
		/>
		<Graduation
			graduation={graduationAr}
			header={uiAr.headers.graduation}
			labels={uiAr.graduationLabels}
		/>
		<Skills skillGroups={skillGroupsAr} header={uiAr.headers.skills} />
		<Experience
			experience={experienceAr}
			header={uiAr.headers.experience}
			labels={uiAr.experienceLabels}
		/>
		<Competitive
			competitive={competitiveAr}
			header={uiAr.headers.competitive}
			labels={uiAr.competitiveLabels}
		/>
		<Contact
			contactSection={contactSectionAr}
			header={uiAr.headers.contact}
			labels={uiAr.contactLabels}
		/>
	</main>

	<Footer
		homeHref="/ar/#top"
		name={metaAr.name}
		location={locationAr}
		tagline={uiAr.footer.tagline}
		labels={uiAr.footer}
		linkLabels={uiAr.footerLinks}
	/>
</div>
