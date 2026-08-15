/**
 * All site copy lives here. Components are presentation only — edit this file
 * to change what the site says.
 */

export const meta = {
	name: 'Mohammd Benni',
	title: 'Mohammd Benni — Robotics & Automation Engineer, Full-Stack Developer',
	description:
		'Robotics and automation engineer and full-stack developer in Aleppo, Syria. ROS 2, embedded systems and IoT, computer vision, and .NET/FastAPI backends with a focus on system and database design. Contributor to the Manara robot deployed at the Grand Mosque in Mecca.',
	url: 'https://mohammdbenni.me',
	locale: 'en',
	/**
	 * Google Search Console verification.
	 * Search Console → Add property → URL prefix → "HTML tag" method gives you a
	 * meta tag; paste ONLY the content="..." value here, then rebuild and push.
	 * Leave empty to omit the tag entirely.
	 */
	googleSiteVerification: '',
	/** Bing Webmaster Tools, same idea (also feeds DuckDuckGo). */
	bingSiteVerification: ''
};

export const contact = {
	email: 'mohammdbenni4@gmail.com',
	phone: '+963 998 214 250',
	phoneHref: '+963998214250',
	location: 'Aleppo, Syria',
	linkedin: { label: '/in/mohammd-benni', href: 'https://linkedin.com/in/mohammd-benni' },
	github: { label: '@mohammdbenni4', href: 'https://github.com/mohammdbenni4' },
	codeforces: {
		label: '@Legends_Never_Die',
		href: 'https://codeforces.com/profile/Legends_Never_Die'
	},
	cv: '/Mohammd-Benni-CV.pdf'
};

