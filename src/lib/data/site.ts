/**
 * All site copy lives here. Components are presentation only, so edit this file
 * to change what the site says.
 *
 * House style: no em dashes anywhere in copy. Use commas, colons, or a new
 * sentence instead. Hyphens inside technical terms (RS-485, full-stack, AES-128)
 * are fine and should stay.
 */

export const meta = {
	name: 'Mohammd Benni',
	/**
	 * Kept under ~55 characters so Google does not truncate it, and the name
	 * comes first because that is the query we are targeting.
	 */
	title: 'Mohammd Benni | Robotics & Full-Stack Developer',
	/**
	 * Under 160 characters. Google cuts the tail, so the Mecca deployment leads
	 * rather than trailing after a list of technologies nobody finishes reading.
	 */
	description:
		'Robotics engineer behind the Manara robot deployed in Mecca, and a freelance full-stack web developer. ROS 2, C++, .NET, FastAPI, PostgreSQL. Aleppo, Syria.',
	url: 'https://mohammdbenni.me',
	locale: 'en',
	/**
	 * Spelling variants of the name, fed to schema.org `alternateName`.
	 *
	 * "Mohammd" is the transliteration used consistently everywhere (domain,
	 * email, LinkedIn, git), so it stays the canonical form. But anyone who
	 * hears the name spoken will type "Mohammad" or "Muhammad", and Gulf
	 * recruiters will search in Arabic. Listing the variants lets Google resolve
	 * all of them to the same person instead of treating them as strangers.
	 */
	alternateNames: [
		'Mohammad Benni',
		'Muhammad Benni',
		'Mohammed Benni',
		'محمد بني',
		'محمد بنّي'
	],
	/**
	 * Google Search Console verification.
	 *
	 * NOT NEEDED: the property is verified by DNS TXT record on the Namecheap
	 * domain (a Domain property), which covers every subdomain and both
	 * protocols. That is strictly better than the meta tag, and the two are
	 * alternatives rather than cumulative. Left here only so the tag can be
	 * added if the verification method ever changes. Empty omits it entirely.
	 */
	googleSiteVerification: '',
	/**
	 * Bing Webmaster Tools, same idea. Also feeds DuckDuckGo and ChatGPT search.
	 * Easiest path is "Import from Google Search Console", which needs no tag,
	 * so this can stay empty too.
	 */
	bingSiteVerification: ''
};

export const contact = {
	email: 'mohammdbenni4@gmail.com',
	phone: '+963 998 214 250',
	phoneHref: '+963998214250',
	/** wa.me needs the number with no plus sign and no spaces. */
	whatsapp: '963998214250',
	whatsappMessage: 'Hi Mohammd, I found your site and would like to talk about a project.',
	location: 'Aleppo, Syria',
	linkedin: { label: '/in/mohammd-benni', href: 'https://linkedin.com/in/mohammd-benni' },
	github: { label: '@mohammdbenni4', href: 'https://github.com/mohammdbenni4' },
	codeforces: {
		label: '@Legends_Never_Die',
		href: 'https://codeforces.com/profile/Legends_Never_Die'
	},
	icpc: { label: 'ICPC ID', href: 'https://icpc.global/ICPCID/CFILP0WQF2R5' },
	/**
	 * Persistent researcher identifier. Carried mainly as an entity anchor: ORCID
	 * is a registered external-identifier property on Wikidata, so it is one of
	 * the few identity nodes a knowledge graph treats as authoritative.
	 */
	orcid: { label: '0009-0004-4489-412X', href: 'https://orcid.org/0009-0004-4489-412X' },
	/**
	 * Social profiles. Carried mainly for `sameAs`: Facebook and Instagram are
	 * very high authority domains that rank for a personal name with almost no
	 * effort, which is what fills the first page of a name search. They are the
	 * two platforms the profile set was missing.
	 */
	facebook: { label: 'mohammd.benni', href: 'https://www.facebook.com/mohammd.benni' },
	instagram: { label: '@mohammdbenni', href: 'https://www.instagram.com/mohammdbenni' },
	cv: '/Mohammd-Benni-CV.pdf'
};

