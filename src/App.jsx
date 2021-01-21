import React, { useState, useEffect, useRef } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import useEarthEngine from './hooks/useEarthEngine';
import Map from './Components/Map';
import ExplainNo from './Sections/ExplainNo';
import OriginNo from './Sections/OriginNo';
import NoTwoExplination from './Sections/NoTwoExplination';
import LuchtVervuiling from './Sections/LuchtVervuiling';
import Intro from './Sections/Intro';
import Measures from './Sections/Measures';
import RemainingNo from './Sections/RemainingNo';
import { GlobalStyle, colors } from './GlobalStyles';
import { AppContainer, Section } from './Components/StyledComponents';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SelectCountry from './Sections/SelectCountry';

import Belgie from './assets/Belgie.svg';
import Nederland from './assets/Nederland.svg';
import Duitsland from './assets/Duitsland.svg';
import BE from './assets/origin/BE.svg';
import NL from './assets/origin/NL.svg';
import DE from './assets/origin/DE.svg';
import { UitstootChart } from './Components/svg';

// const Countries = [
// 	{
// 		name: 'Nederland',
// 		icon: Nederland,
// 		uitstoot:
// 			'M64 195L85.212 86.606l12.45 66.596 5.687-58.33 14.295-41.799 14.449 100.129 8.761-58.33 12.45-8.266 10.606 15.908 19.368 45.541 16.293-23.394 23.056 19.651 15.063-6.395 19.982 21.523 16.14-11.385 33.201-23.394 20.596 28.541 13.066-77.982 20.597 49.441 10.605-100.753L385.711 8l12.45 110.89 32.433-16.376 9.991 50.688 12.604-100.129 10.606 94.982 18.752-34.156 15.525 24.018 12.45-24.018 20.751 24.018 18.598 15.285 18.753-22.147L578 163.963',
// 	},
// 	{
// 		name: 'Belgie',
// 		icon: Belgie,
// 		uitstoot:
// 			'M66 203.558l9.76-7.208 9.76-126.87 13.206 104.524 8.038-15.859 12.057-75.69 8.612 104.524 11.482-64.877 5.742-23.067 8.612-23.788L164.751 1l5.742 152.82 18.946-27.392 4.593-21.626 6.89 49.018 14.928 28.113 17.798-13.696 10.908 5.767 16.076 2.883 29.281-54.785 24.114 28.114 15.501-7.93 12.057-111.731 10.909 105.964 18.372-18.021 10.909-13.696 14.353 49.018h12.631l22.392-11.534 20.668-95.152 21.818 121.103 17.798-49.739L500.621 205l6.315-54.784 4.594-28.114 8.037 38.205 6.89 37.485 4.593-37.485 8.612 20.184 3.445-6.487 8.038-5.767 5.741 22.346 9.186-22.346 4.594 8.65L581 193.466',
// 	},
// 	{
// 		name: 'Duitsland',
// 		icon: Duitsland,
// 		uitstoot:
// 			'M60 206l3.56-52.461 11.395 41.969V84.937l12.106 26.634 6.41-33.09 5.697 24.212 9.258-29.055 6.409 74.252L119.82 1l11.394 165.453 12.107-96.85 7.833 69.409 4.985-17.756 12.107-18.563 12.106 66.988 3.561-48.425 10.682 45.197 4.273-41.162 19.94 28.248 34.895-32.283 14.242 20.984 21.365-16.949 22.076 33.091 7.834-52.461 30.622-21.791 15.667-14.528 11.394 33.091 14.243-61.339 7.834 105.729 4.272-70.217 11.395 17.756 11.394 44.39 19.94-27.441 9.97 27.441 12.818-33.091 15.668 55.689 18.515 15.335 3.561-65.374 18.516 68.602 11.394-46.004 14.955 37.126 7.833-50.039 13.531 40.354L582 142.24',
// 	},
// ];

