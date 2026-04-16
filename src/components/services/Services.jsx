import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const Services = () => {
	const data = [
		{
			id: 1,
			image: Image1,
			title: 'Frontend Development',
			description: 'I build responsive, fast, and scalable web applications using React, Next.js, and TypeScript. With a strong "Backend of the Frontend" mindset, I handle complex data, heavy logic, and massive datasets effortlessly right on the browser.',
		},
		{
			id: 2,
			image: Image2,
			title: 'Performance Optimization',
			description: 'I transform slow UI updates into seamless experiences. By leveraging robust state management like Zustand and TanStack Query, I eliminate rendering bottlenecks, optimize loading speed, and ensure rock-solid application stability.',
		},
		{
			id: 3,
			image: Image3,
			title: 'AI & Advanced Integrations',
			description: 'I specialize in delivering advanced features such as interactive drag-and-drop workflow editors and AI-powered integrations. I deploy Node.js MCP servers to securely process and manage AI data bridges efficiently.',
		},
	];

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services__container grid">
				{data.map((service) => (
					<div className="services__card" key={service.id}>
						<img src={service.image} alt="" className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
