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
				faint: '#6b7570', // 4.6:1 on paper, darkened to clear AA for small text
				line: '#e3e6e1',
				signal: '#2fa35f', // dots/indicators only (3.1:1, non-text AA)
				'signal-ink': '#177a43' // 5.2:1, use whenever signal is text
			},
			fontFamily: {
				// "Variable" suffix is the family name the @fontsource-variable
				// packages register. Without it the @font-face rules never match.
				sans: ['"IBM Plex Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				/*
				 * IBM Plex Sans carries no Arabic glyphs, so the Arabic summary would
				 * fall through to whatever the browser picked. This names the fallback
				 * explicitly, in preference order across the three desktop platforms,
				 * and costs nothing: every one of these is a system font.
				 */
				arabic: ['"Noto Sans Arabic"', '"Segoe UI"', 'Tahoma', 'Arial', 'sans-serif']
			},
			fontSize: {
				// Card and list copy leans on text-sm / text-xs everywhere, so raising
				// these two lifts readability across the whole site at once.
				xs: ['0.8rem', { lineHeight: '1.5' }],
				sm: ['0.95rem', { lineHeight: '1.62' }],
				// Fluid display sizes for the editorial hero
				display: ['clamp(2.4rem, 8.5vw, 7rem)', { lineHeight: '0.94', letterSpacing: '-0.04em' }],
				headline: ['clamp(2.15rem, 4.4vw, 3.9rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
				// Hero role line: clearly subordinate to the name above it
				role: ['clamp(1.3rem, 2.9vw, 2.3rem)', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
				title: ['clamp(1.5rem, 2.3vw, 2.15rem)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
				lede: ['clamp(1.12rem, 1.55vw, 1.42rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				label: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.16em' }]
			},
			maxWidth: {
				shell: '96rem',
				prose: '44rem'
			},
			spacing: {
				section: 'clamp(3.5rem, 10vw, 9.5rem)'
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
