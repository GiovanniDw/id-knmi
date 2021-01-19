import React from 'react';
import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
} from '../Components/StyledComponents';

import Map from '../Components/Map';
const LuchtVervuiling = (props) => {
	const { activeCountry } = props;

	return (
		<Section>
			<FlexContainer>
				<SectionTitle alignSelf="flex-end">
					<h2>
						Hoe zit het met luchtvervuiling <br />
						in {activeCountry ? activeCountry.name : 'Nederland'} ?
					</h2>
				</SectionTitle>
				<FlexItem flexGrow="1" alignItems="stretch">
					<FlexContainer
						flexDirection="row"
						justifyContent="space-around"
						alignItems="stretch"
						alignContent="center"
					>
						<FlexItem flexGrow="1" alignSelf="center">
							<Map mapURL="/mapid-2019" />
						</FlexItem>

						<FlexItem flexGrow="1" alignSelf="center">
							<Map mapURL="/mapid-2019" />
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default LuchtVervuiling;
