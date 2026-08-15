import type { Action } from 'svelte/action';

type RevealOptions = {
	/** Stagger delay in ms, applied via a CSS custom property. */
	delay?: number;
	/** How much of the element must be visible before revealing. */
	threshold?: number;
};

/**
 * Adds `.is-visible` once the node scrolls into view, then stops observing.
 * Users who prefer reduced motion get the final state immediately — the CSS
 * already neutralises the transform, this just avoids the observer entirely.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const prefersReducedMotion =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	if (options?.delay) {
		node.style.setProperty('--reveal-delay', `${options.delay}ms`);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: options?.threshold ?? 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
