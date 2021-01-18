import React, { useState, useEffect, useRef } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
// import ExplainNo from './Sections/ExplainNo';
import NoTwoExplination from './Sections/NoTwoExplination';
import LuchtVervuiling from './Sections/LuchtVervuiling';
import Intro from './Sections/Intro';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Section } from './Components/StyledComponents';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import SelectCountry from './Sections/SelectCountry';

import Belgie from './assets/Belgie.svg';
import Nederland from './assets/Nederland.svg';
import Duitsland from './assets/Duitsland.svg';

export const App = () => {
	const Countries = [
		{ name: 'Nederland', icon: Nederland },
		{ name: 'Belgie', icon: Belgie },
		{ name: 'Duitsland', icon: Duitsland },
	];

	const [activeCountry, setActiveCountry] = useState(Countries[0]);
	const [backgroundColor, setBackgroundColor] = useState('blue');
	const appContainerRef = useRef();

	const [isInViewport, ExplainNoRef] = useIsInViewport();

	useEffect(() => {
		console.log(activeCountry);
		return;
	}, []);

	return (
		<AppContainer ref={appContainerRef} className="App">
			<Intro />
			<NoTwoExplination />
			{/* <ExplainNo ref={ExplainNoRef} /> */}
			<SelectCountry
				setActiveCountry={setActiveCountry}
				countries={Countries}
			/>

			{!activeCountry ? (
				console.log(activeCountry)
			) : (
				<>
					<LuchtVervuiling activeCountry={activeCountry} />
					<Section className="section-4">
						<Map mapURL={'/mapid-2020'} />
					</Section>
					)
				</>
			)}

			<GlobalStyle
			// bg={backgroundColor}
			/>
		</AppContainer>
	);
};

export default App;
