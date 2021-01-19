import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors } from '../GlobalStyles';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import {
	FlexContainer,
	flexItem,
	PositionSection,
} from '../Components/StyledComponents';

import Gebouwen from '../assets/Gebouwen.svg';

export const Intro = (props) => {
	const { introRef } = props;
	const headingRef = useRef();
	const introSvgRef = useRef();
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
				start: '20% 20%',
				markers: true,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [headingRef]);

	useEffect(() => {
		gsap.from(introSvgRef.current, {
			x: 0,
			opacity: 1,
			duration: 0.4,
		});

		gsap.to(introSvgRef.current, {
			x: 400,
			opacity: 0,
			scrollTrigger: {
				trigger: introSvgRef.current,
				// top refers to the element 30% refers to the percentage of the viewport height
				start: 'top 20%',
				markers: true,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [headingRef]);

	return (
		<Section className="FirstSlide">
			<div>
				<h1 ref={headingRef} className="InitialHeading">
					<span ref={introRef}>
						{' '}
						Wat gebeurt er met luchtvervuiling <br />
						wanneer een virus Europeanen <br />
						dwingt om thuis te blijven?{' '}
					</span>
				</h1>
				<img ref={introSvgRef} src={Gebouwen} alt="" />
			</div>
		</Section>
	);
};

export default Intro;

const Section = styled.section`
	overflow-x: hidden;
	div {
		width: 100%;
		height: 100%;
		background-color: ${colors.darkBlue};
	}

	img {
		position: absolute;
		width: 50vw;
		height: auto;
		bottom: 10vh;
		left: 10%;
	}

	&.FirstSlide {
		max-width: 100%;
		height: 100vh;
		position: relative;
		padding: 7% 7% 0 7%;
	}

	.InitialHeading {
		position: absolute;
		top: 30vh;
		right: 15%;

		text-align: right;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		line-height: 150%;
		font-size: 2.2em;
		overflow-y: hidden;
		color: ${colors.white};
	}
`;
