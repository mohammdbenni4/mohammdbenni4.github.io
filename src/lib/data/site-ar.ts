/**
 * Arabic content for /ar.
 *
 * Every export mirrors the SHAPE of its counterpart in site.ts, because the
 * Arabic page renders the same components as the English one rather than a set
 * of lookalikes. If a shape drifts here, the Arabic page silently loses a
 * feature.
 *
 * The words are written natively, not translated. This file was rewritten
 * against docs/arabic-copy-rewrite.md, which diagnosed the previous version as
 * English sentence structure with Arabic words substituted in. The recurring
 * faults it fixed:
 *
 *   - prepositions carried over literally (`مقابل حسّاسات` for "against sensors")
 *   - English metaphors that die in Arabic (`على الطاولة`, `الآلة` for machinery)
 *   - mistranslated technical terms, the worst class, because they read as
 *     engineering errors rather than language ones: التقييس (Standardization)
 *     for Normalization, الثوابت (Constants) for Invariants
 *   - words whose first reading is the wrong one (`زر` reads Button before
 *     "visit"; `الموقع` reads Website on a personal site)
 *   - anthropomorphism that does not survive the crossing (`تكذب الحسّاسات`)
 *   - four-clause sentences with an English cadence
 *
 * Terminology rule: product, framework and stable architectural-pattern names
 * stay Latin (ROS 2, PostgreSQL, CQRS, Domain-Driven Design, SLAM, Full-Stack,
 * Idempotent, SSR, RTL). General engineering concepts get real Arabic
 * (المستشعرات، التطبيع، الملاحة، آلة الحالات، الفهرسة). A translated term is
 * introduced once with its English original in brackets, then used in Arabic.
 *
 * `Full-Stack` is deliberately NOT translated. `مطوّر ويب متكامل` renders it as
 * "integrated", which conveys nothing, and Full-Stack is the literal string a
 * recruiter searches for.
 *
 * Month names use the Gulf forms (يناير، يونيو، أغسطس) rather than the Levantine
 * ones, because the target audience for this page is Gulf-based.
 */

import { about as aboutEn, type Project, type ExperienceItem } from './site';

export const metaAr = {
	title: 'محمد بني | مهندس روبوتات ومطوّر ويب Full-Stack',
	description:
		'محمد بني، مهندس روبوتات ومطوّر ويب Full-Stack من حلب. من فريق تطوير روبوت (منارة) العامل في المسجد الحرام والمسجد النبوي. ROS 2 و C++ و .NET و PostgreSQL.',
	name: 'محمد بني',
	locale: 'ar_AR'
};

export const heroAr = {
	role: 'مهندس روبوتات ومطوّر ويب Full-Stack',
	lede: 'أبني أنظمة يُقاس نجاحها في الميدان لا في المحاكاة: روبوتات ذاتية التنقّل، والأنظمة المدمجة التي تُشغّلها، ومنصّات الويب وقواعد البيانات التي تصل مكوّناتها ببعضها.'
};

export const heroLabelsAr = {
	whatsapp: 'تواصل عبر واتساب',
	email: 'راسلني بالبريد الإلكتروني',
	work: 'استعرض الأعمال',
	// The CV file is English only, so the button says so rather than surprising
	// an Arabic reader who clicks expecting Arabic.
	cv: 'تحميل السيرة الذاتية (PDF · بالإنكليزية)'
};

export const locationAr = 'حلب، سوريا';

