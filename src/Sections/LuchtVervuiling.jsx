import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

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

import Map from '../Components/Map';
const LuchtVervuiling = (props) => {
	const { activeCountry } = props;
	const [visibility, setVisibility] = useState();
	const [isInViewport, useTriggerRef] = useIsInViewport();
	const scrollTriggerRef = useRef();
	const triggerRef = useRef();
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
				start: 'top bottom',
				end: '+=20%',
				// markers: true,
				scrub: 0,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [sixthHeadingRef]);

	useEffect(() => {
		useTriggerRef.current = visibility;
	}, [visibility]);

	return (
		<SmallSection ref={scrollTriggerRef}>
			<FlexContainer>
				<SectionTitle ref={sixthHeadingRef} alignSelf="flex-end">
					<h2>
						Hoe zit het met luchtvervuiling <br />
						in {activeCountry ? activeCountry.name : 'Nederland'} ?
					</h2>
				</SectionTitle>
				<FlexItem flexGrow="1" alignItems="stretch" ref={useTriggerRef}>
					<FlexContainer
						flexDirection="row"
						justifyContent="space-around"
						alignItems="stretch"
						alignContent="center"
						ref={triggerRef}
					>
						<FlexItem
							flexGrow="0"
							justifyContent="stretch"
							alignSelf="stretch"
						>
							{activeCountry ? (
								<img src={activeCountry.icon} />
							) : (
								''
							)}
						</FlexItem>

						<FlexItem
							flexGrow="1"
							alignSelf="stretch"
							justifyContent="center"
						>
							<UitstootChart
								forwardRef={triggerRef}
								height="100%"
								width="100%"
								isInViewport={isInViewport}
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

const StyledUitstootChart = styled(UitstootChart)`
	width: 100%;
	height: 100%;
	align-self: center;
`;
