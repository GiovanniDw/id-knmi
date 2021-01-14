import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { Section } from '../Components/StyledComponents';

export const Intro = () => {
	const headingRef = useRef();
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		gsap.from(headingRef.current, {
			x: 0,
			opacity: 1,
			duration: 0.5,
		});

		gsap.to(headingRef.current, {
			x: -500,
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
	}, []);

	return (
		<Section>
			<h1 ref={headingRef} className="InitialHeading">
				Wat gebeurt er met luchtvervuiling wanneer een virus Europeanen
				dwingt om thuis te blijven?{' '}
			</h1>
		</Section>
	);
};

export default Intro;
