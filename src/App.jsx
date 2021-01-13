import React, { useState, useEffect } from 'react';

import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
// import Sections from './Components/Sections';
import ExplainNo from './Pages/ExplainNo';
import LuchtVervuiling from './Pages/LuchtVervuiling';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Intro, IntroHeading, Section } from './Components/StyledComponents';
import { motion } from 'framer-motion';

const App = () => {
	// const data = ServerService();

	return (
		<AppContainer className="App">
			<Intro className="section-1">
				<motion.h1 className="framerSolution" initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: '-25vw' }} transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 90 }}>
					Wanneer een virus alle Nederlanders dwingt om thuis te
					blijven, waarom blijft er een grote wolk van luchtvervuiling
					boven Nederland hangen?{' '}
				</motion.h1>
			</Intro>
			<Section className="section-2">
				<ExplainNo />
			</Section>
			<Section className="section-3">
				<LuchtVervuiling />
			</Section>
			<Section className="section-4">
				<Map mapURL={'/mapid-2020'} />
			</Section>
			<GlobalStyle />
		</AppContainer>
	);
};

export default App;
