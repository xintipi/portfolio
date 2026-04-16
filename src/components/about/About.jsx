import './About.css';
import logo from '../../assets/me.jpg';
import AboutBox from './AboutBox';

const About = () => {
	return (
		<section className="about container section" id="about">
			<h2 className="section__title">About Me</h2>

			<div className="about__container grid">
				<div className="about__image__Wrapper">
					<img src={logo} alt="" className="about__img" />
					<a href="/mycv.pdf" download="resume" className="btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '15px' }}>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						Download CV
					</a>
				</div>

				<div className="about__data grid">
					<div className="about__info">
						<p className="about__description">Hey! I'm Trung. Front-End Engineer with 7+ years of experience building fast and scalable web
applications. Specialized in React, Next.js, and TypeScript with a strong "Backend of the
Frontend" mindset. Highly skilled at solving complex logic, handling massive datasets on
the browser, and optimizing UI rendering speed.</p>

						<p className="about__description">Proven track record of delivering advanced features, including drag-and-drop editors
and AI integrations. Passionate about writing clean code, improving team workflows, and
mentoring junior engineers to build high-quality products.</p>

						<div className="about__expertise">
							<h4 className="about__expertise-title">Expertise Areas</h4>
							<div className="about__expertise-list">
								<span className="expertise-badge">React & Next.js</span>
								<span className="expertise-badge">JavaScript / TypeScript</span>
								<span className="expertise-badge">State Management</span>
								<span className="expertise-badge">Web Performance</span>
								<span className="expertise-badge">UI Rendering Optimization</span>
								<span className="expertise-badge">AI Integrations (MCP)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutBox />
		</section>
	);
};

export default About;
