import { experience } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Experience.css';

const Experience = () => {
	return (
		<section className="section section--band experience" id="experience">
			<div className="container">
				<Reveal>
					<div className="section__header">
						<p className="section__eyebrow">Experience</p>
						<h2 className="section__title">Impact over tenure.</h2>
					</div>
				</Reveal>

				<div className="experience__timeline">
					{experience.map((job, index) => (
						<Reveal key={`${job.company}-${job.period}`} delay={index * 100}>
							<article className="experience__item">
								<div className="experience__card">
									<div className="experience__meta">
										<span className="experience__period">{job.period}</span>
										<h3 className="experience__role">{job.role}</h3>
										<p className="experience__company">{job.company}</p>
										{job.location && <p className="experience__location">{job.location}</p>}
									</div>
									<ul className="experience__highlights">
										{job.highlights.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
