import React, { useRef, useEffect, useState } from 'react';
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
	const triggerRef = useRef();

	useEffect(() => {
		useTriggerRef.current = visibility;
	}, [visibility]);

	return (
		<SmallSection>
			<FlexContainer>
				<SectionTitle alignSelf="flex-end">
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
							<StyledUitstootChart
								forwardRef={triggerRef}
								height="100%"
								width="100%"
								isInViewport={isInViewport}
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
