import React from 'react';

import { colors } from '../GlobalStyles';
import {
	PositionSection,
	SectionTitle,
	Section,
} from '../Components/StyledComponents';

import StikstofPartOne from '../assets/StikstofPartOne.svg';
import StikstofPartTwo from '../assets/StikstofPartTwo.svg';
import StikstofPartThree from '../assets/StikstofPartThree.svg';

export const NoTwoExplination = () => {
	return (
		<Section>
			<PositionSection>
				<SectionTitle>
					<h2>Over welke luchtvervuiling hebben we het?</h2>
				</SectionTitle>
				<section className="imageRight">
					<img
						src={StikstofPartOne}
						alt=""
						className="StikstofImage"
					/>
					<img
						src={StikstofPartTwo}
						alt=""
						className="StikstofImage"
					/>
					<img
						src={StikstofPartThree}
						alt=""
						className="StikstofImage"
					/>
				</section>
				<section className="textLeft">
					<h3>Wat is NO2? </h3>
					<p>
						NO2 of stikstofdioxide is een stof die vrijkomt bij
						verbrandingsprocessen. Stikstofdioxide (NO2) is een gas
						dat in Nederland voor een groot gedeelte door het
						autoverkeer wordt geproduceerd.
					</p>
					<p>
						Wanneer mensen stikstofdioxide inademen, kan dit leiden
						tot longirritatie, verminderde weerstand, en infecties
						van de luchtwegen. Chronische blootstelling aan huidige
						niveaus van stikstofdioxide leidt tot een gemiddelde
						levensduur verkorting van 4 maanden. Er was al langere
						tijd bekend dat fijn stof leidt tot vroegere sterfte.
					</p>
				</section>
			</PositionSection>
		</Section>
	);
};

export default NoTwoExplination;
