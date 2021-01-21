import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';
import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
	SmallSection,
} from '../Components/StyledComponents';

import { CovidMeasures, UitstootChart } from '../Components/svg';

const Measures = (props) => {
	// const { childRef } = props;
	// const [state, setState] = useState();
	const [isInViewport, useTriggerRef] = useIsInViewport();
	// useEffect(() => {
	// 	childRef.current = state;
	// }, [state]);

	const seventhHeadingRef = useRef();

	useEffect(() => {
		gsap.from(seventhHeadingRef.current, {
			y: -100,
			duration: 0.5,
		});

		gsap.to(seventhHeadingRef.current, {
			y: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: seventhHeadingRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'top 80%',
				end: 'bottom top',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [seventhHeadingRef]);

	return (
		<SmallSection>
			<FlexContainer
				darkTheme
				alignItems="space-between"
				justifyContent="stretch"
			>
				<SectionTitle alignSelf="flex-start">
					<h2 ref={seventhHeadingRef}>
						Een pandemie verspreid zich wereldwijd en Nederland gaat
						in de eerste lockdown.
					</h2>
				</SectionTitle>
				<FlexContainer
					ref={useTriggerRef}
					flexGrow="1"
					alignItems="flex-start"
					flexDirection="column"
					darkTheme
				>
					<AnimatedContiner>
						<div className="chart-container">
							<CovidMeasures
								className="chart"
								isInViewport={isInViewport}
							/>
						</div>
					</AnimatedContiner>
				</FlexContainer>
			</FlexContainer>
		</SmallSection>
	);
};

const AnimatedContiner = styled.div`
	align-self: center;
	/* height: 100%; */
	/* overflow: hidden; */
	/* border: 2px solid red; */
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: stretch;
	flex-direction: row;
	align-content: stretch;
	padding: 1.5em;
	.chart-container {
		width: 100%;
		max-height: 40vh;
		.chart {
			width: 100%;
			height: 100%;
		}
	}
`;

export default Measures;
