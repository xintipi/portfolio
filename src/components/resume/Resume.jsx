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
		desc: 'React and TypeScript specialist. Built complex drag-and-drop features and integrated AI-powered toolings via MCP servers, heavily focusing on performance and robust state management.',
	},
	{
		id: 3,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'Feb 2018 - 2023',
		title: 'Front-End Developer @ Gumi Vietnam',
		desc: 'Built React & Vue web apps and HTML5 Canvas games. Led TypeScript migrations and mentored junior frontend engineers establishing clean code practices.',
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
