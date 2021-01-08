import React from 'react';

import {
	GridContainer,
	GridRow,
	GridCol,
} from '../Components/StyledComponents';

import Map from '../Components/Map';
const LuchtVervuiling = () => {
	return (
		<GridContainer>
			<GridRow>
				<h1>Hoe zit het met luchtvervuiling in Nederland?</h1>
			</GridRow>
			<GridRow>
				<GridCol size='1'>
					<GridContainer>
						<GridRow>
							<Map mapURL='/mapid-2019' />
						</GridRow>
						<GridRow>
							<div>
								<p>
									De lucht vervuiling is verminderd in 2020,
									door de corona crisis. Deze maatregelen
									hebben hier invloed op gehad.
								</p>
							</div>
						</GridRow>
					</GridContainer>
				</GridCol>
				<GridCol size='1'>
					<h2>Advies Dingen</h2>
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

export default LuchtVervuiling;
