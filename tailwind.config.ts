import type { Config } from 'tailwindcss';

/**
 * Light-mode-only design system.
 * The green ramp is derived from the brand colour #04451e by mixing toward
 * white (tints) and black (shade), so every step stays on the same hue.
 */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f2f7f4',
					100: '#e5ebe7',
					200: '#ccd8d1',
					300: '#9ab4a4',
					400: '#688f78',
					500: '#376b4b',
					600: '#1a5733',
					700: '#04451e', // primary
					800: '#033718',
					900: '#022711',
					950: '#011a0b'
				},
				paper: '#fcfcfa',
				surface: '#ffffff',
				ink: '#0e1310',
				muted: '#5a6560', // 5.9:1 on paper
				faint: '#6b7570', // 4.6:1 on paper — darkened to clear AA for small text
				line: '#e3e6e1',
				signal: '#2fa35f', // dots/indicators only (3.1:1 — non-text AA)
				'signal-ink': '#177a43' // 5.2:1 — use whenever signal is text
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
			},
			fontSize: {
				// Fluid display sizes for the editorial hero
				display: ['clamp(2.75rem, 8.5vw, 7rem)', { lineHeight: '0.94', letterSpacing: '-0.04em' }],
				headline: ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
				title: ['clamp(1.35rem, 2.2vw, 1.9rem)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
				lede: ['clamp(1.05rem, 1.5vw, 1.3rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				label: ['0.7rem', { lineHeight: '1.2', letterSpacing: '0.16em' }]
			},
			maxWidth: {
				shell: '78rem',
				prose: '38rem'
			},
			spacing: {
				section: 'clamp(5rem, 11vw, 9.5rem)'
			},
			borderRadius: {
				card: '4px'
			},
			transitionTimingFunction: {
				out: 'cubic-bezier(0.16, 1, 0.3, 1)'
			},
			keyframes: {
				trace: {
					to: { strokeDashoffset: '0' }
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.25' }
				}
			},
			animation: {
				trace: 'trace 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				blink: 'blink 2.4s ease-in-out infinite'
			}
		}
	},
	plugins: []
} satisfies Config;
