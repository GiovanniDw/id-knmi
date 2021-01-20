import React, { forwardRef, useState, useEffect } from 'react';

import styled from 'styled-components';

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

	// useEffect(() => {
	// 	childRef.current = state;
	// }, [state]);

	return (
		<SmallSection>
			<FlexContainer
				darkTheme
				alignItems="space-between"
				justifyContent="stretch"
			>
				<SectionTitle alignSelf="flex-start">
					<h2>
						Een pandemie verspreid zich wereldwijd en Nederland gaat
						in de eerste lockdown.
					</h2>
				</SectionTitle>
				<FlexContainer
					flexGrow="1"
					alignItems="flex-start"
					flexDirection="column"
					darkTheme
				>
					<AnimatedContiner>
						<div className="chart-container">
							<CovidMeasures className="chart" />
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
