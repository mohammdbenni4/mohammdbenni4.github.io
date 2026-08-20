<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();

	/**
	 * The skip link is shared across both language versions, so it follows the
	 * page it sits on. A keyboard user on the Arabic page should not be handed an
	 * English control, and it should anchor to the start edge, which is the right
	 * in RTL.
	 */
	const isArabic = $derived($page.url.pathname.startsWith('/ar'));
</script>

<a
	href="#main"
	lang={isArabic ? 'ar' : 'en'}
	dir={isArabic ? 'rtl' : 'ltr'}
	class="focus:bg-brand-700 sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[100] focus:rounded focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white {isArabic
		? 'focus:right-4'
		: 'focus:left-4'}"
>
	{isArabic ? 'تخطَّ إلى المحتوى' : 'Skip to content'}
</a>

{@render children()}