/** Built once so every WhatsApp button stays identical. */
export const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
	contact.whatsappMessage
)}`;

/**
 * Every profile that represents the same person, fed to schema.org `sameAs`.
 *
 * This is the strongest signal available for a name query: Google resolves an
 * identity by finding the same person asserted across many independent
 * properties. Two rules for anything added here:
 *
 *   1. The profile must use the exact name string "Mohammd Benni".
 *   2. The profile must link back to mohammdbenni.me. Reciprocity is what makes
 *      it count. A one-way claim is close to worthless.
 *
 * Add new profiles as they are created. See docs/search-visibility.md for the
 * priority order (ORCID and Stack Overflow are the next two worth doing).
 */
export const profiles: string[] = [
	contact.linkedin.href,
	contact.github.href,
	contact.codeforces.href,
	contact.icpc.href,
	contact.orcid.href,
	contact.facebook.href,
	contact.instagram.href
];

/**
 * Root-relative rather than bare fragments. A bare "#about" resolves against
 * the current path, so from /writing/ it would point at /writing/#about, which
 * does not exist. Leading slash makes every link work from any route.
 */
export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Work', href: '/#work' },
	{ label: 'Systems', href: '/#systems' },
	{ label: 'Academic', href: '/#graduation' },
	{ label: 'Skills', href: '/#skills' },
	{ label: 'Experience', href: '/#experience' },
	{ label: 'Contact', href: '/#contact' }
];

export const hero = {
	/** The name is the largest element on the page. This sits under it. */
	role: 'Robotics Engineer & Full-Stack Web Developer',
	lede: 'I build systems that have to work outside the simulation: autonomous robots, the embedded layers underneath them, and the web platforms and databases that keep everything talking.'
};

/** Graduation project. Kept out of Selected work because it is academic. */
export const graduation = {
	title: 'Adaptive traffic intersection control',
	context: 'Graduation project, University of Aleppo',
	supervisor: 'Supervised by Dr. Hassan Al-Naddaf',
	body: [
		'A traffic signal that decides its own timing from a single camera instead of a fixed schedule. YOLOv11n detects vehicles, IoU tracking with EMA smoothing turns those detections into a stable queue estimate per approach, and a pressure based supervisory controller built on Max-Pressure theory picks which phase gets the green.',
		'Underneath it sits a finite state machine that owns safety: minimum green, all red clearance, and a fixed time fallback. If the vision layer lies, stalls, or dies, the intersection still behaves correctly. It runs on an ESP32 with a custom PCB driving the signal heads.'
	],
	highlights: [
		{ key: 'Perception', value: 'YOLOv11n detection with IoU tracking and EMA smoothing' },
		{ key: 'Control', value: 'Max-Pressure supervisory controller over a phase set' },
		{ key: 'Safety', value: 'FSM with minimum green, all red clearance, fixed time fallback' },
		{ key: 'Hardware', value: 'ESP32 and a custom PCB driving the signal heads' }
	],
	tags: ['YOLOv11n', 'OpenCV', 'Python', 'ESP32', 'Custom PCB', 'FSM safety layer', 'Max-Pressure']
};

export const about = {
	/**
	 * Portrait slot. Drop a square-ish photo at static/portrait.jpg and set
	 * `enabled: true`. Until then the layout renders a labelled placeholder.
	 */
	portrait: {
		/**
		 * FLIP THIS TO `true` once static/portrait.jpg exists.
		 *
		 * It drives three things at once: the About photo, `primaryImageOfPage`,
		 * and the Person entity's `image`. While it is false the schema falls back
		 * to the OG card, so the record never points at a 404. The build will fail
		 * loudly if this is true and the file is missing, which is deliberate.
		 */
		enabled: true,
		/**
		 * JPEG is the fallback and the URL the structured data points at, because
		 * every crawler understands it. WebP is served first to browsers that
		 * accept it: same 1000x1250 image at half the bytes.
		 */
		src: '/images/portrait.jpg',
		srcWebp: '/images/portrait.webp',
		width: 1000,
		height: 1250,
		/**
		 * Descriptive rather than just the name: alt text is what Google Images
		 * indexes, and "Mohammd Benni" alone tells it nothing it does not already
		 * know from the surrounding markup.
		 */
		alt: 'Mohammd Benni, robotics engineer and full-stack web developer, Aleppo, Syria'
	},
	/**
	 * `**bold**` marks the terms worth catching in a six second scan. Rendered
	 * by the tiny formatter in About.svelte, so no markdown library is needed.
	 */
	paragraphs: [
		'I am a **robotics engineer** and a **full-stack web developer**. Most of my work sits where software meets hardware: autonomous service robots running **ROS 2 Jazzy**, the embedded layer underneath them, and the web platforms that let a person actually control the thing.',
		'On the robotics side I write **C++** and **Python** against real sensors: **RPLidar** scans feeding **SLAM**, battery telemetry arriving over **RS-485** with timing that drifts, and control loops that have to stay smooth when the data is late and noisy. Getting a machine to behave in a crowd of thousands is a different problem from getting it to behave in a simulation.',
		'On the web side I build the whole stack: **.NET Core** and **FastAPI** backends, **SvelteKit** and **TypeScript** front-ends, **PostgreSQL** and **SQL Server** schemas, and the **Docker** and **Linux** deployment around them. I lean on **Domain-Driven Design** and **CQRS** where they earn their keep. Designing the data model is the part I enjoy most, because the shape of the data decides what the application is allowed to become.'
	],
	facts: [
		{ icon: 'pin', key: 'Based in', value: 'Aleppo, Syria · GMT+3' },
		{ icon: 'globe', key: 'Available for', value: 'Remote work and relocation' },
		{ icon: 'robot', key: 'Now', value: 'Robotics Engineer at SWB AI' },
		{ icon: 'briefcase', key: 'Freelance', value: 'Full-stack web development, available' },
		{ icon: 'cap', key: 'Education', value: 'BSc Electrical Engineering, University of Aleppo, 2026' },
		{ icon: 'code', key: 'Works in', value: 'C++, C#, Python, TypeScript, SQL' },
		{ icon: 'chat', key: 'Languages', value: 'Arabic (native), English (professional)' }
	]
};

export type GallerySlide = { src: string; caption: string };

/** Carousel control labels, so the Arabic page can localise them. */
export type GalleryLabels = {
	previous: string;
	next: string;
	goTo: string;
	slide: string;
	of: string;
	suffix: string;
};

export type Project = {
	title: string;
	context: string;
	status?: string;
	body: string[];
	specs?: { key: string; value: string }[];
	/** Numbered "what I actually built" list, shown above the tags. */
	contributions?: { title: string; detail: string }[];
	roles?: { role: string; detail: string }[];
	tags?: string[];
	press?: { label: string; href: string }[];
	links?: { label: string; href: string; primary?: boolean }[];
	/**
	 * Photo gallery. Drop images in static/projects/<name>/ and list them here.
	 * An empty array renders labelled placeholder slides so the carousel still
	 * works and you can see the layout before the photos exist.
	 */
	gallery?: { placeholders: number; slides: GallerySlide[] };
	accent?: string;
};

export const projects: Project[] = [
	{
		title: 'Manara Robot',
		context: 'SWB AI, deployed at the Grand Mosque in Mecca',
		accent: 'Robotics',
		gallery: {
			placeholders: 4,
			slides: [
				{
					src: '/images/cdd4adc3-6bd4-4114-8711-093e49f5c047.jpg',
					caption: 'A Manara unit answering a visitor at the Grand Mosque in Mecca'
				},
				{
					src: '/images/92825ed4-fa2c-4440-b0a7-df346c1be9b5.jpg',
					caption: 'Visitors using the touchscreen guidance interface'
				}
			]
		},
		body: [
			'Manara is an autonomous guidance robot serving visitors at the Grand Mosque in Mecca and the Prophet’s Mosque in Medina. It drives itself through some of the densest pedestrian traffic on earth, answers questions about rituals and directions in eleven languages, and has to keep doing both with nobody available to restart it.'
		],
		/** The specific engineering I own on the units. */
		contributions: [
			{
				title: 'IoT control dashboard with a live map',
				detail:
					'A web dashboard connected to the robot for managing it and watching the map build in real time. Streaming full occupancy grids was far too heavy, so it sends only the cells that actually changed since the last frame, which keeps the map updating with no perceptible lag over an ordinary network link.'
			},
			{
				title: 'Battery package in ROS 2 Jazzy and C++',
				detail:
					'Built and optimised the battery management package: reading the BMS over RS-485, framing it correctly against hardware timing, and publishing clean state of charge and health telemetry that the rest of the stack can trust.'
			},
			{
				title: 'SLAM tuning for a smoother path',
				detail:
					'Optimised the SLAM configuration so the pose estimate stops jittering, which lets the controller follow a genuinely smooth path instead of correcting against its own noise. The difference is obvious to anyone standing next to it.'
			},
			{
				title: 'Sensor integration and embedded bring-up',
				detail:
					'Brought the compute and sensing up on Orange Pi 5 Max and Raspberry Pi: RPLidar, the ultrasonic array, and the serial devices, then kept them stable across power cycles and firmware changes.'
			}
		],
		specs: [
			{ key: 'Stack', value: 'ROS 2 Jazzy, C++, Python' },
			{ key: 'Compute', value: 'Orange Pi 5 Max, Raspberry Pi' },
			{
				key: 'Sensing & bus',
				value: 'RPLidar C1, ultrasonic array, BMS telemetry over RS-485 with hardware timed framing'
			}
		],
		press: [
			{
				label: 'Interesting Engineering',
				href: 'https://interestingengineering.com/innovation/saudi-arabia-unveils-ai-robot-at-mecca'
			},
			{
				label: 'Robotics & Automation News',
				href: 'https://roboticsandautomationnews.com/2025/05/26/saudi-arabia-integrates-robots-into-pilgrimage-experience/91184/'
			},
			{ label: 'Saudi Press Agency', href: 'https://www.spa.gov.sa/en/N2275990' }
		]
	},
	{
		title: 'swbai.com',
		context: 'SWB AI, the company website and product platform',
		accent: 'Full-stack web',
		status: 'Live',
		body: [
			'The public website for SWB AI, the company whose robots I build. I developed it fully, front to back: a SvelteKit front-end, a Node.js API behind it, and PostgreSQL underneath.',
			'It is the company’s shop window for an international audience, so it carries the robot platform, the developer SDK, and the custom PCB and 3D printing services. It runs in English and Arabic, which meant building the layout to survive a direction flip rather than bolting translation on at the end.'
		],
		contributions: [
			{
				title: 'SvelteKit front-end, server rendered',
				detail:
					'Server rendered pages so the content is in the HTML for crawlers and for visitors on slow connections, with the interactive parts hydrating after.'
			},
			{
				title: 'Node.js API and PostgreSQL',
				detail:
					'A Node.js backend over a PostgreSQL schema designed for the content the marketing side actually edits, rather than a generic CMS shape nobody fits into.'
			},
			{
				title: 'Bilingual English and Arabic with RTL',
				detail:
					'Every layout works in both directions. RTL is a layout problem, not a translation problem, so the components were built for it from the start.'
			},
			{
				title: 'Built for the connections it is viewed on',
				detail:
					'Much of the audience is on Gulf and MENA mobile networks, so images are sized and lazy loaded, and the critical path stays small.'
			}
		],
		links: [{ label: 'Visit swbai.com', href: 'https://www.swbai.com', primary: true }],
		tags: ['SvelteKit', 'Node.js', 'PostgreSQL', 'SSR', 'i18n / RTL', 'Responsive', 'SEO']
	},
	{
		title: 'ACPC, Aleppo Collegiate Programming Contest',
		context: 'Seven years across every side of the contest',
		accent: 'Competitive programming',
		links: [{ label: 'ICPC ID: CFILP0WQF2R5', href: 'https://icpc.global/ICPCID/CFILP0WQF2R5' }],
		body: [
			'I have been involved in competitive programming from every angle: as a contestant, then as a coach, and now as the person who builds and runs the machinery a contest depends on.',
			'On the technical side that means a PC² 9.10 judging cluster, auto judge configuration, the live scoreboard, the balloon runner, and the Resolver for the closing ceremony. I also wrote the toolkit that imports problems straight from Polygon into PC², tests, validators, time limits and all, which turned a full day of manual setup into a single command.'
		],
		roles: [
			{
				role: 'Contestant',
				detail: 'Syrian Collegiate Programming Contest and the ICPC regional, competing since university.'
			},
			{
				role: 'Coach',
				detail: 'Training teams at Aleppo University since 2022 through workshops, one to one sessions, and a structured 200 problem roadmap.'
			},
			{
				role: 'Technical team member',
				detail: 'Judging cluster, auto judges, scoreboard, balloons, and Resolver for ACPC.'
			},
			{
				role: 'Problem tester',
				detail: 'Validating problem statements, test data, and reference solutions before contest day.'
			},
			{
				role: 'Judge',
				detail: 'Served as a judge for the Idleb Collegiate Programming Contest.'
			}
		],
		tags: ['PC² 9.10', 'Bash', 'Python', 'Polygon', 'SvelteKit', 'Linux']
	}
];

export const smallerBuilds = [
	{
		domain: 'PLC',
		icon: 'chip',
		text: 'Delta DVP ladder programs: sorting line and sequential conveyor control'
	},
	{ domain: 'Backend', icon: 'server', text: 'Student tracking API: FastAPI, PostgreSQL, idempotent upserts' },
	{ domain: 'Robotics', icon: 'radar', text: 'ROS 2 occupancy grid viewer rendering a live cost map at 10 Hz' },
	{ domain: 'Freelance', icon: 'briefcase', text: 'Product catalogues with QR generation and usage analytics' }
];

/**
 * Deep dive cards. Problem, Approach, Trade-off is deliberate: it shows
 * engineering judgement rather than a list of technologies.
 */
export const systemDesign = [
	{
		title: 'Keeping writes honest and reads fast',
		scope: 'Elkood, .NET Core with DDD and CQRS',
		problem:
			'A backend where the same models served both complex business rules and high traffic list endpoints. Invariants leaked into query paths, and read performance was hostage to the write model.',
		approach: [
			'Bounded contexts with aggregates that own their invariants, so nothing mutates state except through the domain.',
			'Commands write through the domain. Queries bypass it entirely and read purpose built projections.',
			'Hot paths profiled and reworked: N+1 query elimination, targeted indexes, and caching where the data tolerated staleness.',
			'API contracts documented and versioned so the front-end teams could move without waiting on us.'
		],
		tradeoff:
			'CQRS costs you a second model to keep in sync, and it is genuinely the wrong choice for simple CRUD. It paid for itself here because the read and write shapes had already diverged, so we were paying the cost without getting the benefit.'
	},
	{
		title: 'Designing the schema before the application',
		scope: 'Freelance, student tracking platform · PostgreSQL',
		problem:
			'Sync jobs and flaky mobile connections meant the same write could arrive twice, and reporting queries that were fine at a hundred rows fell over at a hundred thousand.',
		approach: [
			'Idempotent upserts keyed on a natural business key, so a retried sync converges instead of duplicating.',
			'Indexes chosen from the query shapes that actually run, then verified against the plan rather than guessed from column names.',
			'Normalised where correctness matters, denormalised deliberately and documented where read latency mattered more.',
			'Migrations versioned and reversible, with constraints enforced in the database and not only in application code.'
		],
		tradeoff:
			'Constraints in the database make some deploys harder and some writes slower. I take that trade every time, because application code gets rewritten and the data outlives it.'
	}
];

export const skillGroups = [
	{
		title: 'Robotics & embedded',
		icon: 'robot',
		items: [
			'ROS 2 Jazzy: nodes, topics, services, TF',
			'Autonomous navigation and sensor fusion',
			'ESP32, AVR, bare metal firmware',
			'Orange Pi 5 Max, Raspberry Pi bring-up',
			'RPLidar C1, ultrasonic arrays, BMS',
			'PCB design and hardware debugging'
		]
	},
	{
		title: 'IoT & connected systems',
		icon: 'signal',
		items: [
			'RS-485, UART, I²C, SPI field buses',
			'Hardware timed protocol framing',
			'Telemetry ingestion and device monitoring',
			'Edge inference on constrained hardware',
			'Sensor networks and data acquisition',
			'Battery management and power telemetry'
		]
	},
	{
		title: 'Backend & system design',
		icon: 'server',
		items: [
			'C# and .NET Core, Python and FastAPI',
			'Domain-Driven Design, CQRS',
			'REST API design, versioning, documentation',
			'JWT auth, key issuance and rotation',
			'Caching and hot path optimisation',
			'Docker, Linux, Git, CI/CD'
		]
	},
	{
		title: 'Databases & data modelling',
		icon: 'database',
		items: [
			'PostgreSQL, SQL Server',
			'Schema design and normalisation',
			'Indexing driven by real query shapes',
			'Query plan analysis and tuning',
			'Idempotent upserts, versioned migrations',
			'Transactions, concurrency, constraints'
		]
	},
	{
		title: 'Web & front-end',
		icon: 'browser',
		items: [
			'SvelteKit, TypeScript',
			'Tailwind CSS, design systems',
			'Capacitor for Android delivery',
			'Accessible, responsive interfaces',
			'Performance and Core Web Vitals',
			'Static and server rendered deployment'
		]
	},
	{
		title: 'Vision & algorithms',
		icon: 'scan',
		items: [
			'YOLO v8 and v11, edge inference tuning',
			'OpenCV, IoU tracking, EMA smoothing',
			'Data structures and algorithms',
			'Graph theory, dynamic programming',
			'Complexity analysis and optimisation',
			'Competitive programming, seven years'
		]
	}
];

export type ExperienceItem = {
	period: string;
	role: string;
	org: string;
	/** Rendered as an outbound link on the org name when present. */
	orgUrl?: string;
	place: string;
	current?: boolean;
	education?: boolean;
	points: string[];
	tags?: string[];
};

export const experience: ExperienceItem[] = [
	{
		period: 'Since Jan 2026',
		role: 'Robotics Engineer',
		org: 'SWB AI',
		orgUrl: 'https://www.swbai.com',
		place: 'Aleppo, Syria',
		current: true,
		points: [
			'Build and program autonomous service robots on ROS 2 Jazzy, including the Manara units deployed in Mecca and Medina.',
			'Wrote the C++ and Python bridge that reads battery management and ultrasonic data over RS-485 into ROS 2 topics.',
			'Implemented and debugged serial protocols and hardware timing for reliable battery telemetry framing.',
			'Handled embedded bring-up and optimisation on Orange Pi 5 Max and Raspberry Pi with RPLidar.'
		]
	},
	{
		period: 'Ongoing',
		role: 'Full-Stack Web Developer',
		org: 'Freelance',
		place: 'Remote',
		current: true,
		points: [
			'Design and ship complete web products: API, database, front-end, and deployment.',
			'Backends in .NET Core and FastAPI, front-ends in SvelteKit and TypeScript.',
			'PostgreSQL and SQL Server schema design, indexing, and migration strategy.',
			'Available for new projects. Email or WhatsApp is the fastest way to start a conversation.'
		]
	},
	{
		period: 'Jun 2023 to Aug 2024',
		role: 'Backend Developer & Database Designer',
		org: 'Elkood',
		orgUrl: 'https://elkood.com',
		place: 'Aleppo, Syria',
		points: [
			'Designed and maintained .NET Core services using Domain-Driven Design and CQRS.',
			'Designed and analysed the relational schemas behind those services: normalisation, indexing strategy, and migration planning.',
			'Built and documented APIs for front-end teams, improving interoperability across products.',
			'Cut response times on hot paths by reworking queries, indexing, and caching.',
			'Reviewed code across the backend team and enforced architectural conventions.'
		]
	},
	{
		period: 'Since Jan 2022',
		role: 'Problem Solving Coach',
		org: 'Aleppo University',
		place: 'Aleppo, Syria',
		current: true,
		points: [
			'Train students for ICPC style contests through workshops, one to one sessions, and a structured 200 problem roadmap.',
			'Technical team member for ACPC, working on the judging system and contest day infrastructure.',
			'Designed assessment tools to measure progress across cohorts.'
		]
	},
	{
		period: '2019 to 2026',
		role: 'BSc Electrical Engineering',
		org: 'University of Aleppo',
		place: 'Aleppo, Syria',
		education: true,
		points: [
			'Graduated in 2026 from the Department of Automatic Control and Industrial Automation, which is where the control theory the robotics work rests on comes from.',
			'Graduation project: adaptive traffic intersection control, written up in its own section above.'
		]
	}
];

export const competitive = [
	{
		title: 'Contest infrastructure',
		handle: 'ACPC · ICPC affiliated',
		body: 'On the technical team I work on the machinery a contest depends on: a PC² 9.10 judging cluster, auto judge configuration, the live scoreboard, the balloon runner, and the Resolver for the closing ceremony. I also wrote the toolkit that imports problems straight from Polygon into PC², tests and validators and time limits included, which turned a full day of manual setup into a single command.'
	},
	{
		title: 'Coach, judge, and contestant',
		handle: '@Legends_Never_Die',
		body: 'I coach teams at Aleppo University through workshops, one to one sessions, and a structured 200 problem roadmap. I test problem sets before contest day and have judged the Idleb Collegiate Programming Contest. Seven years of competing is where my debugging instincts come from: the bug is almost always in the assumption you did not test.'
	}
];

export const contactSection = {
	heading: 'Got a robot, an embedded system, or a web platform that needs to work?',
	body: 'I am a robotics engineer by day and I take on freelance full-stack web work. WhatsApp is the fastest way to reach me, and I reply to every email.'
};

