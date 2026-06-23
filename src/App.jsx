import UserInfo from './components/UserInfo';
import Nav from './components/layout/Nav';
import MobileStickyCta from './components/layout/MobileStickyCta';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
	return (
		<>
			<UserInfo />
			<Nav />
			<main className="main">
				<Hero />
				<Work />
				<About />
				<Experience />
				<Contact />
			</main>
			<MobileStickyCta />
			<Analytics />
			<SpeedInsights />
		</>
	);
}

export default App;
