import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Section, FlexContainer } from '../Components/StyledComponents';

export const Intro = (props) => {
	const { introRef } = props;
	const headingRef = useRef();
	const [visibility, setVisibility] = useState();

	useEffect(() => {
		introRef.current = visibility;
	}, [visibility]);

	useEffect(() => {
		gsap.from(headingRef.current, {
			x: 0,
			opacity: 1,
			duration: 0.5,
		});

		gsap.to(headingRef.current, {
			x: -300,
			opacity: 0,
			scrollTrigger: {
				trigger: headingRef.current,
				// top refers to the element 30% refers to the percentage of the viewport height
				start: 'top 30%',
				markers: true,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [headingRef]);

	return (
		<Section>
			<FlexContainer>
				<h1 ref={headingRef} className="InitialHeading">
					<span ref={introRef}>
						{' '}
						Wat gebeurt er met luchtvervuiling wanneer een virus
						Europeanen dwingt om thuis te blijven?{' '}
					</span>
				</h1>
			</FlexContainer>
		</Section>
	);
};

export default Intro;