export const nav = [
	{ label: 'Work', href: '#work' },
	{ label: 'Systems', href: '#systems' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' }
];

export const hero = {
	status: 'Open to robotics & full-stack roles',
	headline: ['Robotics &', 'Automation', 'Engineer.'],
	subrole: 'Full-stack developer',
	lede: 'I build systems that have to work outside the simulation — autonomous robots, traffic controllers, and the backends and databases behind them.',
	// Plotted as an annotated step response in the hero graphic.
	timeline: [
		{ year: '2019', event: 'University of Aleppo' },
		{ year: '2022', event: 'Coaching + ICPC' },
		{ year: '2023', event: '.NET Core backend' },
		{ year: '2026', event: 'ROS 2 · Manara' }
	]
};

export const stats = [
	{ value: 'Mecca', label: 'Manara robot deployed', note: 'and the Prophet’s Mosque, Medina' },
	{ value: '11', label: 'Languages served', note: 'by the units I help build' },
	{ value: '7 yrs', label: 'Competitive programming', note: 'competitor and coach' },
	{ value: '3', label: 'Production stacks', note: 'ROS 2 · .NET Core · FastAPI' }
];

export const about = {
	paragraphs: [
		"I'm a fifth-year Control and Automation Engineering student at the University of Aleppo and a robotics engineer at SWB Technical Development, where I work on autonomous service robots running ROS 2.",
		'Most of my work sits where software meets hardware: reading a battery management system over RS-485 and getting the timing right, putting a detection model on a microcontroller, or making a control loop behave when the sensor data is late and noisy.',
		"I'm also a full-stack developer. I spent a year building .NET Core services at Elkood with Domain-Driven Design and CQRS, and I've shipped a complete product alone — FastAPI, SvelteKit, PostgreSQL, an Android client, and an encrypted video pipeline. Designing the schema and the system around it is the part I enjoy most: the shape of the data decides what the application is allowed to become.",
		"I've also been coaching competitive programming at Aleppo University since 2022, and I run the technical side of ACPC, our ICPC-affiliated local contest. Teaching is the fastest way I've found to notice what I actually understand."
	],
	facts: [
		{ key: 'Based in', value: 'Aleppo, Syria' },
		{ key: 'Studying', value: 'BSc Electrical Eng. — Automatic Control & Industrial Automation' },
		{ key: 'Now', value: 'Robotics Engineer, SWB Technical Development' },
		{ key: 'Works in', value: 'C++, C#, Python, TypeScript, SQL' },
		{ key: 'Languages', value: 'Arabic (native), English (professional)' }
	]
};

export type Project = {
	title: string;
	context: string;
	status?: string;
	body: string[];
	specs?: { key: string; value: string }[];
	tags?: string[];
	press?: { label: string; href: string }[];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Manara Robot',
		context: 'SWB Technical Development · Grand Mosque, Mecca',
		status: 'Deployed',
		featured: true,
		body: [
			"An autonomous guidance robot that answers visitors' questions at the Grand Mosque in Mecca and the Prophet's Mosque in Medina, in eleven languages. I work on the manufacturing and core programming of the units: the ROS 2 Jazzy stack, a custom C++/Python bridge that pulls telemetry from the battery management system over RS-485, and sensor integration across RPLidar, ultrasonics, and the rest of the sensor set.",
			'The hard part is rarely the algorithm. It is serial timing that drifts, a battery frame that arrives malformed once an hour, and a machine that has to keep working in a crowd of thousands with no one available to restart it.'
		],
		specs: [
			{ key: 'Stack', value: 'ROS 2 Jazzy, C++, Python' },
			{ key: 'Compute', value: 'Orange Pi 5 Max, Raspberry Pi' },
			{ key: 'Sensing', value: 'RPLidar C1, ultrasonic array, BMS telemetry' },
			{ key: 'Bus', value: 'RS-485 serial, hardware-timed framing' },
			{ key: 'Role', value: 'Robotics engineer — sensor bridge, embedded bring-up' }
		],
		press: [
			{
				label: 'Interesting Engineering',
				href: 'https://interestingengineering.com/'
			},
			{ label: 'Robotics & Automation News', href: 'https://roboticsandautomationnews.com/' },
			{ label: 'Saudi Press Agency', href: 'https://www.spa.gov.sa/en' }
		]
	},
	{
		title: 'Adaptive traffic intersection control',
		context: 'Graduation project · University of Aleppo',
		featured: true,
		body: [
			'A traffic signal that decides its own timing from a single camera. YOLOv11n detects vehicles, IoU tracking with EMA smoothing turns that into a stable queue estimate per approach, and a pressure-based supervisory controller — built on Max-Pressure theory — picks which phase gets the green.',
			'Underneath it sits a finite state machine that owns safety: minimum green, all-red clearance, and a fixed-time fallback. If the vision layer lies, stalls, or dies, the intersection still behaves. It runs on an ESP32 with a custom PCB driving the signal heads.'
		],
		tags: [
			'YOLOv11n',
			'OpenCV',
			'Python',
			'ESP32',
			'Custom PCB',
			'FSM safety layer',
			'Max-Pressure control'
		]
	},
	{
		title: 'Access Gate',
		context: 'Product · full stack, solo',
		body: [
			'A video course platform for instructors who lose income to leaked recordings. FastAPI backend, SvelteKit web app, and an Android client wrapped with Capacitor. Video is served as AES-128 encrypted HLS from Cloudflare R2, keys are issued per session, and on Android the content key is unwrapped by an RSA key that never leaves the TrustZone-backed keystore.',
			'Access codes are generated through a Telegram bot, so an instructor can sell and enroll a student from their phone.'
		],
		tags: [
			'FastAPI',
			'SvelteKit',
			'Capacitor',
			'PostgreSQL',
			'AES-128 HLS',
			'Cloudflare R2',
			'Android Keystore',
			'JWT'
		]
	},
	{
		title: 'ACPC — Aleppo Collegiate Programming Contest',
		context: 'Contest infrastructure · technical lead',
		body: [
			'I run the technical side of our ICPC-affiliated contest: a PC² 9.10 judging cluster, auto-judge configuration, live scoreboard, balloon runner, and the Resolver for the closing ceremony.',
			'I also wrote the toolkit that imports problems straight from Polygon into PC² — tests, validators, time limits, and all — which turned a full day of manual setup into a single command.'
		],
		tags: ['PC² 9.10', 'Bash', 'Python', 'Polygon', 'SvelteKit', 'Linux']
	},
	{
		title: 'Graphify — Codeforces skill analytics',
		context: 'Tooling · coaching',
		body: [
			"A coaching tool that reads a competitor's full Codeforces history and turns it into something actionable: per-topic mastery scores, a tag graph of which skills unlock which, and an SM-2 spaced repetition queue that decides what they should solve next week.",
			'I built it because "solve more problems" is bad advice, and I wanted my students to get a specific answer instead.'
		],
		tags: ['Python', 'Codeforces API', 'NetworkX', 'SM-2']
	}
];

