import React, { useState, useEffect } from 'react';

import ServerService from './services/ServerService';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const data = ServerService();

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>{data}</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
