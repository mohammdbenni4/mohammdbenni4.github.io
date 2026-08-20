import type { Handle } from '@sveltejs/kit';

/**
 * Sets <html lang> and <html dir> per route.
 *
 * app.html is a single shared template, so without this every page shipped
 * lang="en" — including /ar/, whose content, hreflang and canonical all say
 * Arabic. The root lang attribute is one of the signals Google uses to decide
 * what language a page is in, so declaring English on an Arabic page argues
 * against the hreflang pair rather than supporting it. It also decides whether
 * a screen reader picks an Arabic voice, and whether the browser offers to
 * translate a page that needs no translating.
 *
 * transformPageChunk runs during prerendering too, so the static build gets the
 * correct attributes baked in and nothing is decided at runtime.
 */
export const handle: Handle = async ({ event, resolve }) => {
	const isArabic = event.url.pathname.startsWith('/ar');

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', isArabic ? 'ar' : 'en').replace('%dir%', isArabic ? 'rtl' : 'ltr')
	});
};