export const smallerBuilds = [
	{
		domain: 'PLC',
		text: 'Delta DVP ladder programs: sorting line and sequential conveyor control'
	},
	{ domain: 'Backend', text: 'Student tracking API: FastAPI, PostgreSQL, idempotent upserts' },
	{ domain: 'Robotics', text: 'ROS 2 occupancy-grid viewer rendering a live cost map at 10 Hz' },
	{ domain: 'Freelance', text: 'Product catalogues with QR generation and usage analytics' }
];

/**
 * Deep-dive cards. Problem / Approach / Trade-off is deliberate — it shows
 * engineering judgement rather than a list of technologies.
 */
export const systemDesign = [
	{
		title: 'Protecting video without paying for DRM',
		scope: 'Access Gate · system design',
		problem:
			'Instructors were losing income to recordings that leaked the day after class. Commercial DRM was priced far out of reach for a small platform.',
		approach: [
			'Video is transcoded to HLS and every segment is encrypted AES-128 at rest on Cloudflare R2.',
			'Keys are issued per session, short-lived, and bound to a JWT — a key that leaks is worthless within minutes.',
			'On Android the content key arrives wrapped and is unwrapped by an RSA private key generated inside the TrustZone-backed keystore, so the plaintext key never sits in memory the app can dump.',
			'Enrollment runs through a Telegram bot that mints access codes, so an instructor can sell a seat from their phone.'
		],
		tradeoff:
			'Encrypted HLS is not DRM and I do not pretend otherwise — a determined attacker with a rooted device can still capture output. It raises the cost of extraction from "one click" to "real work", at zero licensing cost and with full control of the pipeline. For this market that was the right trade.'
	},
	{
		title: 'Keeping writes honest and reads fast',
		scope: 'Elkood · .NET Core, DDD & CQRS',
		problem:
			'A backend where the same models served both complex business rules and high-traffic list endpoints. Invariants leaked into query paths, and read performance was hostage to the write model.',
		approach: [
			'Bounded contexts with aggregates that own their invariants — nothing mutates state except through the domain.',
			'Commands write through the domain; queries bypass it entirely and read purpose-built projections.',
			'Hot paths profiled and reworked: N+1 query elimination, targeted indexes, and caching where the data tolerated staleness.',
			'API contracts documented and versioned so the front-end teams could move without waiting on us.'
		],
		tradeoff:
			'CQRS costs you a second model to keep in sync, and it is genuinely the wrong choice for simple CRUD. It paid for itself here because the read and write shapes had already diverged — we were paying the cost without getting the benefit.'
	},
	{
		title: 'Designing the schema before the application',
		scope: 'Data modelling · PostgreSQL & SQL Server',
		problem:
			'Sync jobs and flaky mobile connections meant the same write could arrive twice, and reporting queries that were fine at a hundred rows fell over at a hundred thousand.',
		approach: [
			'Idempotent upserts keyed on a natural business key, so a retried sync converges instead of duplicating.',
			'Indexes chosen from the query shapes that actually run, then verified against the plan — not guessed from column names.',
			'Normalised where correctness matters, denormalised deliberately and documented where read latency mattered more.',
			'Migrations versioned and reversible; constraints enforced in the database, not only in application code.'
		],
		tradeoff:
			'Constraints in the database make some deploys harder and some writes slower. I take that trade every time — application code gets rewritten, and the data outlives it.'
	}
];

