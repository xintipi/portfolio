import { about, expertise } from '../../data/content';

import Reveal from '../ui/Reveal';

import './About.css';



const About = () => {

	return (

		<section className="section section--band about" id="about">

			<div className="container">

				<Reveal>

					<div className="section__header">

						<p className="section__eyebrow">About</p>

						<h2 className="section__title">{about.title}</h2>

					</div>

				</Reveal>



				<div className="about__grid">

					<Reveal delay={80}>

						<div className="about__copy">

							{about.paragraphs.map((paragraph) => (

								<p key={paragraph.slice(0, 40)}>{paragraph}</p>

							))}

							<p className="about__education">{about.education}</p>

						</div>

					</Reveal>



					<Reveal delay={160}>

						<div className="about__aside">

							<h3 className="about__aside-title">What I do</h3>

							<ul className="about__list">

								{about.whatIDo.map((item) => (

									<li key={item}>{item}</li>

								))}

							</ul>



							<div className="about__tags">

								{expertise.map((tag) => (

									<span key={tag} className="tag">

										{tag}

									</span>

								))}

							</div>

						</div>

					</Reveal>

				</div>

			</div>

		</section>

	);

};



export default About;

