import React, { useState, useEffect, useRef } from 'react';

import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
// import Sections from './Components/Sections';
import ExplainNo from './Sections/ExplainNo';
import LuchtVervuiling from './Sections/LuchtVervuiling';
import Intro from './Sections/Intro';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Section } from './Components/StyledComponents';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<AppContainer className="App">
			<Intro />
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
