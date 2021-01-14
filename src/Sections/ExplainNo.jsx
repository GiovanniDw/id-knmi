import React from 'react';

import {
	GridContainer,
	GridRow,
	GridCol,
} from '../Components/StyledComponents';

const ExplainNo = () => {
	return (
		<GridContainer>
			<GridRow>
				<h2>Over welke luchtvervuiling hebben we het?</h2>
			</GridRow>
			<GridRow>
				<GridCol size="1">NO2</GridCol>
				<GridCol size="1">
					<h3>Wat is NO2? </h3>
					<p>
						NO2 of stikstofdioxide is een stof die vrijkomt bij
						verbrandingsprocessen. Wanneer mensen stikstofdioxide
						inademen, kan dit leiden tot longirritatie, verminderde
						weerstand, en infecties van de luchtwegen. Chronische
						blootstelling aan huidige niveaus van stikstofdioxide
						leidt tot een gemiddelde levensduur verkorting van 4
						maanden. Er was al langere tijd bekend dat fijn stof
						leidt tot vroegere sterfte.
					</p>
				</GridCol>
			</GridRow>
		</GridContainer>
	);
};

export default ExplainNo;
