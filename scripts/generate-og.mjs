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

// Same underdamped step response as the hero graphic, so the card and the
// site share a visual signature.
function stepPath(x0, y0, w, h) {
	const zeta = 0.28;
	const wn = 5.4;
	const wd = wn * Math.sqrt(1 - zeta * zeta);
	const steps = 200;
	const tMax = 2.2;
	const pts = [];
	for (let i = 0; i <= steps; i++) {
		const t = (i / steps) * tMax;
		const y =
			1 -
			Math.exp(-zeta * wn * t) *
				(Math.cos(wd * t) + (zeta / Math.sqrt(1 - zeta * zeta)) * Math.sin(wd * t));
		pts.push(`${(x0 + (i / steps) * w).toFixed(1)},${(y0 + h - y * h).toFixed(1)}`);
	}
	return `M ${pts.join(' L ')}`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${BRAND}"/>

  <!-- step response, low contrast, behind the text -->
  <path d="${stepPath(620, 150, 520, 300)}" fill="none" stroke="${BRAND}" stroke-opacity="0.16"
        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="620" y1="150" x2="1140" y2="150" stroke="${BRAND}" stroke-opacity="0.18"
        stroke-width="2" stroke-dasharray="6 8"/>

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
        letter-spacing="-1" fill="${BRAND}">Robotics &amp; Automation Engineer</text>
  <text x="80" y="432" font-family="IBM Plex Sans" font-size="41" font-weight="400"
        letter-spacing="-1" fill="#5a6560">Full-stack developer</text>

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
