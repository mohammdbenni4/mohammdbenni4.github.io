<script lang="ts">
	import type { GallerySlide } from '$lib/data/site';

	let {
		slides = [],
		placeholders = 0,
		label = 'Project photos'
	}: { slides?: GallerySlide[]; placeholders?: number; label?: string } = $props();

	// Until real photos are dropped in, render labelled placeholders so the
	// carousel is visible and testable.
	const isPlaceholder = $derived(slides.length === 0);
	const count = $derived(isPlaceholder ? placeholders : slides.length);

	let index = $state(0);
	let paused = $state(false);

	const reducedMotion =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function go(to: number) {
		if (count === 0) return;
		index = (to + count) % count;
	}

	const next = () => go(index + 1);
	const prev = () => go(index - 1);

	// Auto-advance, paused on hover or keyboard focus.
	$effect(() => {
		if (paused || reducedMotion || count < 2) return;
		const id = setInterval(next, 4200);
		return () => clearInterval(id);
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		}
	}

	// Swipe. Horizontal intent only, so vertical page scrolling is never
	// hijacked, and nothing calls preventDefault.
	let touchX = 0;
	let touchY = 0;

	function onTouchStart(e: TouchEvent) {
		touchX = e.touches[0].clientX;
		touchY = e.touches[0].clientY;
		paused = true;
	}

	function onTouchEnd(e: TouchEvent) {
		const dx = e.changedTouches[0].clientX - touchX;
		const dy = e.changedTouches[0].clientY - touchY;
		if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
			if (dx < 0) next();
			else prev();
		}
		paused = false;
	}
</script>

{#if count > 0}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<section
		class="group/gal border-line relative overflow-hidden rounded-card border bg-white"
		aria-roledescription="carousel"
		aria-label={label}
		onmouseenter={() => (paused = true)}
		onmouseleave={() => (paused = false)}
		onfocusin={() => (paused = true)}
		onfocusout={() => (paused = false)}
		onkeydown={onKeydown}
		ontouchstart={onTouchStart}
		ontouchend={onTouchEnd}
	>
		<div class="relative aspect-[4/3] w-full overflow-hidden">
			<div
				class="flex h-full w-full transition-transform duration-700 ease-out"
				style="transform: translateX(-{index * 100}%)"
			>
				{#if isPlaceholder}
					{#each Array(count) as _, i (i)}
						<div
							class="bg-brand-50/60 flex h-full w-full shrink-0 flex-col items-center justify-center gap-3"
							aria-roledescription="slide"
							aria-label="Placeholder {i + 1} of {count}"
						>
							<svg
								width="34"
								height="34"
								viewBox="0 0 24 24"
								fill="none"
								class="text-brand-400"
								aria-hidden="true"
							>
								<rect
									x="3"
									y="5"
									width="18"
									height="14"
									rx="2"
									stroke="currentColor"
									stroke-width="1.4"
								/>
								<circle cx="8.5" cy="10" r="1.6" stroke="currentColor" stroke-width="1.4" />
								<path
									d="M21 16l-4.5-4.5L9 19"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p class="text-faint font-mono text-xs">Photo {i + 1}</p>
							<p class="text-faint max-w-[16rem] px-6 text-center text-[0.7rem] leading-relaxed">
								Drop images in <span class="font-mono">static/projects/manara/</span> and list them in
								<span class="font-mono">site.ts</span>
							</p>
						</div>
					{/each}
				{:else}
					{#each slides as slide, i (slide.src)}
						<figure
							class="bg-brand-50/50 relative flex h-full w-full shrink-0 items-center justify-center"
							aria-roledescription="slide"
						>
							<!-- contain, not cover: the set mixes portrait and landscape, and
							     cropping a portrait shot to 16:10 decapitates the robot. -->
							<img
								src={slide.src}
								alt={slide.caption}
								loading={i === 0 ? 'eager' : 'lazy'}
								decoding="async"
								class="h-full w-full object-contain"
							/>
							{#if slide.caption}
								<figcaption
									class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3 text-xs text-white"
								>
									{slide.caption}
								</figcaption>
							{/if}
						</figure>
					{/each}
				{/if}
			</div>

			{#if count > 1}
				<!-- Arrows: always visible on touch, fade in on hover for pointers -->
				<button
					type="button"
					onclick={prev}
					aria-label="Previous photo"
					class="border-line absolute start-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md md:opacity-0 md:group-hover/gal:opacity-100 md:group-focus-within/gal:opacity-100"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path
							d="M10 3L5 8l5 5"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<button
					type="button"
					onclick={next}
					aria-label="Next photo"
					class="border-line absolute end-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md md:opacity-0 md:group-hover/gal:opacity-100 md:group-focus-within/gal:opacity-100"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path
							d="M6 3l5 5-5 5"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			{/if}
		</div>

		{#if count > 1}
			<div class="border-line flex items-center justify-center gap-2 border-t px-4 py-3">
				{#each Array(count) as _, i (i)}
					<button
						type="button"
						onclick={() => go(i)}
						aria-label="Go to photo {i + 1}"
						aria-current={i === index}
						class="h-1.5 cursor-pointer rounded-full transition-all duration-300 {i === index
							? 'bg-brand-700 w-6'
							: 'bg-brand-400 hover:bg-brand-500 w-1.5'}"
					></button>
				{/each}
			</div>
		{/if}
	</section>
{/if}
