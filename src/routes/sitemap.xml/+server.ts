import type { RequestHandler } from './$types';
import { meta } from '$lib/data/site';

export const prerender = true;

/**
 * Sitemap, generated at build time.
 *
 * It used to be a hand-written file in static/, which meant `lastmod` was
 * whatever date somebody last remembered to type. It said 2026-08-15 through a
 * fortnight of daily changes. A lastmod that lies is worse than no lastmod:
 * Google learns the signal is unreliable and stops weighting it.
 *
 * Stamping it at build time means it is accurate by construction, because the
 * only way it changes is a rebuild, and a rebuild is the only way the content
 * changes on a static site.
 */
export const GET: RequestHandler = async ({ setHeaders }) => {
	const lastmod = new Date().toISOString().split('T')[0];


	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:image="http://www.w3.org/1999/image/1.1"
>
	<url>
		<loc>${meta.url}/</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
		<xhtml:link rel="alternate" hreflang="en" href="${meta.url}/" />
		<xhtml:link rel="alternate" hreflang="ar" href="${meta.url}/ar/" />
		<xhtml:link rel="alternate" hreflang="x-default" href="${meta.url}/" />
		<image:image>
			<image:loc>${meta.url}/images/portrait.jpg</image:loc>
			<image:title>${meta.name}</image:title>
		</image:image>
	</url>
	<url>
		<loc>${meta.url}/ar/</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.9</priority>
		<xhtml:link rel="alternate" hreflang="en" href="${meta.url}/" />
		<xhtml:link rel="alternate" hreflang="ar" href="${meta.url}/ar/" />
		<xhtml:link rel="alternate" hreflang="x-default" href="${meta.url}/" />
	</url>
</urlset>
`;

	setHeaders({ 'Content-Type': 'application/xml' });
	return new Response(xml);
};
