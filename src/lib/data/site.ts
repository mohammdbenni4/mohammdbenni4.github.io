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
	title: 'Mohammd Benni | Robotics Engineer & Full-Stack Web Developer',
	description:
		'Robotics engineer in Aleppo, Syria, building autonomous service robots on ROS 2, and a freelance full-stack web developer. Embedded systems, IoT, computer vision, and backends with a focus on system and database design. Contributor to the Manara robot deployed at the Grand Mosque in Mecca.',
	url: 'https://mohammdbenni.me',
	locale: 'en',
	/**
	 * Google Search Console verification.
	 * Search Console, Add property, URL prefix, "HTML tag" method gives you a
	 * meta tag. Paste ONLY the content="..." value here, then rebuild and push.
	 * Leave empty to omit the tag entirely.
	 */
	googleSiteVerification: '',
	/** Bing Webmaster Tools, same idea. Also feeds DuckDuckGo. */
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
	cv: '/Mohammd-Benni-CV.pdf'
};

/** Built once so every WhatsApp button stays identical. */
export const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
	contact.whatsappMessage
)}`;

export const nav = [
	{ label: 'Work', href: '#work' },
	{ label: 'Systems', href: '#systems' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' }
];

export const hero = {
	status: 'Robotics engineer at SWB, open to freelance web work',
	headline: ['Robotics', 'Engineer.'],
	subrole: 'Full-stack web developer, freelance',
	lede: 'I build systems that have to work outside the simulation: autonomous robots, the embedded layers underneath them, and the web platforms and databases that keep everything talking.'
};

export const stats = [
	{ value: 'Mecca', label: 'Manara robot deployed', note: 'and the Prophet’s Mosque, Medina' },
	{ value: '11', label: 'Languages served', note: 'by the units I help build' },
	{ value: '7 yrs', label: 'Competitive programming', note: 'contestant, coach, and judge' },
	{ value: 'ROS 2', label: 'Daily driver', note: 'Jazzy, C++ and Python' }
];

export const about = {
	/**
	 * Portrait slot. Drop a square-ish photo at static/portrait.jpg and set
	 * `enabled: true`. Until then the layout renders a labelled placeholder.
	 */
	portrait: {
		enabled: false,
		src: '/portrait.jpg',
		alt: 'Mohammd Benni'
	},
	paragraphs: [
		'I am a robotics engineer at SWB Technical Development, where I build autonomous service robots running ROS 2, and a fifth year engineering student at the University of Aleppo.',
		'Most of my work sits where software meets hardware: reading a battery management system over RS-485 and getting the timing right, putting a detection model on a microcontroller, or making a control loop behave when the sensor data arrives late and noisy.',
		'Alongside that I work as a freelance full-stack web developer. I spent a year building .NET Core services at Elkood with Domain-Driven Design and CQRS, and I now design and ship complete products on my own: FastAPI and .NET backends, SvelteKit front-ends, PostgreSQL schemas, and the deployment around them. Designing the data model is the part I enjoy most, because the shape of the data decides what the application is allowed to become.',
		'I have also been coaching competitive programming at Aleppo University since 2022, and I run the technical side of ACPC, our ICPC affiliated local contest. Teaching is the fastest way I have found to notice what I actually understand.'
	],
	facts: [
		{ key: 'Based in', value: 'Aleppo, Syria' },
		{ key: 'Now', value: 'Robotics Engineer, SWB Technical Development' },
		{ key: 'Freelance', value: 'Full-stack web development, available' },
		{ key: 'Studying', value: 'BSc Electrical Engineering, University of Aleppo' },
		{ key: 'Works in', value: 'C++, C#, Python, TypeScript, SQL' },
		{ key: 'Languages', value: 'Arabic (native), English (professional)' }
	]
};

export type GallerySlide = { src: string; caption: string };

export type Project = {
	title: string;
	context: string;
	status?: string;
	body: string[];
	specs?: { key: string; value: string }[];
	roles?: { role: string; detail: string }[];
	tags?: string[];
	press?: { label: string; href: string }[];
	links?: { label: string; href: string }[];
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
		context: 'SWB Technical Development, deployed at the Grand Mosque in Mecca',
		status: 'Deployed',
		accent: 'Robotics',
		gallery: {
			placeholders: 4,
			slides: []
		},
		body: [
			'An autonomous guidance robot that answers visitors questions at the Grand Mosque in Mecca and the Prophet’s Mosque in Medina, in eleven languages. I work on the manufacturing and core programming of the units: the ROS 2 Jazzy stack, a custom C++ and Python bridge that pulls telemetry from the battery management system over RS-485, and sensor integration across RPLidar, ultrasonics, and the rest of the sensor set.',
			'The hard part is rarely the algorithm. It is serial timing that drifts, a battery frame that arrives malformed once an hour, and a machine that has to keep working in a crowd of thousands with nobody available to restart it.'
		],
		specs: [
			{ key: 'Stack', value: 'ROS 2 Jazzy, C++, Python' },
			{ key: 'Compute', value: 'Orange Pi 5 Max, Raspberry Pi' },
			{ key: 'Sensing', value: 'RPLidar C1, ultrasonic array, BMS telemetry' },
			{ key: 'Bus', value: 'RS-485 serial, hardware timed framing' },
			{ key: 'Role', value: 'Robotics engineer, sensor bridge and embedded bring-up' }
		],
		press: [
			{ label: 'Interesting Engineering', href: 'https://interestingengineering.com/' },
			{ label: 'Robotics & Automation News', href: 'https://roboticsandautomationnews.com/' },
			{ label: 'Saudi Press Agency', href: 'https://www.spa.gov.sa/en' }
		]
	},
	{
		title: 'Adaptive traffic intersection control',
		context: 'Graduation project, University of Aleppo',
		accent: 'Vision & control',
		body: [
			'A traffic signal that decides its own timing from a single camera. YOLOv11n detects vehicles, IoU tracking with EMA smoothing turns that into a stable queue estimate per approach, and a pressure based supervisory controller built on Max-Pressure theory picks which phase gets the green.',
			'Underneath it sits a finite state machine that owns safety: minimum green, all red clearance, and a fixed time fallback. If the vision layer lies, stalls, or dies, the intersection still behaves. It runs on an ESP32 with a custom PCB driving the signal heads.'
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
				role: 'Technical team lead',
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
		text: 'Delta DVP ladder programs: sorting line and sequential conveyor control'
	},
	{ domain: 'Backend', text: 'Student tracking API: FastAPI, PostgreSQL, idempotent upserts' },
	{ domain: 'Robotics', text: 'ROS 2 occupancy grid viewer rendering a live cost map at 10 Hz' },
	{ domain: 'Freelance', text: 'Product catalogues with QR generation and usage analytics' }
];

/**
 * Deep dive cards. Problem, Approach, Trade-off is deliberate: it shows
 * engineering judgement rather than a list of technologies.
 */
export const systemDesign = [
	{
		title: 'Reading a battery that lies once an hour',
		scope: 'Manara robot, embedded system design',
		problem:
			'The battery management system speaks RS-485 on its own schedule. Frames arrive late, occasionally malformed, and a robot in a crowd cannot be restarted when the parser gets confused.',
		approach: [
			'A dedicated C++ and Python bridge owns the serial port and publishes clean ROS 2 topics, so no other node ever touches raw bytes.',
			'Framing is hardware timed rather than delimiter guessed, which removes the ambiguity that made partial reads look like valid frames.',
			'Malformed frames are counted and dropped instead of retried forever, and the last known good reading is published with its age attached.',
			'Consumers treat telemetry as possibly stale by design, so a silent sensor degrades behaviour instead of stopping the robot.'
		],
		tradeoff:
			'Publishing stale data with an age stamp is less pure than refusing to publish at all, and it puts responsibility on every consumer to check. In exchange the robot keeps navigating through a bad minute on the bus, which is the behaviour that actually matters in a crowded hall.'
	},
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
		scope: 'Data modelling, PostgreSQL and SQL Server',
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

export const experience = [
	{
		period: 'Since Jan 2026',
		role: 'Robotics Engineer',
		org: 'SWB Technical Development',
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
		period: 'Since Jan 2022',
		role: 'Problem Solving Coach',
		org: 'Aleppo University',
		place: 'Aleppo, Syria',
		current: true,
		points: [
			'Train students for ICPC style contests through workshops, one to one sessions, and a structured 200 problem roadmap.',
			'Technical lead for ACPC, running the judging system and contest day infrastructure.',
			'Designed assessment tools to measure progress across cohorts.'
		]
	},
	{
		period: 'Since 2019',
		role: 'BSc Electrical Engineering',
		org: 'University of Aleppo',
		place: 'Fifth year',
		education: true,
		points: [
			'Graduation project: adaptive traffic signal control using computer vision, supervised by Dr. Hassan Al-Naddaf.'
		]
	}
];

export const competitive = [
	{
		title: 'Contestant',
		handle: '@Legends_Never_Die',
		body: 'Active on Codeforces since university, and a participant in the Syrian Collegiate Programming Contest and the ICPC regional. Seven years of this is where my debugging instincts come from. You learn quickly that the bug is almost always in the assumption you did not test.'
	},
	{
		title: 'Coach, judge, and organiser',
		handle: 'ACPC technical lead',
		body: 'I coach students at Aleppo University, lead the technical team behind ACPC, test problem sets, and have judged the Idleb Collegiate Programming Contest. That covers everything from the training roadmap and problem selection to the judge servers, validators, and scoreboard that make contest day run.'
	}
];

export const contactSection = {
	heading: 'Got a robot, an embedded system, or a web platform that needs to work?',
	body: 'I am a robotics engineer by day and I take on freelance full-stack web work. WhatsApp is the fastest way to reach me, and I reply to every email.'
};
