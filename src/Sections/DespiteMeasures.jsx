import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';

import {
	Section,
	SmallSection,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
	LightSectionTitle,
} from '../Components/StyledComponents';

import { UitstootChart } from '../Components/svg';

import first from '../assets/origin/first.png';
import second from '../assets/origin/second.png';

export function LuchtVervuiling(props) {
	const { activeCountry } = props;

	const [isInViewport, useTriggerRef] = useIsInViewport();
	const sixthHeadingRef = useRef();

	useEffect(() => {
		gsap.from(sixthHeadingRef.current, {
			y: -150,
			duration: 0.5,
		});

		gsap.to(sixthHeadingRef.current, {
			y: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: sixthHeadingRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'top center',
				end: '+=60%',
				scrub: 0,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [sixthHeadingRef]);

	return (
		<>
			<Section justifyContent="space-around">
				<FlexContainer
					alignItems="center"
					justifyContent="space-between"
					alignContent="center"
				>
					<LightSectionTitle alignSelf="flex-start">
						<h3>
							Ondanks de maatregelen blijft er een grote <br />
							NO2 wolk boven Rotterdam hangen. <br />
							Wat veroorzaakt dit? <br />
							<br />
							Laten we deze situatie met Amsterdam vergelijken.
						</h3>
					</LightSectionTitle>

					<FlexContainer
						darkTheme
						alignItems="center"
						alignContent="center"
						flexDirection="row"
						ref={useTriggerRef}
						justifyContent="space-around"
					>
						<FlexItem
							flexDirection="row"
							justifyContent="space-between"
						>
							<img
								padding="1em"
								className="trop-left"
								src={first}
							/>
						</FlexItem>

						<FlexItem>
							<img
								padding="1em"
								className="trop-right"
								src={second}
							/>
						</FlexItem>
					</FlexContainer>
					<FlexContainer
						alignItems="center"
						alignContent="center"
						flexDirection="row"
						justifyContent="space-around"
					>
						<FlexItem
							justifyContent="stretch"
							alignContent="stretch"
							alignItems="stretch"
						>
							<h3 textAlign="left">Vergelijk de NO2 uitstoot</h3>
							<UitstootChart
								flexGrow="2"
								isInViewport={isInViewport}
								height="100%"
								width="60vw"
								uitstoot={activeCountry.uitstoot}
							/>
						</FlexItem>
					</FlexContainer>
				</FlexContainer>
			</Section>
		</>
	);
}

export default LuchtVervuiling;
