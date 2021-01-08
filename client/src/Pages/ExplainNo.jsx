import React from 'react';

import { GridContainer, GridItem } from '../Components/StyledComponents';

const ExplainNo = () => {
	return (
		<GridContainer>
			<GridItem>
				<h1>
					Wanneer een virus heel alle Nederlanders dwingt om thuis te
					blijven, waarom blijft er een grote wolk van luchtvervuiling
					boven Nederland hangen?{' '}
				</h1>
			</GridItem>
			<GridItem>
				<GridItem>NO2</GridItem>
				<GridItem>
					<GridContainer>
						<h2>Wat is NO2? </h2>
						<p>
							NO2 of stikstofdioxide is een stof die vrijkomt bij
							verbrandingsprocessen. Wanneer mensen
							stikstofdioxide inademen, kan dit leiden tot
							longirritatie, verminderde weerstand, en infecties
							van de luchtwegen. Chronische blootstelling aan
							huidige niveaus van stikstofdioxide leidt tot een
							gemiddelde levensduur verkorting van 4 maanden. Er
							was al langere tijd bekend dat fijn stof leidt tot
							vroegere sterfte.
						</p>
					</GridContainer>
				</GridItem>
			</GridItem>
		</GridContainer>
	);
};

export default ExplainNo;