export const App = () => {
	const Countries = [
		{
			name: 'Nederland',
			icon: Nederland,
			uitstoot:
				'M64 195L85.212 86.606l12.45 66.596 5.687-58.33 14.295-41.799 14.449 100.129 8.761-58.33 12.45-8.266 10.606 15.908 19.368 45.541 16.293-23.394 23.056 19.651 15.063-6.395 19.982 21.523 16.14-11.385 33.201-23.394 20.596 28.541 13.066-77.982 20.597 49.441 10.605-100.753L385.711 8l12.45 110.89 32.433-16.376 9.991 50.688 12.604-100.129 10.606 94.982 18.752-34.156 15.525 24.018 12.45-24.018 20.751 24.018 18.598 15.285 18.753-22.147L578 163.963',
			tropomi: NL,
		},
		{
			name: 'Belgie',
			icon: Belgie,
			uitstoot:
				'M66 203.558l9.76-7.208 9.76-126.87 13.206 104.524 8.038-15.859 12.057-75.69 8.612 104.524 11.482-64.877 5.742-23.067 8.612-23.788L164.751 1l5.742 152.82 18.946-27.392 4.593-21.626 6.89 49.018 14.928 28.113 17.798-13.696 10.908 5.767 16.076 2.883 29.281-54.785 24.114 28.114 15.501-7.93 12.057-111.731 10.909 105.964 18.372-18.021 10.909-13.696 14.353 49.018h12.631l22.392-11.534 20.668-95.152 21.818 121.103 17.798-49.739L500.621 205l6.315-54.784 4.594-28.114 8.037 38.205 6.89 37.485 4.593-37.485 8.612 20.184 3.445-6.487 8.038-5.767 5.741 22.346 9.186-22.346 4.594 8.65L581 193.466',
			tropomi: BE,
		},
		{
			name: 'Duitsland',
			icon: Duitsland,
			uitstoot:
				'M60 206l3.56-52.461 11.395 41.969V84.937l12.106 26.634 6.41-33.09 5.697 24.212 9.258-29.055 6.409 74.252L119.82 1l11.394 165.453 12.107-96.85 7.833 69.409 4.985-17.756 12.107-18.563 12.106 66.988 3.561-48.425 10.682 45.197 4.273-41.162 19.94 28.248 34.895-32.283 14.242 20.984 21.365-16.949 22.076 33.091 7.834-52.461 30.622-21.791 15.667-14.528 11.394 33.091 14.243-61.339 7.834 105.729 4.272-70.217 11.395 17.756 11.394 44.39 19.94-27.441 9.97 27.441 12.818-33.091 15.668 55.689 18.515 15.335 3.561-65.374 18.516 68.602 11.394-46.004 14.955 37.126 7.833-50.039 13.531 40.354L582 142.24',
			tropomi: DE,
		},
	];
	const [countries, setCountries] = useState(Countries);
	const [activeCountry, setActiveCountry] = useState();
	const [backgroundColor, setBackgroundColor] = useState();
	const appContainerRef = useRef();

	// const [isInViewport, IntroRef] = useIsInViewport();

	useEffect(() => {
		setActiveCountry(countries[0]);
		return;
	}, [ScrollTrigger]);

	// useEffect(() => {
	// 	isInViewport
	// 		? setBackgroundColor(colors.darkBlue)
	// 		: setBackgroundColor(colors.lightBrown);
	// }, [isInViewport]);

	if (!countries) return 'loading';

	return (
		<>
			<GlobalStyle />
			<AppContainer ref={appContainerRef} className="App">
				<Intro />
				<NoTwoExplination />
				{/* <ExplainNo /> */}
				<SelectCountry
					setActiveCountry={setActiveCountry}
					countries={Countries}
				/>

				{!activeCountry ? (
					''
				) : (
					<>
						<LuchtVervuiling activeCountry={activeCountry} />
						<OriginNo />
						<Measures activeCountry={activeCountry} />
						<RemainingNo />
						{/* <Section className="section-4">
						<Map mapURL={'/mapid-2020'} />
					</Section> */}
					</>
				)}
			</AppContainer>
		</>
	);
};

export default App;
