<script lang="ts">
	/**
	 * Animated LIDAR scope for the hero.
	 *
	 * The returns are not random decoration: radii are computed from a simulated
	 * room outline with three obstacles, so the point cloud reads like an actual
	 * RPLidar sweep. Each return flashes as the beam passes its bearing, which is
	 * driven purely by a negative CSS animation-delay proportional to its angle,
	 * so there is no JS running per frame.
	 *
	 * Decorative: hidden from assistive tech.
	 */

	const SIZE = 400;
	const C = SIZE / 2;
	const MAX_R = 168;
	const PERIOD = 4.4; // seconds per revolution

	/** Distance to the simulated room boundary at a given bearing. */
	function scanRadius(deg: number) {
		const rad = (deg * Math.PI) / 180;
		const dx = Math.abs(Math.sin(rad));
		const dy = Math.abs(Math.cos(rad));
		const halfW = 152;
		const halfH = 124;
		let r = Math.min(halfW / (dx || 1e-6), halfH / (dy || 1e-6));

		// Obstacles in the room
		if (deg > 38 && deg < 72) r = Math.min(r, 80);
		if (deg > 196 && deg < 230) r = Math.min(r, 96);
		if (deg > 298 && deg < 320) r = Math.min(r, 66);

		return Math.min(r, MAX_R);
	}

	const returns = Array.from({ length: 90 }, (_, i) => {
		const deg = i * 4;
		const r = scanRadius(deg) * (0.985 + Math.random() * 0.03); // sensor noise
		const rad = (deg * Math.PI) / 180;
		return {
			deg,
			x: +(C + r * Math.sin(rad)).toFixed(2),
			y: +(C - r * Math.cos(rad)).toFixed(2),
			// Negative delay starts each point mid-cycle so the whole scope is
			// already "running" on first paint.
			delay: +((deg / 360) * PERIOD - PERIOD).toFixed(3)
		};
	});

	const rings = [56, 105, 154];

	// Sweep wedge: trailing edge at -58 degrees, leading edge at 0.
	const a0 = (-58 * Math.PI) / 180;
	const wedge = `M ${C},${C} L ${(C + MAX_R * Math.sin(a0)).toFixed(2)},${(
		C -
		MAX_R * Math.cos(a0)
	).toFixed(2)} A ${MAX_R} ${MAX_R} 0 0 1 ${C},${C - MAX_R} Z`;
</script>

<div class="relative w-full" aria-hidden="true" style="--period: {PERIOD}s">
	<svg viewBox="0 0 {SIZE} {SIZE}" class="h-auto w-full" role="presentation" fill="none">
		<defs>
			<linearGradient
				id="sweep-fade"
				gradientUnits="userSpaceOnUse"
				x1={C + MAX_R * Math.sin(a0)}
				y1={C - MAX_R * Math.cos(a0)}
				x2={C}
				y2={C - MAX_R}
			>
				<stop offset="0%" stop-color="#04451e" stop-opacity="0" />
				<stop offset="65%" stop-color="#04451e" stop-opacity="0.09" />
				<stop offset="100%" stop-color="#04451e" stop-opacity="0.20" />
			</linearGradient>
			<radialGradient id="core-glow">
				<stop offset="0%" stop-color="#2fa35f" stop-opacity="0.28" />
				<stop offset="100%" stop-color="#2fa35f" stop-opacity="0" />
			</radialGradient>
		</defs>

		<!-- Range rings -->
		{#each rings as r (r)}
			<circle cx={C} cy={C} {r} stroke="#e3e6e1" stroke-width="1" fill="none" />
		{/each}
		<circle cx={C} cy={C} r={MAX_R} stroke="#ccd8d1" stroke-width="1" fill="none" />

		<!-- Bearing crosshairs -->
		<line x1={C} y1={C - MAX_R} x2={C} y2={C + MAX_R} stroke="#e3e6e1" stroke-width="1" />
		<line x1={C - MAX_R} y1={C} x2={C + MAX_R} y2={C} stroke="#e3e6e1" stroke-width="1" />

		<!-- Range labels -->
		{#each rings as r, i (r)}
			<text
				x={C + 4}
				y={C - r - 4}
				class="fill-faint font-mono"
				font-size="8"
				letter-spacing="0.8">{(i + 1) * 2}m</text
			>
		{/each}

		<!-- Rotating sweep -->
		<g class="sweep" style="transform-origin: {C}px {C}px">
			<path d={wedge} fill="url(#sweep-fade)" />
			<line
				x1={C}
				y1={C}
				x2={C}
				y2={C - MAX_R}
				stroke="#04451e"
				stroke-width="1.5"
				stroke-opacity="0.55"
			/>
		</g>

		<!-- Returns -->
		{#each returns as p (p.deg)}
			<circle
				class="blip"
				cx={p.x}
				cy={p.y}
				r="2.2"
				fill="#04451e"
				style="animation-delay: {p.delay}s"
			/>
		{/each}

		<!-- Sensor at origin -->
		<circle cx={C} cy={C} r="26" fill="url(#core-glow)" />
		<circle cx={C} cy={C} r="4.5" fill="#04451e" />
		<circle class="pulse" cx={C} cy={C} r="4.5" fill="none" stroke="#2fa35f" stroke-width="1.5" />
	</svg>
</div>

<style>
	.sweep {
		animation: rotate var(--period, 4.4s) linear infinite;
	}

	@keyframes rotate {
		to {
			transform: rotate(360deg);
		}
	}

	/* Each return flashes as the beam crosses its bearing, then decays.
	   Uses transform/opacity only, so it stays on the compositor and avoids the
	   patchy support for animating the SVG `r` geometry property. */
	.blip {
		opacity: 0.14;
		transform-box: fill-box;
		transform-origin: center;
		animation: blip var(--period, 4.4s) linear infinite;
	}

	@keyframes blip {
		0% {
			opacity: 1;
			transform: scale(1.55);
		}
		12% {
			opacity: 0.5;
			transform: scale(1);
		}
		100% {
			opacity: 0.14;
			transform: scale(1);
		}
	}

	.pulse {
		transform-box: fill-box;
		transform-origin: center;
		animation: pulse 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 0.9;
		}
		100% {
			transform: scale(5.6);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sweep {
			animation: none;
			opacity: 0.5;
		}
		.blip {
			animation: none;
			opacity: 0.55;
		}
		.pulse {
			animation: none;
			opacity: 0;
		}
	}
</style>
