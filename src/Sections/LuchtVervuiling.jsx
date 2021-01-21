import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';

import {
	Section,
	SmallSection,
	FlexContainer,
	FlexItem,
	SectionTitle,
} from '../Components/StyledComponents';

import { UitstootChart } from '../Components/svg';

export const LuchtVervuiling = (props) => {
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
		<SmallSection>
			<FlexContainer>
				<SectionTitle alignSelf="flex-end">
					<h2 ref={sixthHeadingRef}>
						Hoe zit het met luchtvervuiling <br />
						in {activeCountry ? activeCountry.name : 'Nederland'}
					</h2>
				</SectionTitle>
				<FlexItem flexGrow="1" alignItems="stretch">
					<FlexContainer
						ref={useTriggerRef}
						flexDirection="row"
						justifyContent="space-around"
						alignItems="stretch"
						alignContent="center"
					>
						<FlexItem
							flexGrow="1"
							justifyContent="center"
							alignSelf="center"
						>
							<img src={activeCountry.tropomi} />
						</FlexItem>

						<FlexItem
							flexGrow="1"
							alignSelf="stretch"
							justifyContent="center"
						>
							<UitstootChart
								isInViewport={isInViewport}
								height="100%"
								width="100%"
								uitstoot={activeCountry.uitstoot}
							/>
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</SmallSection>
	);
};

export default LuchtVervuiling;
