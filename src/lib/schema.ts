/**
 * Shared entity graph.
 *
 * Both language pages emit these same nodes, with the same `@id` values.
 *
 * That repetition is deliberate and it is not duplication in the harmful sense.
 * Two nodes carrying the same `@id` are the same entity by definition, which is
 * exactly what `@id` exists for, so restating the Person on the Arabic page
 * reinforces the entity rather than splitting it.
 *
 * The earlier arrangement had the Arabic page carry only a ProfilePage whose
 * `mainEntity` was a bare `{'@id': '.../#person'}` pointing at a node defined
 * on the English page. Google validates each page's structured data in
 * isolation, so on /ar/ it saw a reference with no resolvable `@type` and
 * reported "Invalid object type in field mainEntity". A cross-page `@id` is a
 * statement about identity, not a mechanism for fetching a definition.
 *
 * Rule of thumb: every `@id` a page references must also be defined on that
 * page.
 */

import { meta, contact, profiles, projects, about } from './data/site';
import { metaAr } from './data/site-ar';

const home = `${meta.url}/`;
const ogImage = `${meta.url}/og.png`;
const portrait = `${meta.url}${about.portrait.src}`;

export const ids = {
	website: `${meta.url}/#website`,
	person: `${meta.url}/#person`,
	logo: `${meta.url}/#logo`,
	pageEn: `${meta.url}/#page`,
	pageAr: `${meta.url}/ar/#page`
};

/**
 * Falls back to the OG card while the portrait is disabled, so the entity never
 * advertises an image that 404s.
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
 * Press coverage, derived from the project data so the citations cannot drift
 * from what the page displays.
 *
 * Worth remembering: none of these articles names a person. They credit Duraya
 * and SWB Technical Development and mention "over 15 engineers" without listing
 * them, so this is weak corroboration rather than proof of notability.
 */
const pressCitations = projects.flatMap((p) => p.press ?? []);

/**
 * WebSite, logo and Person. Spread into the @graph of every page so each
 * document is self-contained and independently valid.
 */
export function entityNodes() {
	return [
		{
			'@type': 'WebSite',
			'@id': ids.website,
			url: home,
			name: meta.name,
			image: { '@id': ids.logo },
			inLanguage: ['en', 'ar'],
			publisher: { '@id': ids.person }
		},
		{
			'@type': 'ImageObject',
			'@id': ids.logo,
			url: `${meta.url}/icon-512.png`,
			contentUrl: `${meta.url}/icon-512.png`,
			width: 512,
			height: 512,
			// Caption carries the name, not the word "logo": this is one of the
			// places the name is asserted, so it should say the name.
			caption: meta.name
		},
		{
			'@type': 'Person',
			'@id': ids.person,
			name: meta.name,
			// Spelling variants, so "Mohammad Benni" and the Arabic forms resolve to
			// this same entity rather than to nobody.
			alternateName: meta.alternateNames,
			url: home,
			image: personImage,
			email: `mailto:${contact.email}`,
			telephone: contact.phoneHref,
			jobTitle: 'Robotics Engineer, Full-Stack Web Developer',
			// Correct JSON-LD form for a multilingual value: an array of
			// @value/@language objects rather than one string in one language.
			description: [
				{ '@value': meta.description, '@language': 'en' },
				{ '@value': metaAr.description, '@language': 'ar' }
			],
			// Supports the "السوري" half of the target Arabic queries as a structured
			// fact rather than only as a word in a paragraph.
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
				// string Google can match against those articles. Carrying both names
				// bridges the brand to the coverage.
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
			 * competencies corroborate each other; two asserting different ones are
			 * just noise. Change a term here and change it there.
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
	];
}

/** Full graph for the English page. */
export function graphEn() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			...entityNodes(),
			{
				'@type': 'ProfilePage',
				'@id': ids.pageEn,
				url: home,
				name: meta.title,
				description: meta.description,
				isPartOf: { '@id': ids.website },
				// Google's ProfilePage spec requires mainEntity (not `about`) to
				// identify the subject of the page.
				mainEntity: { '@id': ids.person },
				about: { '@id': ids.person },
				primaryImageOfPage: about.portrait.enabled ? portrait : ogImage,
				inLanguage: 'en'
			}
		]
	};
}

/** Full graph for the Arabic page. Same entity, different page node. */
export function graphAr() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			...entityNodes(),
			{
				'@type': 'ProfilePage',
				'@id': ids.pageAr,
				url: `${meta.url}/ar/`,
				name: metaAr.title,
				description: metaAr.description,
				isPartOf: { '@id': ids.website },
				mainEntity: { '@id': ids.person },
				about: { '@id': ids.person },
				primaryImageOfPage: about.portrait.enabled ? portrait : ogImage,
				inLanguage: 'ar'
			}
		]
	};
}