/** Portrait config is shared: same file, Arabic alt text. */
export const aboutAr = {
	portrait: {
		...aboutEn.portrait,
		alt: 'محمد بني، مهندس روبوتات ومطوّر ويب Full-Stack، حلب، سوريا'
	},
	paragraphs: [
		'أنا **محمد بني**، **مهندس روبوتات** ومطوّر ويب سوري مقيم في حلب. عملي يقع عند الحدّ الذي تتقاطع فيه **البرمجيات** مع **العتاد**. الروبوتات الخدمية التي أبنيها تعمل على **ROS 2 Jazzy**، وأكتب برامجها بلغتَي **C++** و **Python** للتعامل مع مستشعرات حقيقية: مسح ليزري يغذّي خوارزميات التموضع وبناء الخرائط الآني (**SLAM**)، وبيانات بطارية تصل عبر **RS-485** بتوقيت غير منتظم، وحلقات تحكّم يجب أن تبقى مستقرّة حين تتأخّر البيانات أو يخالطها ضجيج.',
		'ضبط سلوك آلة بين آلاف من البشر مسألة أخرى تماماً عن ضبطه داخل بيئة محاكاة. الفارق ليس في الخوارزمية، بل في ما يحدث عندما تُعطي المستشعرات قراءة خاطئة أو تتأخّر أو تتوقّف، وفي أنّه لا أحد بجانب الروبوت ليعيد تشغيله.',
		'أمّا في الويب فأبني المنظومة كاملة: أنظمة خلفية (**Backend**) بـ **.NET Core** و **FastAPI**، وواجهات أمامية بـ **SvelteKit** و **TypeScript**، ومخطّطات بيانات على **PostgreSQL** و **SQL Server**، مع بيئة النشر عليها من **Docker** و **Linux**. أعتمد **Domain-Driven Design** و **CQRS** حين يستحقّان كلفتهما لا قبل ذلك. وأقرب أجزاء العمل إلى نفسي هو تصميم نموذج البيانات، لأنّ بنية البيانات هي التي تحدّد سقف ما يمكن للتطبيق أن يصير إليه.'
	],
	facts: [
		{ icon: 'pin', key: 'الإقامة', value: 'حلب، سوريا · التوقيت GMT+3' },
		{ icon: 'globe', key: 'الجاهزية', value: 'العمل عن بُعد أو الانتقال إلى مقرّ العمل' },
		{ icon: 'robot', key: 'الوظيفة الحالية', value: 'مهندس روبوتات في SWB AI' },
		{
			icon: 'briefcase',
			key: 'العمل المستقل',
			value: 'تطوير ويب Full-Stack · متاح لمشاريع جديدة'
		},
		{
			icon: 'cap',
			key: 'المؤهل العلمي',
			value: 'بكالوريوس في الهندسة الكهربائية · جامعة حلب · 2026'
		},
		{ icon: 'code', key: 'لغات البرمجة', value: 'C++ · C# · Python · TypeScript · SQL' },
		// `chat` matches the English version; `globe` was duplicated here before.
		{ icon: 'chat', key: 'اللغات', value: 'العربية (اللغة الأم) · الإنكليزية (إجادة مهنية)' }
	]
};

