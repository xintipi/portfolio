import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
	{
		id: 1,
		category: 'education',
		icon: 'icon-graduation',
		year: '2013 - 2018',
		title: 'Bachelor of Engineering (Computer Networks)',
		desc: (
			<span>
				University of Information Technology (UIT) <br /> Ho Chi Minh City, Vietnam <br /> GPA: 7.91/10
			</span>
		),
	},
	{
		id: 2,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'Aug 2023 - Present',
		title: 'Front-End Developer @ Next Generation Platform Inc',
		desc: (
			<ul style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
				<li><b>Smart Email Builder:</b> Boosted creation speed 10x via drag-and-drop UI and AI template generation via Node.js MCP server.</li>
				<li><b>Smart Planner:</b> Optimized campaign management with high-performance Zustand/TanStack tables and automated Salesforce/Marketo syncing.</li>
				<li><b>Smart Calendar:</b> Built centralized multi-platform calendar with advanced filtering, 1-click sharing, and batch-loading for smooth UI.</li>
			</ul>
		),
	},
	{
		id: 3,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'Feb 2018 - 2023',
		title: 'Front-End Developer @ Gumi Vietnam',
		desc: (
			<ul style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
				<li><b>Projects:</b> Kadogawa AR learning, Pharmacy fast-booking system, Japanese legal platform, and Math Content HTML5 games.</li>
				<li>Led company-wide TypeScript migration, greatly improving code quality and performance.</li>
				<li>Mentored junior engineers by establishing clean code practices and conducting regular code reviews.</li>
			</ul>
		),
	},
	{
		id: 4,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'Feb 2017 - May 2017',
		title: 'WordPress Developer Intern @ SOLAZU JSC',
		desc: 'Built custom WordPress themes and plugins, optimizing performance and mobile UX under tight deadlines.',
	},
];

const Resume = () => {
	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">Experience</h2>

			<div className="resume__container grid">
				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'education' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>

				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'experience' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>
			</div>
		</section>
	);
};

export default Resume;
