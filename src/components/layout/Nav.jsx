import { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import ThemeToggle from '../ui/ThemeToggle';
import './Nav.css';

const Nav = () => {
	const [active, setActive] = useState('home');
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const sectionIds = ['home', ...navLinks.map((l) => l.id)];

		const onScroll = () => {
			setScrolled(window.scrollY > 24);

			const offset = 120;
			let current = 'home';
			for (const id of sectionIds) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= offset) {
					current = id;
				}
			}
			setActive(current);
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const handleNavClick = () => setMenuOpen(false);

	return (
		<header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
			<div className="nav__inner container">
				<a href="#home" className="nav__brand" onClick={handleNavClick}>
					NHT
				</a>

				<nav className="nav__links" aria-label="Primary">
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="nav__actions">
					<a href="/Nguyen_Huu_Trung_Frontend_Developer.pdf" download className="nav__cv">
						CV
					</a>
					<ThemeToggle />
					<button
						type="button"
						className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span />
						<span />
					</button>
				</div>
			</div>

			{menuOpen && (
				<nav className="nav__mobile" aria-label="Mobile">
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className={`nav__mobile-link ${active === link.id ? 'nav__mobile-link--active' : ''}`}
							onClick={handleNavClick}
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
};

export default Nav;
