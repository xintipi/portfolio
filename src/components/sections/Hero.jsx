import portrait from '../../assets/me.webp';
import { hero, heroMetrics, socialLinks, siteMeta } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Hero.css';

const Hero = () => {
	const [beforeEmphasis, afterEmphasis] = hero.headline.split(hero.headlineEmphasis);

	return (
		<section className="hero" id="home">
			<div className="hero__grain" aria-hidden="true" />
			<div className="container hero__grid">
				<div className="hero__content">
					<Reveal>
						<p className="hero__eyebrow">{hero.eyebrow}</p>
					</Reveal>

					<Reveal delay={80}>
						<h1 className="hero__title">
							{beforeEmphasis}
							<em>{hero.headlineEmphasis}</em>
							{afterEmphasis}
						</h1>
					</Reveal>

					<Reveal delay={160}>
						<p className="hero__lead">{hero.lead}</p>
					</Reveal>

					<Reveal delay={240}>
						<div className="hero__actions">
							<a href="#work" className="btn btn--primary">
								View selected work
							</a>
							<a href="/Nguyen_Huu_Trung_Frontend_Developer.pdf" download className="btn btn--ghost">
								Download CV
							</a>
						</div>
					</Reveal>

					<Reveal delay={320}>
						<ul className="hero__metrics">
							{heroMetrics.map((item) => (
								<li key={item.label} className="hero__metric">
									<span className="hero__metric-value">{item.value}</span>
									<span className="hero__metric-label">{item.label}</span>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal delay={400}>
						<ul className="hero__socials">
							{socialLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} target="_blank" rel="noopener noreferrer">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</Reveal>
				</div>

				<Reveal delay={120} className="hero__visual">
					<div className="hero__visual-card">
						<div className="hero__portrait-frame">
							<img
								src={portrait}
								alt={`${siteMeta.name}, ${siteMeta.title}`}
								className="hero__portrait"
								width={400}
								height={480}
							/>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default Hero;
