import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Routes } from './components/Routes.jsx';
import { Footer } from './components/Footer.jsx';

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
				<Navbar />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;
