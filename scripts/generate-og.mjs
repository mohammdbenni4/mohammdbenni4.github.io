/**
 * Generates static/og.png — the 1200×630 link-preview card used by og:image.
 *
 *   node scripts/generate-og.mjs
 *
 * Fonts are read from scripts/fonts/*.ttf (IBM Plex Sans + JetBrains Mono).
 * Re-run this if the name, role, or brand colour changes.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const fontDir = join(here, 'fonts');
const fontFiles = readdirSync(fontDir)
	.filter((f) => f.endsWith('.ttf'))
	.map((f) => join(fontDir, f));

const BRAND = '#04451e';
const PAPER = '#fcfcfa';

// Same LIDAR scope as the hero graphic, so the card and the site share a
// visual signature. Radii come from the same simulated room outline.
function lidarScope(cx, cy, maxR) {
	const scanRadius = (deg) => {
		const rad = (deg * Math.PI) / 180;
		const dx = Math.abs(Math.sin(rad));
		const dy = Math.abs(Math.cos(rad));
		let r = Math.min(190 / (dx || 1e-6), 155 / (dy || 1e-6));
		if (deg > 38 && deg < 72) r = Math.min(r, 100);
		if (deg > 196 && deg < 230) r = Math.min(r, 120);
		if (deg > 298 && deg < 320) r = Math.min(r, 82);
		return Math.min(r, maxR);
	};

	const parts = [];
	for (const r of [maxR * 0.33, maxR * 0.62, maxR * 0.92]) {
		parts.push(
			`<circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}" fill="none" stroke="${BRAND}" stroke-opacity="0.10" stroke-width="2"/>`
		);
	}
	parts.push(
		`<line x1="${cx}" y1="${cy - maxR}" x2="${cx}" y2="${cy + maxR}" stroke="${BRAND}" stroke-opacity="0.08" stroke-width="2"/>`,
		`<line x1="${cx - maxR}" y1="${cy}" x2="${cx + maxR}" y2="${cy}" stroke="${BRAND}" stroke-opacity="0.08" stroke-width="2"/>`
	);

	for (let deg = 0; deg < 360; deg += 4) {
		const r = scanRadius(deg);
		const rad = (deg * Math.PI) / 180;
		const x = cx + r * Math.sin(rad);
		const y = cy - r * Math.cos(rad);
		// Brighter near the "current" beam bearing for a sense of motion
		const op = deg > 300 || deg < 30 ? 0.5 : 0.2;
		parts.push(
			`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="${BRAND}" fill-opacity="${op}"/>`
		);
	}

	parts.push(
		`<circle cx="${cx}" cy="${cy}" r="7" fill="${BRAND}" fill-opacity="0.65"/>`,
		`<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - maxR}" stroke="${BRAND}" stroke-opacity="0.35" stroke-width="3"/>`
	);

	return parts.join('\n  ');
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${BRAND}"/>

  <!-- LIDAR scope, low contrast, behind the text -->
  ${lidarScope(920, 300, 210)}

  <!-- monogram -->
  <rect x="80" y="72" width="60" height="60" rx="8" fill="${BRAND}"/>
  <text x="110" y="112" font-family="JetBrains Mono" font-size="24" font-weight="500"
        fill="#ffffff" text-anchor="middle">MB</text>

  <text x="160" y="112" font-family="JetBrains Mono" font-size="19" letter-spacing="3"
        fill="#6b7570">ALEPPO, SYRIA</text>

  <!-- name: the thing the card is actually for -->
  <text x="80" y="270" font-family="IBM Plex Sans" font-size="94" font-weight="700"
        letter-spacing="-3" fill="#0e1310">Mohammd Benni</text>

  <rect x="80" y="310" width="90" height="5" fill="${BRAND}"/>

  <text x="80" y="382" font-family="IBM Plex Sans" font-size="41" font-weight="600"
        letter-spacing="-1" fill="${BRAND}">Robotics Engineer</text>
  <text x="80" y="432" font-family="IBM Plex Sans" font-size="41" font-weight="400"
        letter-spacing="-1" fill="#5a6560">Full-stack web developer</text>

  <text x="80" y="520" font-family="JetBrains Mono" font-size="20" fill="#6b7570">ROS 2  ·  C++  ·  .NET Core  ·  FastAPI  ·  PostgreSQL</text>

  <line x1="80" y1="556" x2="1120" y2="556" stroke="#e3e6e1" stroke-width="2"/>
  <text x="80" y="592" font-family="JetBrains Mono" font-size="20" fill="${BRAND}">mohammdbenni.me</text>
  <text x="1120" y="592" font-family="JetBrains Mono" font-size="20" fill="#6b7570"
        text-anchor="end">Manara robot · Mecca</text>
</svg>`;

const resvg = new Resvg(svg, {
	fitTo: { mode: 'width', value: 1200 },
	font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'IBM Plex Sans' }
});

const png = resvg.render().asPng();
const out = join(here, '..', 'static', 'og.png');
writeFileSync(out, png);
console.log(`Wrote ${out} — ${(png.length / 1024).toFixed(1)} KB`);