export const projectsAr: Project[] = [
	{
		// Quoted, or "روبوت منارة" reads as a description (a robot for lighthouses)
		// rather than a product name.
		title: 'روبوت (منارة)',
		context: 'SWB AI · المسجد الحرام بمكة المكرّمة والمسجد النبوي الشريف بالمدينة المنوّرة',
		accent: 'روبوتات',
		gallery: {
			placeholders: 4,
			slides: [
				{
					src: '/images/cdd4adc3-6bd4-4114-8711-093e49f5c047.jpg',
					caption: 'وحدة (منارة) تجيب أحد الزوّار داخل المسجد الحرام'
				},
				{
					src: '/images/92825ed4-fa2c-4440-b0a7-df346c1be9b5.jpg',
					caption: 'زوّار يستخدمون شاشة الإرشاد باللمس'
				}
			]
		},
		body: [
			'روبوت إرشادي ذاتي التنقّل يخدم قاصدي المسجد الحرام والمسجد النبوي الشريف، ويجيب عن أسئلتهم في المناسك والاتجاهات بإحدى عشرة لغة. يعمل في واحد من أكثر الأماكن ازدحاماً بالمشاة في العالم، وعليه أن يؤدّي المهمّتين معاً دون تدخّل بشري.'
		],
		contributions: [
			{
				title: 'لوحة تحكّم عبر إنترنت الأشياء (IoT) بخريطة لحظية',
				detail:
					'واجهة ويب متّصلة بالروبوت لإدارته ومتابعة الخريطة وهي تُبنى لحظة بلحظة. إرسال شبكة الإشغال (Occupancy Grid) كاملة في كل إطار كان يستهلك من الشبكة أكثر مما تحتمل، فصار الروبوت يرسل الخلايا التي تغيّرت منذ الإطار السابق فقط، وهو ما يُبقي تحديث الخريطة فورياً دون تأخّر ملحوظ على وصلة شبكة عادية.'
			},
			{
				title: 'حزمة إدارة البطارية بـ ROS 2 Jazzy و C++',
				detail:
					'بنيتُ حزمة إدارة البطارية وحسّنتُ أداءها: قراءة بيانات نظام إدارة البطارية (BMS) عبر RS-485، وضبط تأطير البروتوكول بحسب توقيت العتاد، ونشر بيانات موثوقة عن حالة الشحن (SoC) وسلامة البطارية (SoH) تعتمد عليها بقيّة المنظومة.'
			},
			{
				title: 'ضبط SLAM للحصول على مسار أكثر سلاسة',
				detail:
					'حسّنتُ إعدادات SLAM حتى استقرّ تقدير الموضع وتوقّف تذبذبه، فصار المتحكّم يتبع مساراً سلساً فعلاً بدلاً من التصحيح المستمرّ لضجيج تقديره الخاص. والفرق ملحوظ بالعين المجرّدة لمن يقف إلى جانب الروبوت.'
			},
			{
				title: 'دمج المستشعرات وتشغيل الأنظمة المدمجة',
				detail:
					'تشغيل منظومة الحوسبة والاستشعار على Orange Pi 5 Max و Raspberry Pi: ماسح الليزر الدوّار RPLidar، ومصفوفة المستشعرات فوق الصوتية، والأجهزة التسلسلية، مع إبقائها مستقرّة عبر دورات إطفاء التغذية وتحديثات البرمجية الثابتة (Firmware).'
			}
		],
		specs: [
			{ key: 'حزمة التقنيات', value: 'ROS 2 Jazzy · C++ · Python' },
			{ key: 'الحوسبة', value: 'Orange Pi 5 Max · Raspberry Pi' },
			{
				key: 'المستشعرات والنواقل',
				value:
					'RPLidar C1 · مصفوفة مستشعرات فوق صوتية · بيانات البطارية عبر RS-485 بتأطير مضبوط على توقيت العتاد'
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
			// The bare acronym looked unserious beside a full English masthead.
			{ label: 'وكالة الأنباء السعودية (واس)', href: 'https://www.spa.gov.sa/en/N2275990' }
		]
	},
	{
		title: 'swbai.com',
		context: 'SWB AI · الموقع الرسمي ومنصّة المنتجات',
		accent: 'ويب Full-Stack',
		status: 'منشور ويعمل',
		body: [
			'الموقع الرسمي لشركة SWB AI، وهي الشركة التي أبني روبوتاتها. طوّرته بالكامل: الواجهة الأمامية، وواجهة برمجية بـ Node.js، وقاعدة بيانات PostgreSQL، وبنية المحتوى والنشر.',
			'الموقع هو واجهة الشركة أمام جمهور دولي، ومنه تُعرض وحدات (منارة) ومنصّة المطوّرين وخدمات اللوحات الإلكترونية والطباعة ثلاثية الأبعاد. وجمهوره في الخليج والمنطقة العربية يتصفّح غالباً من الهاتف، فكان عليه أن يُحمَّل سريعاً على اتصال ضعيف، وأن يُقرأ بسلاسة في اتجاهَي الكتابة معاً: العربية والإنكليزية.'
		],
		// Ported from the English card, which carried four and the Arabic carried
		// none, leaving the Arabic project visibly thinner for no reason.
		contributions: [
			{
				title: 'واجهة أمامية بـ SvelteKit مع توليد من جهة الخادم',
				detail:
					'الصفحات تُولَّد من جهة الخادم (SSR) ليصل المحتوى داخل HTML إلى محرّكات البحث وإلى الزائر على اتصال بطيء، ثم تُفعَّل الأجزاء التفاعلية بعد ذلك.'
			},
			{
				title: 'واجهة برمجية بـ Node.js وقاعدة PostgreSQL',
				detail:
					'نظام خلفي بـ Node.js فوق مخطّط PostgreSQL مصمّم حول المحتوى الذي يحرّره فريق التسويق فعلاً، بدلاً من قالب إدارة محتوى عام لا يناسب أحداً تماماً.'
			},
			{
				title: 'ثنائية اللغة عربي/إنكليزي مع دعم RTL',
				detail:
					'كل تخطيط يعمل في الاتجاهين. دعم الكتابة من اليمين مسألة تخطيط لا مسألة ترجمة، لذلك بُنيت المكوّنات من أجله منذ البداية.'
			},
			{
				title: 'مبني لظروف الشبكة التي يُتصفَّح منها',
				detail:
					'جزء كبير من الجمهور على شبكات الهاتف في الخليج والمنطقة العربية، فضُبطت أحجام الصور وحُمّلت عند الحاجة، وبقي المسار الحرج للتحميل صغيراً.'
			}
		],
		links: [{ label: 'زيارة swbai.com', href: 'https://www.swbai.com', primary: true }],
		tags: [
			'SvelteKit',
			'Node.js',
			'PostgreSQL',
			'SSR',
			'دعم الكتابة من اليمين (RTL)',
			'تصميم متجاوب',
			'SEO'
		]
	},
	{
		// The C in ACPC is Collegiate, not Competitive. The old title translated a
		// contest name that does not exist.
		title: 'ACPC · مسابقة حلب الجامعية للبرمجة',
		context: 'سبع سنوات في المسابقة من مواقعها كلّها',
		accent: 'برمجة تنافسية',
		links: [{ label: 'ICPC ID: CFILP0WQF2R5', href: 'https://icpc.global/ICPCID/CFILP0WQF2R5' }],
		body: [
			'خضتُ البرمجة التنافسية من مواقعها كلّها: متسابقاً، ثم مدرّباً، ثم عضواً في الفريق التقني الذي يبني البنية التي تقوم عليها المسابقة.',
			'وعلى الجانب التقني يعني ذلك: عنقود خواديم تحكيم PC² 9.10، وإعداد المحكّمات الآلية (Auto Judges)، ولوحة النتائج المباشرة، ونظام توزيع البالونات، وأداة Resolver في الحفل الختامي. وكتبتُ كذلك الأداة التي تستورد المسائل مباشرة من Polygon إلى PC² مع اختباراتها ومدقّقاتها وحدودها الزمنية، فاختصرت يوماً كاملاً من الإعداد اليدوي إلى أمر واحد.'
		],
		roles: [
			{
				role: 'متسابق',
				detail:
					'المسابقة السورية الجامعية للبرمجة، والتصفيات الإقليمية لمسابقة ICPC، منذ سنوات الدراسة الجامعية.'
			},
			{
				role: 'مدرّب',
				detail:
					'تدريب فرق جامعة حلب منذ 2022 عبر ورش عمل وجلسات فردية وخطة تدريب مُهيكَلة من 200 مسألة.'
			},
			{
				role: 'عضو الفريق التقني',
				detail: 'عنقود التحكيم، والمحكّمات الآلية، ولوحة النتائج، وتوزيع البالونات، وأداة Resolver.'
			},
			{
				role: 'مختبِر مسائل',
				detail: 'مراجعة نصوص المسائل، والتحقّق من بيانات الاختبار والحلول المرجعية قبل يوم المسابقة.'
			},
			{ role: 'محكّم', detail: 'التحكيم في مسابقة إدلب الجامعية للبرمجة.' }
		],
		tags: ['PC² 9.10', 'Bash', 'Python', 'Polygon', 'Linux']
	}
];

export const smallerBuildsAr = [
	{
		domain: 'PLC',
		icon: 'chip',
		text: 'برمجة بمخطّط السلّم (Ladder) على Delta DVP: خط فرز وتحكّم تسلسلي بأحزمة النقل'
	},
	{
		domain: 'أنظمة خلفية',
		icon: 'server',
		text: 'واجهة برمجية (API) لتتبّع الطلاب: FastAPI و PostgreSQL وعمليات كتابة لا تتضاعف عند إعادة التنفيذ (Idempotent)'
	},
	{
		domain: 'روبوتات',
		icon: 'radar',
		text: 'عارض لشبكة الإشغال على ROS 2 يرسم خريطة الكلفة لحظياً بتردّد 10 Hz'
	},
	{
		domain: 'عمل مستقل',
		icon: 'briefcase',
		text: 'كتالوجات منتجات مع توليد رموز QR وتحليلات للاستخدام'
	}
];

export const systemDesignAr = [
	{
		title: 'ضبط الكتابة وتسريع القراءة',
		scope: 'Elkood · \u200E.NET Core مع Domain-Driven Design و CQRS',
		problem:
			'نظام خلفي تؤدّي فيه النماذج ذاتها دورين معاً: قواعد عمل معقّدة، ونقاط نهاية (Endpoints) قراءة عالية الحمل. تسرّبت قواعد سلامة النموذج (Invariants) إلى مسارات الاستعلام، وصار أداء القراءة رهينةً لنموذج الكتابة.',
		approach: [
			'سياقات محدَّدة (Bounded Contexts)، وكيانات تجميعية (Aggregates) تحرس قواعدها بنفسها، فلا تتغيّر الحالة إلا من خلال نموذج المجال.',
			'الأوامر (Commands) تكتب عبر نموذج المجال، والاستعلامات (Queries) تتجاوزه كلياً وتقرأ من نماذج قراءة (Projections) مبنية لهذا الغرض.',
			'قياس أداء المسارات الأكثر تحميلاً وإعادة بنائها: إزالة استعلامات N+1، وفهارس موجّهة بدقّة، وتخزين مؤقت (Caching) حيث تحتمل البيانات تقادُماً محدوداً.',
			'توثيق عقود الواجهات البرمجية وإصدارها، حتى تعمل فرق الواجهة الأمامية دون انتظار فريقنا.'
		],
		tradeoff:
			'كلفة CQRS نموذجٌ ثانٍ يجب إبقاؤه متزامناً، وهو خيار خاطئ فعلاً في تطبيق CRUD بسيط. لكنه برّر كلفته هنا، لأنّ شكلَي القراءة والكتابة كانا قد تباعدا أصلاً، فكنّا ندفع الثمن دون أن نجني الفائدة.'
	},
	{
		title: 'تصميم مخطّط قاعدة البيانات قبل التطبيق',
		scope: 'نمذجة بيانات · PostgreSQL و SQL Server',
		problem:
			'مهامّ المزامنة واتصالات الأجهزة المحمولة المتقطّعة كانت تؤدّي إلى وصول عملية الكتابة نفسها مرّتين، واستعلامات تقارير تعمل جيداً عند مئة سجل وتنهار عند مئة ألف.',
		approach: [
			'عمليات إدراج/تحديث لا تتغيّر نتيجتها عند التكرار (Idempotent Upserts) مبنية على مفتاح عمل طبيعي، فتنتهي إعادة المزامنة إلى النتيجة ذاتها بدل أن تُضاعف السجلات.',
			'فهارس مختارة من أشكال الاستعلامات التي تُنفَّذ فعلاً، ثم مُتحقَّق منها بخطة التنفيذ (Execution Plan) لا بأسماء الأعمدة.',
			'تطبيع (Normalization) حيث تهمّ صحّة البيانات، وإلغاء تطبيع مقصود وموثَّق حيث يهمّ زمن القراءة أكثر.',
			'ترحيلات (Migrations) مُرقَّمة بإصدارات وقابلة للتراجع، وقيود مفروضة في قاعدة البيانات نفسها لا في كود التطبيق وحده.'
		],
		tradeoff:
			'القيود داخل قاعدة البيانات تجعل بعض عمليات النشر أصعب وبعض الكتابات أبطأ. وأقبل هذه المقايضة في كل مرّة، لأنّ كود التطبيق يُعاد كتابته، أمّا البيانات فتبقى بعده.'
	}
];

export const graduationAr = {
	title: 'تحكّم تكيّفي في تقاطع مروري',
	context: 'مشروع التخرّج · جامعة حلب',
	supervisor: 'بإشراف الدكتور حسّان الندّاف',
	body: [
		'إشارة مرور تحدّد توقيتها بنفسها من كاميرا واحدة بدلاً من جدول زمني ثابت. يكشف YOLOv11n المركبات، ثم يحوّل التتبّع بمعيار IoU مع تنعيم EMA نتائج الكشف إلى تقدير مستقرّ لطول الطابور عند كل مدخل، ويختار متحكّم إشرافي مبني على نظرية Max-Pressure الطور الذي يأخذ الضوء الأخضر.',
		'وتحت ذلك كلّه آلة حالات منتهية (FSM) تتولّى قرارات السلامة: حدّ أدنى لزمن الأخضر، وفترة إخلاء بإشارة حمراء لكل الاتجاهات، وتوقيت ثابت كخطة بديلة. وإن أخطأت طبقة الرؤية أو تعثّرت أو توقّفت تماماً، يبقى سلوك التقاطع سليماً. يعمل النظام على ESP32 مع لوحة إلكترونية مصمّمة خصيصاً لقيادة كشّافات الإشارة.'
	],
	highlights: [
		{ key: 'الإدراك', value: 'كشف بـ YOLOv11n مع تتبّع IoU وتنعيم EMA' },
		{ key: 'التحكّم', value: 'متحكّم إشرافي قائم على Max-Pressure يعمل على مجموعة أطوار' },
		{ key: 'السلامة', value: 'آلة حالات (FSM): حدّ أدنى للأخضر، وإخلاء بالأحمر، وتوقيت بديل' },
		{ key: 'العتاد', value: 'ESP32 ولوحة إلكترونية مخصّصة تقود كشّافات الإشارة' }
	],
	tags: [
		'YOLOv11n',
		'OpenCV',
		'Python',
		'ESP32',
		'لوحة إلكترونية مخصّصة (PCB)',
		'طبقة سلامة (FSM)',
		'Max-Pressure'
	]
};

export const skillGroupsAr = [
	{
		title: 'الروبوتات والأنظمة المدمجة',
		icon: 'robot',
		items: [
			'ROS 2 Jazzy: العقد (Nodes) والمواضيع (Topics) والخدمات و TF',
			'ملاحة ذاتية ودمج بيانات المستشعرات (Sensor Fusion)',
			'ESP32 و AVR وبرمجة العتاد المباشرة (Bare-metal)',
			'تشغيل Orange Pi 5 Max و Raspberry Pi',
			'RPLidar C1 ومصفوفات مستشعرات فوق صوتية وأنظمة إدارة بطاريات (BMS)',
			'تصميم اللوحات الإلكترونية (PCB) وتشخيص أعطال العتاد'
		]
	},
	{
		title: 'إنترنت الأشياء والأنظمة المتصلة',
		icon: 'signal',
		items: [
			'نواقل حقلية: RS-485 و UART و I²C و SPI',
			'تأطير حِزَم البروتوكولات وفق توقيت العتاد',
			'تجميع بيانات القياس عن بُعد (Telemetry) ومراقبة الأجهزة',
			'تشغيل نماذج الاستدلال على أجهزة طرفية محدودة الموارد (Edge Inference)',
			'شبكات المستشعرات واكتساب البيانات',
			'إدارة البطاريات وقياسات الطاقة'
		]
	},
	{
		title: 'الأنظمة الخلفية (Backend) وتصميم المنظومات',
		icon: 'server',
		items: [
			'C# و \u200E.NET Core، Python و FastAPI',
			'Domain-Driven Design و CQRS',
			'تصميم واجهات REST وإصداراتها وتوثيقها',
			'مصادقة JWT وإصدار المفاتيح وتدويرها',
			'التخزين المؤقت وتحسين المسارات الأكثر تحميلاً',
			'Docker و Linux و Git و CI/CD'
		]
	},
	{
		title: 'قواعد البيانات ونمذجتها',
		icon: 'database',
		items: [
			'PostgreSQL و SQL Server',
			'تصميم المخطّطات والتطبيع (Normalization)',
			'فهرسة مبنية على أشكال الاستعلامات الفعلية',
			'تحليل خطط التنفيذ وضبط الأداء',
			'عمليات كتابة لا تتضاعف عند التكرار (Idempotent) وترحيلات مُرقَّمة بإصدارات',
			'المعاملات والتزامن والقيود'
		]
	},
	{
		title: 'الويب والواجهات الأمامية',
		icon: 'browser',
		items: [
			'SvelteKit و TypeScript',
			'Tailwind CSS وأنظمة التصميم',
			'Capacitor للتوزيع على Android',
			'واجهات متجاوبة وميسّرة الوصول (Accessibility)',
			'الأداء ومؤشرات Core Web Vitals',
			'نشر ساكن ونشر بالتوليد من جهة الخادم (SSR)'
		]
	},
	{
		title: 'الرؤية الحاسوبية والخوارزميات',
		icon: 'scan',
		items: [
			'YOLO v8 و v11 وضبط الاستدلال على الأجهزة الطرفية',
			'OpenCV وتتبّع IoU وتنعيم EMA',
			'هياكل البيانات والخوارزميات',
			'نظرية المخطّطات (Graph Theory) والبرمجة الديناميكية',
			'تحليل التعقيد الحسابي والتحسين',
			'برمجة تنافسية على مدى سبع سنوات'
		]
	}
];

export const experienceAr: ExperienceItem[] = [
	{
		period: 'يناير 2026 – حتى الآن',
		role: 'مهندس روبوتات',
		org: 'SWB AI',
		// The English entry links the employer; the Arabic one did not, so the
		// company name was unclickable on this page only.
		orgUrl: 'https://www.swbai.com',
		place: 'حلب، سوريا',
		current: true,
		points: [
			'بناء وبرمجة روبوتات خدمية ذاتية التنقّل على ROS 2 Jazzy، منها وحدات (منارة) العاملة في المسجد الحرام بمكة المكرّمة والمسجد النبوي الشريف بالمدينة المنوّرة.',
			'كتابة طبقة الوصل البرمجية بلغتَي C++ و Python، وهي التي تقرأ بيانات نظام إدارة البطارية (BMS) والمستشعرات فوق الصوتية عبر RS-485 وتنشرها في مواضيع (Topics) ROS 2.',
			'تنفيذ بروتوكولات تسلسلية ومعالجة أخطائها، وضبط توقيت العتاد للحصول على تأطير موثوق لبيانات البطارية.',
			'تشغيل الأنظمة المدمجة وتحسينها على Orange Pi 5 Max و Raspberry Pi مع RPLidar.'
		]
	},
	{
		period: 'مستمرّ حتى الآن',
		role: 'مطوّر ويب Full-Stack',
		org: 'عمل مستقل (Freelance)',
		place: 'عن بُعد',
		current: true,
		points: [
			'تصميم وتسليم منتجات ويب كاملة: الواجهة البرمجية، وقاعدة البيانات، والواجهة الأمامية، والنشر.',
			'أنظمة خلفية بـ \u200E.NET Core و FastAPI، وواجهات أمامية بـ SvelteKit و TypeScript.',
			'تصميم مخطّطات PostgreSQL و SQL Server واستراتيجيات الفهرسة والترحيل.'
		]
	},
	{
		period: 'يونيو 2023 – أغسطس 2024',
		role: 'مطوّر أنظمة خلفية ومصمّم قواعد بيانات',
		org: 'Elkood',
		orgUrl: 'https://elkood.com',
		place: 'حلب، سوريا',
		points: [
			'تصميم وصيانة خدمات \u200E.NET Core باعتماد Domain-Driven Design و CQRS.',
			'تصميم وتحليل المخطّطات العلائقية التي تقوم عليها تلك الخدمات: التطبيع، واستراتيجية الفهرسة، وتخطيط الترحيل.',
			'بناء وتوثيق الواجهات البرمجية لفرق الواجهة الأمامية، بما حسّن التكامل بين المنتجات.',
			'تقليص زمن الاستجابة في المسارات الأكثر تحميلاً بإعادة صياغة الاستعلامات وضبط الفهرسة والتخزين المؤقت.',
			'مراجعة كود فريق الأنظمة الخلفية بالكامل، وإرساء معايير معمارية موحّدة.'
		]
	},
	{
		period: 'يناير 2022 – حتى الآن',
		role: 'مدرّب حلّ المسائل البرمجية',
		org: 'جامعة حلب',
		place: 'حلب، سوريا',
		current: true,
		points: [
			'تدريب الطلاب على مسابقات بنمط ICPC عبر ورش عمل وجلسات فردية وخطة تدريب مُهيكَلة من 200 مسألة.',
			'عضو الفريق التقني لمسابقة حلب: نظام التحكيم والبنية التشغيلية يوم المسابقة.',
			'تصميم أدوات تقييم لقياس تقدّم الطلاب بين الدفعات.'
		]
	},
	{
		period: '2019 – 2026',
		role: 'بكالوريوس في الهندسة الكهربائية',
		org: 'جامعة حلب',
		place: 'حلب، سوريا',
		education: true,
		points: [
			'تخرّجت عام 2026 من قسم التحكّم الآلي والأتمتة الصناعية، وهو مصدر خلفيّتي في نظرية التحكّم التي يستند إليها عملي في الروبوتات.',
			'مشروع التخرّج: تحكّم تكيّفي في تقاطع مروري، وتفاصيله في القسم المخصّص له أعلاه.'
		]
	}
];

export const competitiveAr = [
	{
		title: 'البنية التقنية للمسابقة',
		handle: 'ACPC · منتسبة إلى ICPC',
		body: 'ضمن الفريق التقني أعمل على المنظومة التي تقوم عليها المسابقة: عنقود خواديم تحكيم PC² 9.10، وإعداد المحكّمات الآلية، ولوحة النتائج المباشرة، ونظام توزيع البالونات، وأداة Resolver في الحفل الختامي. وكتبتُ الأداة التي تستورد المسائل مباشرة من Polygon إلى PC² مع اختباراتها ومدقّقاتها وحدودها الزمنية، فاختصرت يوماً كاملاً من الإعداد اليدوي إلى أمر واحد.'
	},
	{
		title: 'مدرّب ومحكّم ومتسابق',
		handle: '@Legends_Never_Die',
		body: 'أدرّب فرق جامعة حلب عبر ورش عمل وجلسات فردية وخطة تدريب مُهيكَلة من 200 مسألة، وأختبر مجموعات المسائل قبل يوم المسابقة، وحكّمتُ في مسابقة إدلب الجامعية للبرمجة. سبع سنوات من المنافسة هي مصدر حدسي في تتبّع الأخطاء: العلّة تكون في الغالب في الافتراض الذي لم يُختبَر.'
	}
];

export const contactSectionAr = {
	// Formal Arabic needs "هل" for a question; the mark alone reads as a statement.
	heading: 'هل لديك روبوت أو نظام مدمج أو منصّة ويب تحتاج إلى من يجعلها تعمل كما يجب؟',
	body: 'أعمل مهندسَ روبوتات بدوام كامل، وأتولّى مشاريع تطوير الويب Full-Stack بصفة مستقلّة. واتساب أسرع وسيلة للوصول إليّ، وأحرص على الردّ على كل رسالة بريد إلكتروني.'
};

/** Section headers and UI strings, mirroring the English numbering. */
export const uiAr = {
	nav: [
		{ label: 'نبذة', href: '/ar/#about' },
		{ label: 'الأعمال', href: '/ar/#work' },
		{ label: 'الأنظمة', href: '/ar/#systems' },
		{ label: 'المشروع الأكاديمي', href: '/ar/#graduation' },
		{ label: 'المهارات', href: '/ar/#skills' },
		{ label: 'الخبرة', href: '/ar/#experience' },
		{ label: 'المسابقات', href: '/ar/#competitive' },
		{ label: 'التواصل', href: '/ar/#contact' }
	],
	langSwitch: {
		href: '/',
		label: 'English',
		lang: 'en',
		dir: 'ltr',
		title: 'Read this page in English'
	},
	// UI and ARIA labels take the verbal-noun form in Arabic, not the imperative:
	// a screen reader would otherwise read them as commands aimed at the user.
	menu: { open: 'فتح القائمة', close: 'إغلاق القائمة', nav: 'التنقّل الرئيسي' },
	whatsapp: 'واتساب',
	whatsappLong: 'تواصل عبر واتساب',
	headers: {
		about: { number: '01 / نبذة', title: 'حيث تلتقي البرمجيات بالعتاد', glance: 'لمحة سريعة' },
		work: {
			number: '02 / الأعمال',
			title: 'مختارات من الأعمال',
			intro:
				'روبوت في خدمة يومية بين الناس، ومتحكّم لا يُسمح له بالفشل إلا فشلاً آمناً، وسبع سنوات من العمل على البنية التقنية لمسابقات البرمجة.'
		},
		systems: {
			number: '03 / الأنظمة',
			title: 'تصميم الأنظمة وقواعد البيانات',
			intro:
				'قرارات معمارية اضطررت إلى الدفاع عنها، ومعها كلفة كل قرار. ولا قيمة للحديث عن البنية المعمارية دون ذكر ما تنازلنا عنه مقابلها.'
		},
		graduation: {
			number: '04 / المشروع الأكاديمي',
			title: 'مشروع التخرّج',
			intro:
				'أفردتُه عن أعمال العملاء عن قصد. هذا هو المشروع الجامعي، وفيه تُطبَّق نظرية التحكّم تطبيقاً فعلياً.'
		},
		skills: {
			number: '05 / المهارات',
			title: 'التقنيات التي أعمل بها',
			intro:
				'مرتّبة حسب نوع المشكلة الهندسية لا حسب لغة البرمجة، وكل ما ورد هنا استخدمتُه في مشروع فعلي.'
		},
		experience: { number: '06 / الخبرة', title: 'الخبرة العملية والتعليم' },
		competitive: {
			number: '07 / المسابقات',
			title: 'البرمجة التنافسية',
			intro:
				'أدرّب على البرمجة التنافسية منذ 2022، وأعمل ضمن الفريق التقني الذي يقف خلف ACPC، مسابقتنا المنتسبة إلى ICPC. ولا أعرف طريقة أسرع من التدريس لاكتشاف حدود فهمي الحقيقي.'
		},
		contact: '08 / التواصل'
	},
	bench: { title: 'أعمال أصغر', aside: 'سُلّمت أيضاً' },
	// The three labels are parallel nouns so the card reads as one structure.
	systemsLabels: { problem: 'المشكلة', approach: 'المعالجة', tradeoff: 'المقايضة' },
	graduationLabels: { org: 'جامعة حلب', badge: 'أكاديمي', howBuilt: 'طريقة التنفيذ' },
	experienceLabels: { current: 'حالياً', education: 'مؤهل علمي' },
	competitiveLabels: { icpc: 'معرّف ICPC: CFILP0WQF2R5', codeforces: 'الملف على Codeforces' },
	contactLabels: {
		whatsapp: 'تواصل عبر واتساب',
		email: 'راسلني بالبريد الإلكتروني',
		cv: 'تحميل السيرة الذاتية (بالإنكليزية)',
		// "الموقع" reads as Website on a personal site, not Location.
		location: 'مكان الإقامة'
	},
	projectLabels: {
		built: 'مساهمتي التقنية',
		roles: 'الأدوار التي شغلتها',
		press: 'تغطية صحفية'
	},
	/** Carousel labels, previously hardcoded English inside Gallery.svelte. */
	galleryLabels: {
		previous: 'الصورة السابقة',
		next: 'الصورة التالية',
		goTo: 'الانتقال إلى الصورة',
		slide: 'صورة',
		of: 'من',
		suffix: 'صور'
	},
	footer: {
		tagline: 'مهندس روبوتات ومطوّر ويب Full-Stack. متاح للعمل عن بُعد وللانتقال إلى مقرّ العمل.',
		nav: 'روابط',
		backToTop: 'العودة إلى الأعلى',
		whatsapp: 'تواصل عبر واتساب'
	},
	footerLinks: {
		email: 'البريد الإلكتروني',
		linkedin: 'LinkedIn',
		github: 'GitHub',
		codeforces: 'Codeforces',
		icpc: 'ICPC',
		orcid: 'ORCID',
		facebook: 'Facebook',
		instagram: 'Instagram',
		cv: 'السيرة الذاتية (PDF)'
	}
};
