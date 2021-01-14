import React, { useState, useEffect, useRef } from 'react';

import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
// import Sections from './Components/Sections';
import ExplainNo from './Sections/ExplainNo';
import LuchtVervuiling from './Sections/LuchtVervuiling';
import Intro from './Sections/Intro';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Section } from './Components/StyledComponents';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SelectCountry from './Sections/SelectCountry';

import Belgie from './assets/Belgie.svg';
import Nederland from './assets/Nederland.svg';
import Duitsland from './assets/Duitsland.svg';

const App = () => {
	const [activeCountry, setActiveCountry] = useState(null);
	const Countries = [
		{ name: 'Nederland', icon: Nederland },
		{ name: 'Belgie', icon: Belgie },
		{ name: 'Duitsland', icon: Duitsland },
	];
	return (
		<AppContainer className="App">
			<Intro />

			<ExplainNo />
			<SelectCountry
				setActiveCountry={setActiveCountry}
				countries={Countries}
			/>
			<LuchtVervuiling activeCountry={activeCountry} />

			<Section className="section-4">
				<Map mapURL={'/mapid-2020'} />
			</Section>
			<GlobalStyle />
		</AppContainer>
	);
};

export default App;
