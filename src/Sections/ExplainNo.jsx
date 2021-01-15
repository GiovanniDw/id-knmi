import React from 'react';

import {
	GridContainer,
	GridRow,
	GridCol,
	Section,
	FlexContainer,
	FlexItem,
} from '../Components/StyledComponents';

import no2desc from '../assets/no2desc.svg';

const ExplainNo = () => {
	return (
		<Section>
			<FlexContainer>
				<FlexItem>
					<h2>Over welke luchtvervuiling hebben we het?</h2>
				</FlexItem>
				<FlexItem>
					<FlexContainer flexDirection="row">
						<FlexItem size="1">
							<h3>Wat is NO2? </h3>
							<p>
								NO2 of stikstofdioxide is een stof die vrijkomt
								bij verbrandingsprocessen. Stikstofdioxide (NO2)
								is een gas dat in Nederland voor een groot
								gedeelte door het autoverkeer wordt
								geproduceerd.
							</p>
							<img src={no2desc} alt="" />
						</FlexItem>
						<FlexItem size="1">
							<h3>Wat doet het met je gezondheid? </h3>
							<p>
								Wanneer mensen stikstofdioxide inademen, kan dit
								leiden tot longirritatie, verminderde weerstand,
								en infecties van de luchtwegen.
							</p>
							<p>
								Chronische blootstelling aan huidige niveaus van
								stikstofdioxide leidt tot een gemiddelde
								levensduur verkorting van 4 maanden.
							</p>
							<p>
								Er was al langere tijd bekend dat fijn stof
								leidt tot vroegere sterfte.
							</p>
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default ExplainNo;
