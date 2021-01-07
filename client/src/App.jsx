import React, { useState, useEffect } from 'react';
import Map from './Components/Map';
import Sections from './Components/Sections';
import ExplainNo from './Pages/ExplainNo';
import { GlobalStyle, colors } from './GlobalStyles';
import { Container, Section } from './Components/StyledComponents';
const App = () => {
	// const data = ServerService();

	return (
		<Container className='App'>
			<Sections className='section-1'>
				<h1>
					Wanneer een virus heel alle Nederlanders dwingt om thuis te
					blijven, waarom blijft er een grote wolk van luchtvervuiling
					boven Nederland hangen?{' '}
				</h1>
			</Sections>
			<Sections className='section-2'>
				<ExplainNo />
			</Sections>
			<Sections className='section-3'>
				<Map />
			</Sections>
			<Sections className='section-4'>
				<Map />
			</Sections>
			<GlobalStyle />
		</Container>
	);
};

export default App;
