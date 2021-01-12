import React, { useState, useEffect } from 'react';

import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
// import Sections from './Components/Sections';
import ExplainNo from './Pages/ExplainNo';
import LuchtVervuiling from './Pages/LuchtVervuiling';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Section } from './Components/StyledComponents';
const App = () => {
	// const data = ServerService();

	return (
		<AppContainer className='App'>
			<Section className='section-1'>
				<h1>
					Wanneer een virus heel alle Nederlanders dwingt om thuis te
					blijven, waarom blijft er een grote wolk van luchtvervuiling
					boven Nederland hangen?{' '}
				</h1>
			</Section>
			<Section className='section-2'>
				<ExplainNo />
			</Section>
			<Section className='section-3'>
				<LuchtVervuiling />
			</Section>
			<Section className='section-4'>
				<Map mapURL={'/mapid-2020'} />
			</Section>
			<GlobalStyle />
		</AppContainer>
	);
};

export default App;
