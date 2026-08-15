<script lang="ts">
	import { hero } from '$lib/data/site';

	/**
	 * A second-order step response, drawn as the hero graphic and annotated with
	 * career milestones. It is decorative — hidden from assistive tech, since the
	 * same timeline is available as text below it.
	 */

	// Underdamped step response: y(t) = 1 - e^(-ζωt)(cos(ωd·t) + ...)
	const width = 520;
	const height = 300;
	const padL = 12;
	const padR = 12;
	const baseline = height - 40;
	const settled = 70;

	function response(t: number) {
		const zeta = 0.28;
		const wn = 5.4;
		const wd = wn * Math.sqrt(1 - zeta * zeta);
		return 1 - Math.exp(-zeta * wn * t) * (Math.cos(wd * t) + (zeta / Math.sqrt(1 - zeta * zeta)) * Math.sin(wd * t));
	}

	const steps = 240;
	const tMax = 2.2;
	const points: string[] = [];
	for (let i = 0; i <= steps; i++) {
		const t = (i / steps) * tMax;
		const x = padL + (i / steps) * (width - padL - padR);
		const y = baseline - response(t) * (baseline - settled);
		points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
	}
	const path = `M ${points.join(' L ')}`;

	// Milestone markers spaced along the curve
	const markers = hero.timeline.map((item, i) => {
		const frac = [0.06, 0.3, 0.52, 0.88][i];
		const idx = Math.round(frac * steps);
		const [x, y] = points[idx].split(',').map(Number);
		return { ...item, x, y };
	});
</script>

<div class="relative w-full" aria-hidden="true">
	<svg
		viewBox="0 0 {width} {height}"
		class="h-auto w-full overflow-visible"
		role="presentation"
		fill="none"
	>
		<!-- Grid -->
		<defs>
			<pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
				<path d="M 26 0 L 0 0 0 26" fill="none" stroke="#e3e6e1" stroke-width="0.5" />
			</pattern>
			<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#04451e" stop-opacity="0.10" />
				<stop offset="100%" stop-color="#04451e" stop-opacity="0" />
			</linearGradient>
		</defs>

		<rect x="0" y="{settled - 40}" width={width} height={baseline - settled + 40} fill="url(#grid)" />

		<!-- Setpoint -->
		<line
			x1={padL}
			y1={settled}
			x2={width - padR}
			y2={settled}
			stroke="#9ab4a4"
			stroke-width="1"
			stroke-dasharray="3 4"
		/>
		<text x={padL} y={settled - 10} class="fill-faint font-mono" font-size="9" letter-spacing="1.2">
			SETPOINT
		</text>

		<!-- Time axis -->
		<line x1={padL} y1={baseline} x2={width - padR} y2={baseline} stroke="#e3e6e1" stroke-width="1" />

		<!-- Area under the curve -->
		<path d="{path} L {width - padR},{baseline} L {padL},{baseline} Z" fill="url(#fade)" />

		<!-- The response itself -->
		<path
			d={path}
			stroke="#04451e"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			pathLength="1"
			stroke-dasharray="1"
			stroke-dashoffset="1"
			class="animate-trace"
		/>

		<!-- Milestones -->
		{#each markers as m, i (m.year)}
			<g class="marker" style="--delay: {0.55 + i * 0.34}s">
				<line x1={m.x} y1={m.y} x2={m.x} y2={baseline} stroke="#ccd8d1" stroke-width="1" />
				<circle cx={m.x} cy={m.y} r="3.5" fill="#fcfcfa" stroke="#04451e" stroke-width="2" />
				<text
					x={m.x}
					y={baseline + 16}
					class="fill-brand-700 font-mono"
					font-size="10"
					font-weight="600"
					text-anchor="middle"
				>
					{m.year}
				</text>
				<text
					x={m.x}
					y={baseline + 29}
					class="fill-faint font-mono"
					font-size="8"
					text-anchor="middle"
				>
					{m.event}
				</text>
			</g>
		{/each}
	</svg>
</div>

<style>
	/* Milestone groups fade in behind the advancing trace. */
	.marker {
		opacity: 0;
		animation: fade-in 450ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s) forwards;
	}

	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marker {
			opacity: 1;
			animation: none;
		}
	}
</style>
