<script lang="ts">
	import { meta } from '$lib/data/site';

	/**
	 * The MB monogram.
	 *
	 * Two variants exist because neither logo file has an alpha channel: both are
	 * solid tiles. The dark one is gold on brand green and belongs on the paper
	 * background; the light one is green on cream and belongs on the brand-green
	 * contact block, where the dark tile would disappear into the backdrop.
	 *
	 * `alt` carries the name rather than the word "logo". A screen reader user
	 * gains nothing from being told an image is a logo, and alt text is one of
	 * the places Google reads a name from, so it should say the name.
	 */
	let {
		variant = 'dark',
		size = 32,
		name = meta.name,
		/** Decorative when the name is already rendered as text beside it. */
		decorative = false
	}: {
		variant?: 'dark' | 'light';
		size?: number;
		name?: string;
		decorative?: boolean;
	} = $props();

	const src = $derived(variant === 'light' ? '/logo-mark-light.png' : '/logo-mark.png');
</script>

<img
	{src}
	alt={decorative ? '' : name}
	aria-hidden={decorative ? 'true' : undefined}
	width={size}
	height={size}
	style="width:{size}px;height:{size}px"
	loading="eager"
	decoding="async"
	class="rounded-[3px]"
/>
