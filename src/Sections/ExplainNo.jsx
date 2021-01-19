import React, { forwardRef, useState, useEffect } from 'react';

import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
} from '../Components/StyledComponents';

import no2desc from '../assets/no2desc.svg';

const ExplainNo = (props) => {
	// const { childRef } = props;
	// const [state, setState] = useState();

	// useEffect(() => {
	// 	childRef.current = state;
	// }, [state]);

	return (
		<Section justifyContent="stretch">
			<FlexContainer alignItems="space-between" justifyContent="stretch">
				<SectionTitle alignSelf="flex-start">
					<h2>Over welke luchtvervuiling hebben we het?</h2>
				</SectionTitle>
				<FlexItem
					flexGrow="1"
					alignItems="center"
					justifyContent="space-evenly"
					flexDirection="row"
				>
					<FlexContainer
						flexDirection="row"
						justifyContent="space-evenly"
					>
						<FlexItem flexGrow="1">
							<img src={no2desc} alt="" />
						</FlexItem>
						<FlexTextItem flexGrow="1">
							<h3>Wat is NO2? </h3>
							<p>
								NO2 of stikstofdioxide is een stof die vrijkomt
								bij verbrandingsprocessen. Stikstofdioxide (NO2)
								is een gas dat in Nederland voor een groot
								gedeelte door het autoverkeer wordt
								geproduceerd.
							</p>
							<p>
								Wanneer mensen stikstofdioxide inademen, kan dit
								leiden tot longirritatie, verminderde weerstand,
								en infecties van de luchtwegen. Chronische
								blootstelling aan huidige niveaus van
								stikstofdioxide leidt tot een gemiddelde
								levensduur verkorting van 4 maanden. Er was al
								langere tijd bekend dat fijn stof leidt tot
								vroegere sterfte.
							</p>
						</FlexTextItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default ExplainNo;

//ik zit nog in die call trouwens lol