export const skillGroups = [
	{
		title: 'Robotics & embedded',
		items: [
			'ROS 2 Jazzy — nodes, topics, services, TF',
			'Autonomous navigation & sensor fusion',
			'ESP32, AVR, bare-metal firmware',
			'Orange Pi 5 Max, Raspberry Pi bring-up',
			'RPLidar C1, ultrasonic arrays, BMS',
			'PCB design & hardware debugging'
		]
	},
	{
		title: 'IoT & connected systems',
		items: [
			'RS-485, UART, I²C, SPI field buses',
			'Hardware-timed protocol framing',
			'Telemetry ingestion & device monitoring',
			'Edge inference on constrained hardware',
			'Sensor networks & data acquisition',
			'Battery management & power telemetry'
		]
	},
	{
		title: 'Control & automation',
		items: [
			'PID & state-space control',
			'Robust control, LFT, system identification',
			'Supervisory & Max-Pressure control',
			'Finite state machines as safety layers',
			'Delta DVP, S7-200 PLC, ladder logic',
			'MATLAB, Simulink, SCADA basics'
		]
	},
	{
		title: 'Backend & system design',
		items: [
			'C# / .NET Core, Python / FastAPI',
			'Domain-Driven Design, CQRS',
			'REST API design, versioning, docs',
			'JWT auth, key issuance & rotation',
			'Caching & hot-path optimisation',
			'Docker, Linux, Git, CI/CD'
		]
	},
	{
		title: 'Databases & data modelling',
		items: [
			'PostgreSQL, SQL Server',
			'Schema design & normalisation',
			'Indexing driven by real query shapes',
			'Query plan analysis & tuning',
			'Idempotent upserts, versioned migrations',
			'Transactions, concurrency, constraints'
		]
	},
	{
		title: 'Web & front-end',
		items: [
			'SvelteKit, TypeScript',
			'Tailwind CSS, design systems',
			'Capacitor for Android delivery',
			'HLS media pipelines',
			'Accessible, responsive interfaces',
			'Performance & Core Web Vitals'
		]
	},
	{
		title: 'Vision & algorithms',
		items: [
			'YOLO v8 / v11, edge inference tuning',
			'OpenCV, IoU tracking, EMA smoothing',
			'Data structures & algorithms',
			'Graph theory, dynamic programming',
			'Complexity analysis & optimisation',
			'Competitive programming (7 years)'
		]
	}
];

export const experience = [
	{
		period: 'Jan 2026 — Present',
		role: 'Robotics Engineer',
		org: 'SWB Technical Development',
		place: 'Aleppo, Syria',
		current: true,
		points: [
			'Build and program autonomous service robots on ROS 2 Jazzy, including the Manara units deployed in Mecca and Medina.',
			'Wrote the C++/Python bridge that reads battery management and ultrasonic data over RS-485 into ROS 2 topics.',
			'Implemented and debugged serial protocols and hardware timing for reliable battery telemetry framing.',
			'Handled embedded bring-up and optimisation on Orange Pi 5 Max and Raspberry Pi with RPLidar.'
		]
	},
	{
		period: 'Jun 2023 — Aug 2024',
		role: 'Backend Developer',
		org: 'Elkood',
		place: 'Aleppo, Syria',
		points: [
			'Designed and maintained .NET Core services using Domain-Driven Design and CQRS.',
			'Built and documented APIs for front-end teams, improving interoperability across products.',
			'Cut response times on hot paths by reworking queries, indexing, and caching.',
			'Reviewed code across the backend team and enforced architectural conventions.'
		]
	},
	{
		period: 'Jan 2022 — Present',
		role: 'Problem Solving Coach',
		org: 'Aleppo University',
		place: 'Aleppo, Syria',
		current: true,
		points: [
			'Train students for ICPC-style contests through workshops, one-on-one sessions, and a structured 200-problem roadmap.',
			'Technical lead for ACPC, running the judging system and contest-day infrastructure.',
			'Designed assessment tools to measure progress across cohorts.'
		]
	},
	{
		period: '2019 — Present',
		role: 'BSc Electrical Engineering',
		org: 'University of Aleppo',
		place: 'Automatic Control & Industrial Automation',
		education: true,
		points: [
			'Fifth year, Department of Automatic Control and Industrial Automation.',
			'Graduation project: adaptive traffic signal control using computer vision, supervised by Dr. Hassan Al-Naddaf.'
		]
	}
];

export const competitive = [
	{
		title: 'Competitor',
		handle: '@Legends_Never_Die',
		body: 'Active on Codeforces since university, and a participant in the Syrian Collegiate Programming Contest and the ICPC regional. Seven years of this is where my debugging instincts come from — you learn quickly that the bug is almost always in the assumption you did not test.'
	},
	{
		title: 'Coach',
		handle: 'Training the next teams',
		body: 'I coach students at Aleppo University and lead the technical team behind ACPC, our ICPC-affiliated local contest. That covers everything from the training roadmap and problem selection to the judge servers, validators, and scoreboard that make contest day run.'
	}
];

export const contactSection = {
	heading: 'Got a robot, a controller, or a backend that needs to work?',
	body: "I'm open to robotics and full-stack roles, and I take on freelance work. Email is the fastest way to reach me — I reply to everything."
};
