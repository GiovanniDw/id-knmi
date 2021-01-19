import React from 'react';
import {
	GridContainer,
	GridRow,
	GridCol,
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
				<SectionTitle>
					<h2>
						Hoe zit het met luchtvervuiling in{' '}
						{activeCountry ? activeCountry.name : 'Nederland'}
					</h2>
				</SectionTitle>
				<FlexItem>
					<FlexContainer flexDirection="row">
						<FlexItem>
							<p>
								De lucht vervuiling is verminderd in 2020, door
								de corona crisis. Deze maatregelen hebben hier
								invloed op gehad.
							</p>
						</FlexItem>

						<FlexItem>
							<Map mapURL="/mapid-2019" />
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default LuchtVervuiling;
