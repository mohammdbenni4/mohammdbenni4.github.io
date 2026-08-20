<script lang="ts">
	/** Small stroke icon set. 24x24 grid, currentColor, no emoji. */
	let { name, size = 20, stroke = 1.5 }: { name: string; size?: number; stroke?: number } =
		$props();

	const paths: Record<string, string[]> = {
		robot: [
			'M12 2v3',
			'M6.5 8h11a2 2 0 012 2v7a2 2 0 01-2 2h-11a2 2 0 01-2-2v-7a2 2 0 012-2z',
			'M9.5 12.5v1.5',
			'M14.5 12.5v1.5',
			'M2.5 12v3',
			'M21.5 12v3'
		],
		signal: [
			'M4.5 15a6 6 0 0115 0',
			'M1.8 12.2a10 10 0 0120.4 0',
			'M9.5 18.2a3 3 0 015 0',
			'M12 21.2h.01'
		],
		server: [
			'M3.5 4.5h17v5h-17z',
			'M3.5 14.5h17v5h-17z',
			'M7 7h.01',
			'M7 17h.01',
			'M12 7h5',
			'M12 17h5'
		],
		database: [
			'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3z',
			'M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6',
			'M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6'
		],
		browser: [
			'M3 5h18v14H3z',
			'M3 9h18',
			'M6 7h.01',
			'M8.5 7h.01',
			'M11 7h.01'
		],
		scan: [
			'M3 8V5.5A2.5 2.5 0 015.5 3H8',
			'M16 3h2.5A2.5 2.5 0 0121 5.5V8',
			'M21 16v2.5a2.5 2.5 0 01-2.5 2.5H16',
			'M8 21H5.5A2.5 2.5 0 013 18.5V16',
			'M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z'
		],
		chip: [
			'M7.5 7.5h9v9h-9z',
			'M10 2.5v3',
			'M14 2.5v3',
			'M10 18.5v3',
			'M14 18.5v3',
			'M2.5 10h3',
			'M2.5 14h3',
			'M18.5 10h3',
			'M18.5 14h3'
		],
		radar: [
			'M12 12l6-4.5',
			'M12 21a9 9 0 109-9',
			'M12 17a5 5 0 105-5',
			'M12 12h.01'
		],
		briefcase: [
			'M3.5 7.5h17v12h-17z',
			'M9 7.5V5.5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5.5v2',
			'M3.5 13h17'
		],
		target: ['M12 3a9 9 0 100 18 9 9 0 000-18z', 'M12 8a4 4 0 100 8 4 4 0 000-8z', 'M12 12h.01'],
		route: [
			'M6 4.5a2 2 0 100 4 2 2 0 000-4z',
			'M18 15.5a2 2 0 100 4 2 2 0 000-4z',
			'M8 6.5h5.5A3.5 3.5 0 0117 10v0a3.5 3.5 0 01-3.5 3.5h-3A3.5 3.5 0 007 17v0a3.5 3.5 0 003.5 3.5H16'
		],
		pin: ['M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z', 'M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
		globe: [
			'M12 3a9 9 0 100 18 9 9 0 000-18z',
			'M3.2 9.5h17.6',
			'M3.2 14.5h17.6',
			'M12 3c-2.5 2.4-3.8 5.6-3.8 9s1.3 6.6 3.8 9c2.5-2.4 3.8-5.6 3.8-9S14.5 5.4 12 3z'
		],
		cap: ['M2.5 8.5L12 4.5l9.5 4-9.5 4-9.5-4z', 'M6.5 10.6V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5.4', 'M21.5 8.5v5'],
		code: ['M8.5 8L4.5 12l4 4', 'M15.5 8l4 4-4 4', 'M13.5 5.5l-3 13'],
		chat: [
			'M4 5.5h16v10H9.5L5.5 19v-3.5H4z',
			'M8 9h8',
			'M8 12h5'
		],
		scale: [
			'M12 3.5v17',
			'M5 7h14',
			'M5 7L2.5 13h5z',
			'M19 7l-2.5 6h5z',
			'M8.5 20.5h7'
		]
	};

	const d = $derived(paths[name] ?? []);
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class="shrink-0"
>
	{#each d as p, i (i)}
		<path d={p} />
	{/each}
</svg>
