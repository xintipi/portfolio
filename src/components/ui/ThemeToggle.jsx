import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/theme';
import './ThemeToggle.css';

const ThemeToggle = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggleTheme}
			aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDarkMode ? <FaSun /> : <FaMoon />}
		</button>
	);
};

export default ThemeToggle;
