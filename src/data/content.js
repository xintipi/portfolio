import rainyImage from '../assets/rainy.webp';
import yadeaImage from '../assets/yadea-g5.webp';
import gumikeImage from '../assets/gumike-2019.webp';
import emailBuilderImage from '../assets/ngp-email-builder.webp';
import smartPlannerImage from '../assets/ngp-smart-planner.webp';
import smartCalendarImage from '../assets/ngp-smart-calendar.webp';

export const siteMeta = {
	name: 'Nguyen Huu Trung',
	title: 'Senior Front-End Engineer',
	location: 'Ho Chi Minh City, Vietnam',
	email: 'huutrung.mmt@gmail.com',
	phone: '0986 607 599',
	phoneHref: 'tel:+84986607599',
};

export const navLinks = [
	{ id: 'work', label: 'Work' },
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'contact', label: 'Contact' },
];

export const socialLinks = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/trungnh957/' },
	{ label: 'GitHub', href: 'https://github.com/xintipi' },
	{ label: 'Email', href: 'mailto:huutrung.mmt@gmail.com' },
];

export const hero = {
	eyebrow: 'Ho Chi Minh City, Vietnam',
	headline: 'I build complex interfaces that stay fast under real data.',
	headlineEmphasis: 'fast',
	lead:
		'Senior Front-End Engineer with 7+ years shipping scalable web apps in React, Next.js, TypeScript, and Vue.js — from enterprise marketing platforms to performance-critical UIs and AI integrations.',
};

export const heroMetrics = [
	{ value: '7+', label: 'Years of experience' },
	{ value: '10×', label: 'Email builder speed' },
	{ value: '60fps', label: 'Heavy UI rendering' },
];


export const about = {
	title: 'Scalable products, measurable performance.',
	paragraphs: [
		'Senior Front-End Engineer with 7+ years building scalable, high-performance web applications using React, Next.js, TypeScript, and Vue.js. Experienced in frontend architecture, performance optimization, and delivering complex products for enterprise customers.',
		'At Next Generation Platform I help build One Platform — a Next.js system that connects Salesforce, Marketo, and Coupa for marketing and planning teams. Previously at Gumi Vietnam I led a company-wide TypeScript migration, shipped AR learning and booking products, and mentored junior engineers.',
	],
	education: 'B.E. Computer Networks, UIT Ho Chi Minh City (GPA 7.91/10) · English: Upper Intermediate',
	whatIDo: [
		'Frontend architecture & reusable components',
		'Performance optimization — SSR, virtualization, Core Web Vitals',
		'Enterprise integrations — Salesforce, Marketo, REST APIs',
		'AI chat UIs connected to Node.js MCP servers',
		'Mentoring, code review & cross-functional collaboration',
	],
};

export const expertise = [
	'React & Next.js',
	'Vue.js',
	'TypeScript',
	'Zustand & TanStack',
	'Performance',
	'AI / MCP',
	'Mentoring',
];

export const experience = [
	{
		period: 'Aug 2023 — Present',
		role: 'Senior Front-End Engineer',
		company: 'Next Generation Platform Inc',
		location: 'US · Remote',
		highlights: [
			'One Platform — large Next.js/React system connecting Salesforce, Marketo, and Coupa for enterprise marketing and planning workflows.',
			'Smart Email Builder — 10× faster creation with @dnd-kit drag-and-drop, 1-click Marketo sync, AI template generation via Node.js MCP, and 60fps rendering with TanStack Virtual.',
			'Smart Planner — visual folders and tables for complex campaign hierarchies (e.g. Zscaler); bi-directional Salesforce/Marketo sync with virtualized tables for thousands of records.',
			'Smart Calendar — FullCalendar across 4 platforms (Salesforce, Marketo, Asana, Wrike) in 6 views; shareable nuqs filters and export to Google Calendar, Outlook, and iCal.',
		],
	},
	{
		period: 'Feb 2018 — 2023',
		role: 'Front-End Developer',
		company: 'Gumi Vietnam',
		location: 'Ho Chi Minh City',
		highlights: [
			'Kadogawa — interactive AR learning website with React, Redux, and AR.js.',
			'Pharmacy — Vue.js appointment booking with barcode scanning; 80% faster patient check-ins.',
			'Lawyer — Vue.js legal platform with Pusher live chat and file management for 200+ daily users.',
			'Math Content — HTML5 games with Canvas and CreateJS for the Japanese Ministry of Education.',
			'Led company-wide TypeScript migration; mentored 2 junior engineers through clean code and code reviews.',
		],
	},
];

export const featuredWork = [
	{
		id: 'email-builder',
		size: 'featured',
		title: 'Smart Email Builder',
		company: 'Next Generation Platform · One Platform',
		tagline: 'Drag-and-drop emails with AI-generated templates',
		problem:
			'Marketing teams (e.g. Nutanix) assembled campaigns by hand — scaling from a few to hundreds per month required a visual builder, not more HTML.',
		impact: '10× faster creation',
		stack: ['React', '@dnd-kit', 'TanStack Virtual', 'Node MCP', 'Marketo API'],
		image: emailBuilderImage,
		imageAlt: 'Smart Email Builder interface with drag-and-drop canvas and AI template panel',
		accent: 'var(--accent)',
	},
	{
		id: 'smart-planner',
		size: 'medium',
		title: 'Smart Planner',
		company: 'NGP · One Platform',
		tagline: 'Visual campaign hierarchies at enterprise scale',
		impact: 'Thousands of rows, lag-free',
		stack: ['Zustand', 'TanStack Query', 'Salesforce', 'Marketo'],
		image: smartPlannerImage,
		imageAlt: 'Smart Planner campaign table with folder hierarchy and status filters',
		accent: 'var(--accent-muted)',
	},
	{
		id: 'smart-calendar',
		size: 'medium',
		title: 'Smart Calendar',
		company: 'NGP · One Platform',
		tagline: '4 platforms, 6 views, one calendar',
		impact: 'Shareable filters · 1-click export',
		stack: ['Next.js', 'FullCalendar', 'nuqs', 'Batch loading'],
		image: smartCalendarImage,
		imageAlt: 'Smart Calendar month view with multi-platform campaign events',
		accent: 'var(--fg-muted)',
	},
];

export const workMetric = {
	value: '60fps',
	label: 'Rendering under real data load',
	description:
		'useMemo/useCallback, TanStack Virtual, and render-boundary tuning on heavy enterprise UI components.',
};

export const moreWork = [
	{
		id: 'rainy',
		title: 'Rainy Day',
		description: 'Ambient rain sound web app with mood UI.',
		image: rainyImage,
		alt: 'Rainy Day app screenshot showing ambient rain interface',
		href: 'https://rainymood.vercel.app/',
		repo: 'https://github.com/xintipi/rainymood',
	},
	{
		id: 'yadea',
		title: 'Yadea G5',
		description: 'Product landing page for electric scooter.',
		image: yadeaImage,
		alt: 'Yadea G5 electric scooter product landing page',
		href: 'https://yadea-g5.vercel.app/',
		repo: 'https://github.com/xintipi/yadea-g5',
	},
	{
		id: 'gumike',
		title: 'Gumike 2019',
		description: 'Event microsite for Gumi Japan promotion.',
		image: gumikeImage,
		alt: 'Gumike 2019 event microsite homepage',
		href: 'https://event.gumi.co.jp/gumike2019/',
	},
];


export const contact = {
	lead: 'Open to senior front-end roles on products where performance and architecture matter.',
	availability: 'Open to opportunities · Ho Chi Minh City',
	language: 'English: Upper Intermediate',
};
