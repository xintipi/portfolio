import { useState } from 'react';
import './Portfolio.css';
import rainyImage from '../../assets/rainy.png';
import gumikeImage from '../../assets/gumike-2019.png';
import gumike02Image from '../../assets/gumike-2019-02.png';
import yadeaImage from '../../assets/yadea-g5.png';

const categories = {
	WEB: 'WEB',
	DESKTOP: 'DESKTOP',
	FIGMA: 'FIGMA',
	WORDPRESS: 'WORDPRESS',
	RESEARCH: 'RESEARCH',
};

const menuItem = [
	{
		id: 1,
		image: rainyImage,
		title: 'Rainy Day',
		category: categories.WEB,
		link: 'https://github.com/xintipi/rainymood',
		demo: 'https://rainymood.vercel.app/',
	},
	{
		id: 2,
		image: gumikeImage,
		title: 'Gumike 2019',
		category: categories.WEB,
		demo: 'https://event.gumi.co.jp/gumike2019/',
		fit: 'contain',
	},
	{
		id: 3,
		image: gumike02Image,
		title: 'Gumi Promotion',
		category: categories.WEB,
		demo: 'http://promotion.gumi.co.jp/',
		fit: 'contain',
	},
	{
		id: 4,
		image: yadeaImage,
		title: 'Yadea G5',
		category: categories.WEB,
		link: 'https://github.com/xintipi/yadea-g5',
		demo: 'https://yadea-g5.vercel.app/',
	},
];

const Portfolio = () => {
	const [items, setItems] = useState(menuItem);

	const filterItems = (categoryItem) => {
		const UpdatedItems = menuItem.filter((curElm) => {
			return curElm.category === categoryItem;
		});

		setItems(UpdatedItems);
	};

	return (
		<section className="work container section" id="portfolio">
			<h2 className="section__title">Recent works</h2>
			<div className="work__filters">
				<span className="work__item" onClick={() => setItems(menuItem)}>
					Everything
				</span>
				<span className="work__item" onClick={() => filterItems(categories.WEB)}>
					Web Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.DESKTOP)}>
					Desktop Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.FIGMA)}>
					Figma Design
				</span>
				<span className="work__item" onClick={() => filterItems(categories.WORDPRESS)}>
					Wordpress
				</span>
				<span className="work__item" onClick={() => filterItems(categories.RESEARCH)}>
					Research
				</span>
			</div>

			<div className="work__container grid">
				{items.map((item) => {
					const { id, image, title, category } = item;

					return (
						<div className="work__card fadeInUp" key={id}>
							<div className="work__thumbnail">
								<img src={image} alt={title} className="work__img" />
								<div className="work__mask"></div>
							</div>
							<span className="work__category">{category}</span>
							<h3 className="work__title">{title}</h3>
							{item.link && (
								<a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer" title="View source code">
									<i className="icon-link work__button-icon"></i>
								</a>
							)}
							{item.demo && (
								<a href={item.demo} className="work__button work__button--demo" target="_blank" rel="noopener noreferrer" title="Visit live site">
									<i className="icon-globe work__button-icon"></i>
								</a>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
