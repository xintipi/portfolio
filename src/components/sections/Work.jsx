import { featuredWork, moreWork, workMetric } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Work.css';

const WorkCard = ({ item }) => (
	<article className={`work-card work-card--${item.size}`} style={{ '--card-accent': item.accent }}>
		{item.image && (
			<div className="work-card__media">
				<img src={item.image} alt={item.imageAlt} loading="lazy" width={1200} height={675} />
			</div>
		)}
		<div className="work-card__body">
			<div className="work-card__top">
				<span className="work-card__company">{item.company}</span>
				{item.impact && <span className="work-card__impact">{item.impact}</span>}
			</div>
			<h3 className="work-card__title">{item.title}</h3>
			<p className="work-card__tagline">{item.tagline}</p>
			{item.problem && <p className="work-card__problem">{item.problem}</p>}
			<ul className="work-card__stack">
				{item.stack.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
		</div>
	</article>
);

const Work = () => {
	const featured = featuredWork.find((w) => w.size === 'featured');
	const medium = featuredWork.filter((w) => w.size === 'medium');

	return (
		<section className="section work" id="work">
			<div className="container">
				<Reveal>
					<div className="section__header">
						<p className="section__eyebrow">Selected work</p>
						<h2 className="section__title">Products I&apos;ve shaped.</h2>
						<p className="section__subtitle">
							Enterprise tools where performance and complexity meet — plus side projects I ship for fun.
						</p>
					</div>
				</Reveal>

				<Reveal delay={100}>
					<div className="work-bento">
						{featured && <WorkCard item={featured} />}
						<article className="work-card work-card--metric">
							<span className="work-card__metric-value">{workMetric.value}</span>
							<h3 className="work-card__metric-title">{workMetric.label}</h3>
							<p className="work-card__metric-desc">{workMetric.description}</p>
						</article>
						{medium.map((item) => (
							<WorkCard key={item.id} item={item} />
						))}
					</div>
				</Reveal>

				<Reveal delay={180}>
					<div className="work-more">
						<h3 className="work-more__title">More work</h3>
						<div className="work-more__grid">
							{moreWork.map((project) => (
								<article key={project.id} className="work-more__card">
									<a href={project.href} target="_blank" rel="noopener noreferrer" className="work-more__link">
										<div className="work-more__thumb">
											<img src={project.image} alt={project.alt} loading="lazy" width={640} height={400} />
										</div>
										<div className="work-more__body">
											<h4>{project.title}</h4>
											<p>{project.description}</p>
										</div>
									</a>
									{project.repo && (
										<a href={project.repo} target="_blank" rel="noopener noreferrer" className="work-more__repo">
											Source →
										</a>
									)}
								</article>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default Work;
