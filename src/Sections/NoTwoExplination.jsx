import React from 'react';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import { colors } from '../GlobalStyles';
import styled from 'styled-components';
import {
	FlexContainer,
	PositionSection,
	SectionTitle,
	Section,
} from '../Components/StyledComponents';

import NoTwoImage from '../Components/NoTwoImage';

import { NitrogenDioxide } from '../Components/svg';

export const NoTwoExplination = () => {
	const secondHeadingRef = useRef();
	const noTwoTextRef = useRef();
	const noTwoImageRef = useRef();

	useEffect(() => {
		gsap.from(secondHeadingRef.current, {
			y: -150,
			duration: 0.5,
		});

		gsap.to(secondHeadingRef.current, {
			y: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: secondHeadingRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'top 80%',
				end: '+=50%',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [secondHeadingRef]);

	useEffect(() => {
		gsap.from(noTwoImageRef.current, {
			x: -200,
			opacity: 0,
			duration: 0.5,
		});

		gsap.to(noTwoImageRef.current, {
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: noTwoImageRef.current,
				// top refers to the element 30% refers to the percentage of the viewport height
				start: 'top bottom',
				end: '+=50%',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [noTwoImageRef]);

	useEffect(() => {
		gsap.from(noTwoTextRef.current, {
			x: 300,
			duration: 0.5,
		});

		gsap.to(noTwoTextRef.current, {
			x: 0,
			scrollTrigger: {
				trigger: noTwoTextRef.current,
				// top refers to the element 30% refers to the percentage of the viewport height
				start: 'top bottom',
				end: '+=50%',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [noTwoTextRef]);

	return (
		<AlternativeSection>
			<PositionSection>
				<SectionTitle ref={secondHeadingRef} className="bottom">
					<h2>
						Over welke luchtvervuiling <br /> hebben we het?
					</h2>
				</SectionTitle>
				<div ref={noTwoImageRef} className="NoDiv">
					<NitrogenDioxide className="NoIcon" />
				</div>
				<div ref={noTwoTextRef} className="textRight">
					<h3>Wat is NO2?</h3>
					<p>
						NO2 of stikstofdioxide is een stof die vrijkomt bij
						verbrandingsprocessen. Stikstofdioxide (NO2) is een gas
						dat in Nederland voor een groot gedeelte door het
						autoverkeer wordt geproduceerd.
					</p>
					<p>
						Wanneer mensen stikstofdioxide inademen, kan dit leiden
						tot longirritatie, verminderde weerstand, en infecties
						van de luchtwegen. Chronische blootstelling aan huidige
						niveaus van stikstofdioxide leidt tot een gemiddelde
						levensduur verkorting van 4 maanden. Er was al langere
						tijd bekend dat fijn stof leidt tot vroegere sterfte.
					</p>
				</div>
			</PositionSection>
		</AlternativeSection>
	);
};

export default NoTwoExplination;

const AlternativeSection = styled(Section)`
	min-height: 90vh;
	.NoDiv {
		overflow-x: hidden;
		position: absolute;
		top: 30%;
		left: 5%;
		width: 35%;
	}

	.NoIcon {
		overflow-x: hidden;
		width: 100%;
		height: 100%;
	}

	.imageLeft {
		flex-direction: row;
		flex-wrap: wrap;
		position: absolute;
		left: 0;
		width: 50%;

		img {
			height: 30%;
			width: 50%;
		}
	}

	.textRight {
		padding: 2em;
		position: absolute;
		top: 15%;
		right: 0;
		width: 50%;
		color: ${colors.darkBlue};
		background-color: ${colors.lightBrown};

		h3 {
			font-weight: black;
		}

		p {
			font-weight: 600;
		}
	}
`;
